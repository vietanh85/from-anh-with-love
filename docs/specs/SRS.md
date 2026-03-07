# Software Requirements Specification (SRS) - MS Teams Insights Aggregator

## 1. Introduction
This document defines the functional and non-functional requirements for the MS Teams Insights Aggregator system.

## 2. Functional Requirements (FR)

### 2.1 Data Integration & Ingestion
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **FR-101** | The system **shall** connect to the Microsoft Graph API to access specific Teams channels and group chats. | **Must Have** |
| **FR-102** | The system **must** ingest all message text, sender IDs, timestamps, and thread identifiers from authorized chats. | **Must Have** |
| **FR-103** | The system **shall** support real-time data ingestion using Microsoft Graph Webhooks or delta queries. | **Should Have** |
| **FR-104** | The system **must** handle and store attachments metadata (file names, links) associated with messages. | **Should Have** |

### 2.2 Data Processing & Analysis
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **FR-201** | The system **shall** perform keyword-based tagging to categorize messages (e.g., "Request", "Deadline", "Issue"). | **Must Have** |
| **FR-202** | The system **must** associate ingested messages with specific Clients and Projects based on channel IDs or predefined mapping rules. | **Must Have** |
| **FR-203** | The system **shall** perform sentiment analysis (Positive, Neutral, Negative) on client-related messages. | **Should Have** |
| **FR-204** | The system **must** provide a "Summarization" feature to aggregate long chat threads into bullet-point highlights. | **Could Have** |

### 2.3 Dashboard & Reporting
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **FR-301** | The Dashboard **shall** provide a real-time list of "High Priority" items extracted from chats. | **Must Have** |
| **FR-302** | The Dashboard **must** display a "Sentiment Trend" chart for each Client over a 30-day period. | **Should Have** |
| **FR-303** | Users **shall** be able to filter data by Client, Project, Date Range, and Tag. | **Must Have** |
| **FR-304** | The system **must** provide an "Export to PDF/Excel" function for weekly project status reports. | **Could Have** |

### 2.4 User & Access Management
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **FR-IAM-01** | The system **must** allow Admins to manage the user lifecycle (Invite, Edit, Deactivate). | **Must Have** |
| **FR-IAM-01.1** | The system **must** allow viewing a paginated list of users. | **Must Have** |
| **FR-IAM-01.2** | The system **must** support searching users by Name, Email and filtering by Role, Status. | **Must Have** |
| **FR-IAM-01.3** | The system **must** allow resending invitation emails. | **Should Have** |
| **FR-IAM-01.4** | The system **must** prevent hard deletion of users with associated data; use soft delete/deactivation instead. | **Must Have** |

### 2.5 Strategic Intelligence & Insights
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **FR-SI-01** | The system **must** analyze chat content to detect "Buying Signals" (Budget, Pain Points) based on industry-specific keywords. | **Must Have** |
| **FR-SI-02** | The system **shall** classify Buying Signals by urgency (Hot, Warm, Cold) and domain (e.g., Automotive, Retail). | **Must Have** |
| **FR-SI-03** | The system **must** detect and alert on mentions of predefined Competitors within Core Account chats. | **Should Have** |
| **FR-SI-04** | The system **shall** identify personnel changes (promotions, new joiners) to update the Stakeholder "Power Map". | **Could Have** |
| **FR-SI-05** | The system **must** generate a monthly "Voice of Customer" report aggregating top technology keywords and trends. | **Could Have** |

---

## 3. Non-Functional Requirements (NFR)

### 3.1 Performance & Scalability
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **NFR-101** | The system **shall** process and display chat messages within 10 minutes of the original message timestamp. | **Must Have** |
| **NFR-102** | The Dashboard page **must** load in less than 3 seconds for a dataset of up to 10,000 messages. | **Should Have** |

### 3.2 Security & Compliance
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **NFR-201** | All data stored in the database **must** be encrypted at rest (AES-256). | **Must Have** |
| **NFR-202** | Access to the dashboard **must** be restricted via Single Sign-On (SSO) using the organization’s Azure AD. | **Must Have** |
| **NFR-203** | The system **shall** maintain an audit log of all user activities for at least 365 days. | **Must Have** |

### 3.3 Reliability & Availability
| ID | Requirement Description | Priority (MoSCoW) |
| :--- | :--- | :--- |
| **NFR-301** | The system **shall** maintain 99.5% uptime during business hours (8:00 AM - 6:00 PM GMT+7). | **Must Have** |
