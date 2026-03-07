# Business Requirements Document (BRD) - MS Teams Insights Aggregator

## 1. Executive Summary
### 1.1 Business Case
Hiện tại, thông tin quan trọng về dự án và khách hàng đang bị phân mảnh trong các nhóm chat Microsoft Teams. Sự thiếu hụt một hệ thống tập trung dẫn đến việc chậm trễ trong phản hồi, rủi ro bỏ lỡ yêu cầu quan trọng và khó khăn cho ban quản lý trong việc nắm bắt tình hình dự án thời gian thực.

### 1.2 Project Goal
Thiết lập một hệ thống tự động hóa việc thu thập, phân loại và hiển thị thông tin từ Microsoft Teams lên một Dashboard tập trung, hỗ trợ ra quyết định nhanh chóng và nâng cao hiệu quả quản trị dự án/khách hàng.

## 2. Business Objectives (BO)
| ID | Objective | Measurable Metric |
| :--- | :--- | :--- |
| **BO-001** | Centralize project/client information from MS Teams channels. | 100% of designated channels integrated. |
| **BO-002** | Reduce time spent on manual status tracking. | Target 30% reduction in PM overhead. |
| **BO-003** | Improve response time to client issues/requests. | Monitoring and alerting within <15 mins. |
| **BO-004** | Increase Winrate for new opportunities within Core Accounts. | Target 15% increase in pre-sales leads generated from chat signals. |
| **BO-005** | Enhance Executive Engagement with key client stakeholders. | Maintain accurate "Power Map" for 100% of Core Accounts. |
| **BO-006** | Proactive Competitor Intelligence gathering. | Identify 90% of competitor mentions to inform counter-strategies. |

## 3. High-Level Scope
- Integration with Microsoft Teams via MS Graph API.
- Automated tagging and sentiment analysis of chat messages.
- **Opportunity Intelligence Module**: Buying signal detection and competitor monitoring.
- **Strategic Insights Module**: Dynamic stakeholder mapping and technology trend analysis.
- Real-time Dashboard with KPI visualization.
- Notification/Alert system for high-priority client items.

## 4. Strategic Alignment
This system is directly aligned with the FPT Core Account Strategy (Honda, Recruit, Toyota...), aiming to:
1.  Transform unstructured chat data into actionable strategic insights.
2.  Enable C-level and Account Managers to make data-driven decisions.
3.  Shift from reactive support to proactive partnership.

## 5. Constraints and Risks
- **Constraint**: Must comply with existing Microsoft 365 security policies.
- **Risk**: High volume of "noise" (non-essential chat) affecting data quality.
- **Risk**: Access permissions and privacy concerns regarding personal data in chats.

## 5. Regulatory Compliance References
- **GDPR (General Data Protection Regulation)**: Handling personal data (names, emails) within chat history.
- **ISO/IEC 27001**: Information security management systems for data storage and processing.
- **SOC 2 Type II**: Security and confidentiality of client data.
