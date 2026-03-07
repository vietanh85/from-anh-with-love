# Data Dictionary & Requirements Traceability Matrix (RTM)

## 1. Data Dictionary

### 1.1 Core Entities
| Entity Name | Description | Fields | Data Type | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Project** | A specific project/client engagement. | ProjectID (PK), ProjectName, ClientName, TeamsChannelID, StartDate, EndDate. | UUID, String, String, String, Date, Date. | |
| **Message** | An individual chat entry from MS Teams. | MessageID (PK), ProjectID (FK), SenderID (FK), ContentText, Timestamp, ThreadID, SentimentScore, SentimentCategory. | UUID, UUID, UUID, String, DateTime, String, Float (-1 to 1), Enum (Pos, Neu, Neg). | |
| **Sender** | A user participating in MS Teams chats. | SenderID (PK), DisplayName, Email, Role (Client/Team). | UUID, String, String, Enum. | |
| **Tag** | A label for categorization (automated or manual). | TagID (PK), TagName, Description, ColorCode. | UUID, String, String, String (HEX). | |
| **Mapping** | Linkage between Message and Tag. | MessageID (FK), TagID (FK), IsAutomated, ConfidenceScore. | UUID, UUID, Boolean, Float (0 to 1). | |
| **User** | A system user (Admin/PM/Viewer). | UserID (PK), Email, FullName, Status, RoleID, LastLogin, InvitedBy. | UUID, String, String, Enum (Pending/Active/Suspended), UUID, DateTime, UUID. | |

### 1.2 Strategic Intelligence Entities
| Entity Name | Description | Fields | Data Type | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **BuyingSignal** | Detected opportunity/need. | SignalID (PK), MessageID (FK), Urgency (Hot/Warm/Cold), Domain (Auto/Retail/...), Description. | UUID, UUID, Enum, Enum, String. | US-07 |
| **CompetitorMention** | Tracking of competitor activity. | MentionID (PK), CompetitorName, MessageID (FK), ContextSentiment, StrategyTag. | UUID, String, UUID, Enum (Pos/Neg), String. | US-08 |
| **StakeholderChange** | Personnel updates extracted from chat. | ChangeID (PK), ClientName, PersonName, OldRole, NewRole, DetectedAt. | UUID, String, String, String, String, DateTime. | US-09 |
| **TechTrend** | Aggregated technology keywords. | TrendID (PK), Keyword, Frequency, Month, IndustryDomain. | UUID, String, Int, Date, String. | US-10 |

---

## 2. Requirements Traceability Matrix (RTM)

| Req ID | Req Description | Priority | Related User Story | Status |
| :--- | :--- | :--- | :--- | :--- |
| **FR-101** | Connect to MS Graph API. | Must | US-01 | Defined |
| **FR-102** | Ingest message content/metadata. | Must | US-01 | Defined |
| **FR-201** | Categorize messages (Tagging). | Must | US-02 | Defined |
| **FR-202** | Associate messages with Project/Client. | Must | US-02 | Defined |
| **FR-203** | Sentiment analysis. | Should | US-04 | Defined |
| **FR-301** | High-priority items list. | Must | US-03 | Defined |
| **FR-302** | Sentiment trend chart. | Should | US-04 | Defined |
| **FR-303** | Filtering capabilities. | Must | US-03, US-04 | Defined |
| **FR-304** | Export to PDF/Excel. | Could | - | Defined |
| **FR-IAM-01** | User Lifecycle Management. | Must | US-05, US-06 | Defined |
| **FR-SI-01** | Buying Signal Detection. | Must | US-07 | Defined |
| **FR-SI-02** | Signal Classification (Hot/Warm). | Must | US-07 | Defined |
| **FR-SI-03** | Competitor Alerting. | Should | US-08 | Defined |
| **FR-SI-04** | Stakeholder Mapping. | Could | US-09 | Defined |
| **FR-SI-05** | Tech Trend Reporting. | Could | US-10 | Defined |
| **NFR-101** | Process data < 10 mins. | Must | US-01 | Defined |
| **NFR-202** | SSO access. | Must | - | Defined |
