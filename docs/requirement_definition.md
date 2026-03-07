# Requirement Definition: MS Teams Project & Client Insights Dashboard

## 1. Project Overview
### 1.1 Problem Statement (Pain Point)
Thông tin về khách hàng và dự án hiện tại chủ yếu được trao đổi qua các group chat trên Microsoft Teams. Tuy nhiên, thông tin bị phân mảnh, dẫn đến việc khó nắm bắt tình hình thực tế của dự án và nhu cầu của khách hàng theo thời gian thực.
(Project and client information is currently scattered across Microsoft Teams group chats, making it difficult to capture the real-time status of projects and client needs.)

### 1.2 Project Goal
To develop a system that links with Microsoft Teams chat groups to aggregate, summarize, and display project/client information on a centralized dashboard.

---

## 2. Stakeholders & RACI Matrix

| Role | Responsibility | RACI |
| :--- | :--- | :--- |
| Project Manager (PM) | Define business rules, oversee progress. | Accountable |
| Team Lead | Verify data accuracy, use dashboard for daily ops. | Responsible |
| Developers | Build the integration and UI. | Responsible |
| Clients | Provide information (indirectly via chat). | Informed |
| IT/Admin | Manage Microsoft 365 permissions. | Consulted |

---

## 3. Functional Requirements

### 3.1 Data Acquisition (MS Teams Integration)
- **R1.1**: Connect to MS Graph API to monitor specific project/client channels.
- **R1.2**: Capture message content, sender, timestamp, and attachments metadata.
- **R1.3**: Support for multi-channel aggregation (multiple clients per project).

### 3.2 Data Processing & Analysis
- **R2.1**: **Keyword Extraction**: Identify project milestones, deadlines, or client requests based on keywords (e.g., "deadline", "urgent", "feedback").
- **R2.2**: **Sentiment Analysis**: Detect client sentiment (positive/negative/neutral) from chat interactions.
- **R2.3**: **Categorization**: Automatically tag messages as "Issue", "Update", "Action Item", or "General Discussion".

### 3.3 Dashboard & Visualization
- **R3.1**: **Summary View**: A high-level overview of project health across all active clients.
- **R3.2**: **Real-time Feed**: A consolidated timeline of critical client messages.
- **R3.3**: **Risk Alerting**: Visual indicators (Red/Yellow/Green) for projects with unresolved issues or negative sentiment.
- **R3.4**: **Search & Filter**: Ability to filter information by Client name, Project code, or Date range.

---

## 4. Non-Functional Requirements
- **Security**: Must comply with company data privacy policies; use OAuth 2.0 for MS Teams access.
- **Reliability**: Dashboard updates should have no more than 5 minutes of latency from the original chat event.
- **Scalability**: System must handle 50+ concurrent project channels.
- **User Interface**: Clean, professional, and optimized for both desktop and mobile viewing.

---

## 5. User Stories

1. **As a Project Manager**, I want to see a daily summary of all client "Action Items" extracted from Teams chats, so I can ensure my team is on track.
2. **As a Team Lead**, I want to receive a notification on the dashboard when a client expresses dissatisfaction (negative sentiment), so I can intervene early.
3. **As a Stakeholder**, I want to see a visual chart showing the volume of client requests over time, so I can allocate resources more effectively.

---

## 6. Success Metrics (KPIs)
- **Time Reduction**: 40% reduction in time spent manually searching for information in chat history.
- **Accuracy**: >85% accuracy in automated tagging of "Action Items".
- **Usage**: 100% of PMs and Team Leads using the dashboard for weekly status meetings.
