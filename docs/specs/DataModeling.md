# Data Architecture and Modeling: MS Teams Insights Aggregator

## 1. Overview
The database uses PostgreSQL to store relational metadata for projects, clients, and their respective chat messages and analysis results.

## 2. Entity Relationship Diagram (ERD) - Conceptual

### 2.1 Main Tables
| Table | Description | Primary Key | Foreign Key(s) |
| :--- | :--- | :--- | :--- |
| **`organizations`** | Company/Tenant level info | `org_id` | - |
| **`projects`** | Project level data | `project_id` | `org_id` |
| **`channels`** | MS Teams channel mapping | `channel_id` (Teams UUID) | `project_id` |
| **`senders`** | MS Teams user profiles | `sender_id` (Teams UUID) | - |
| **`messages`** | Individual message data | `message_id` (Teams UUID) | `channel_id`, `sender_id` |
| **`tags`** | Categorization labels | `tag_id` | - |
| **`message_tags`** | Many-to-Many junction | - | `message_id`, `tag_id` |

### 2.2 Table Schema: `messages` (PostgreSQL JSONB Optimization)
| Column Name | Data Type | Constraints | Notes |
| :--- | :--- | :--- | :--- |
| `message_id` | `UUID` | `PRIMARY KEY` | MS Teams original ID. |
| `channel_id` | `UUID` | `FOREIGN KEY` | Reference to `channels`. |
| `sender_id` | `UUID` | `FOREIGN KEY` | Reference to `senders`. |
| `content` | `TEXT` | `NOT NULL` | The plain text message. |
| `metadata` | `JSONB` | | Stores raw MS Teams attributes (attachments, etc). |
| `sentiment_score` | `NUMERIC(3,2)` | `DEFAULT 0` | Range -1.00 to 1.00. |
| `sentiment_label` | `VARCHAR(10)` | | `POSITIVE`, `NEUTRAL`, `NEGATIVE`. |
| `is_acknowledged`| `BOOLEAN` | `DEFAULT FALSE` | Manual user action status. |
| `created_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | |
| `updated_at` | `TIMESTAMPTZ` | `DEFAULT NOW()` | |

## 3. Indexing Strategy
- **`IDX_PROJECT_MESSAGES`**: Index on `(channel_id, created_at DESC)` for fast dashboard feed retrieval.
- **`IDX_SENTIMENT_PROJECT`**: Index on `(channel_id, sentiment_label)` for project health calculations.
- **`GIN INDEX` on `metadata`**: For searching within the JSONB message payload.
- **`IDX_TAG_MAPPING`**: Index on `message_tags(message_id, tag_id)` for quick category filtering.

## 4. Data Partitioning
For scalability (NFR-101), we recommend partitioning the `messages` table by `created_at` (Range Partitioning). This ensures that querying for "Recent Feed" (last 7-30 days) remains efficient even as total message volume grows into the millions.

## 5. Retention Policy
- Raw message content will be stored for 1 year (or as per company data retention policies).
- Aggregated health metrics (Sentiment Trends) will be stored for up to 3 years for historical analysis.
- Attachments are NOT stored in the database; only the metadata and links back to SharePoint/OneDrive are maintained.
