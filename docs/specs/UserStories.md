# User Stories and Acceptance Criteria (AC)

## US-01: Real-time Message Collection
**As a** Project Manager (PM),
**I want** all messages from specified project chat channels to be captured and stored automatically,
**so that** I don't have to manually search through MS Teams history.

### Acceptance Criteria (AC):
- **AC-01.1**: All new messages sent in a designated MS Teams channel must be ingested within 10 minutes.
- **AC-01.2**: Message text, sender name, timestamp, and thread ID must be stored correctly.
- **AC-01.3**: All attachment file names and links must be associated with the relevant message.
- **AC-01.4**: Deleted or edited messages in Teams must be reflected in the database.

---

## US-02: Message Categorization (Tagging)
**As a** Team Lead,
**I want** messages to be automatically tagged as "Action Item," "Client Feedback," "General Update," and, if in the presales phase, "Project Name," "Project Timeline," "Customer Budget," "Project Constraints," or "Customer Decision Maker,"
**so that** I can focus on critical items first and monitor key presales information.

### Acceptance Criteria (AC):
- **AC-02.1**: The system must apply tags based on a predefined list of keywords (e.g., "deadline," "bug," "feedback," "confirm," "presales," "project name," "timeline," "budget," "constraints," "decision maker").
- **AC-02.2**: When a project is identified as being in the "presales" phase, the system must prioritize the extraction and tagging of "Project Name," "Project Timeline," "Customer Budget," "Project Constraints," and "Customer Decision Maker" from relevant messages.
- **AC-02.2**: The system shall provide an accuracy of at least 80% for automated tagging (measured by human validation).
- **AC-02.3**: Users must be able to manually edit or remove automated tags on the Dashboard.

---

## US-03: Dashboard Visualization
**As a** Senior Stakeholder,
**I want** to see a high-level view of all project statuses based on recent chat interactions,
**so that** I can identify "at-risk" projects in real-time.

### Acceptance Criteria (AC):
- **AC-03.1**: The Dashboard must show a list of all active Projects and their latest "Health Status" (Red/Yellow/Green).
- **AC-03.2**: Project Health must be calculated based on the ratio of "Negative Sentiment" and "Unresolved Action Items" in the last 7 days.
- **AC-03.3**: Clicking a project must drill down into the detailed feed of categorized messages.

---

## US-04: Client Sentiment Monitoring
**As a** Relationship Manager,
**I want** to see a trend chart of client sentiment,
**so that** I can proactively address concerns before they escalate.

### Acceptance Criteria (AC):
- **AC-04.1**: The system must display a sentiment trend chart (Line/Area chart) for the selected client.
- **AC-04.2**: The chart must update every time the dashboard is refreshed.
- **AC-04.3**: A list of "Most Frequent Negative Keywords" must be displayed alongside the sentiment chart.

---

## US-05: User Invitation
**As a** Administrator (Quản trị viên)
**I want** gửi lời mời tham gia hệ thống qua email cho nhân viên mới thay vì tạo tài khoản thủ công
**So that** người dùng có thể tự thiết lập mật khẩu của riêng họ, đảm bảo tính bảo mật và giảm thiểu rủi ro lộ lọt thông tin đăng nhập.

### Acceptance Criteria
- **AC-05.1**: Given Admin đang ở màn hình danh sách người dùng, when nhấn "Invite User", then hệ thống hiển thị form nhập Email và chọn Role.
- **AC-05.2**: Given form mời, when Admin nhập email chưa tồn tại và nhấn "Send", then hệ thống gửi email chứa liên kết kích hoạt (có hiệu lực 24h) đến người dùng.
- **AC-05.3**: Given người dùng nhận email, when click vào liên kết, then chuyển hướng đến trang thiết lập mật khẩu và tên hiển thị.
- **AC-05.4**: Given email đã tồn tại trong hệ thống, when Admin cố gắng mời lại, then hệ thống hiển thị thông báo lỗi "User already exists".

### Business Rules
- **BR-IAM-01**: Liên kết kích hoạt chỉ có hiệu lực trong vòng 24 giờ.
- **BR-IAM-02**: Mật khẩu người dùng tự đặt phải tuân thủ Chính sách mật khẩu (độ dài tối thiểu, ký tự đặc biệt).

### Technical Notes
- Cần cơ chế rate-limiting để tránh spam email từ chức năng invite.

### Dependencies
- Module Cấu hình Email Server (SMTP).

---

## US-06: Role & Status Management
**As a** Security Officer (Cán bộ bảo mật)
**I want** thay đổi vai trò hoặc vô hiệu hóa tài khoản người dùng ngay lập tức
**So that** tôi có thể điều chỉnh quyền hạn khi nhân viên thuyên chuyển công tác hoặc chặn truy cập khi nhân viên nghỉ việc.

### Acceptance Criteria
- **AC-06.1**: Given danh sách người dùng, when Admin chọn "Edit" một user, then có thể thay đổi Role (ví dụ: từ "Viewer" sang "Editor").
- **AC-06.2**: Given một user đang hoạt động, when Admin chuyển trạng thái sang "Inactive/Suspended", then user đó bị đăng xuất khỏi tất cả các phiên làm việc ngay lập tức.
- **AC-06.3**: Given user đã bị vô hiệu hóa, when họ cố gắng đăng nhập, then hệ thống từ chối và hiển thị thông báo "Account suspended".

### Business Rules
- **BR-IAM-03**: Không thể vô hiệu hóa tài khoản của chính mình (để tránh tự khóa admin).
- **BR-IAM-04**: Việc thay đổi quyền hạn phải được ghi lại trong Audit Log.

---

## US-07: Buying Signal Detection (Opportunity Intelligence)
**As a** Chief Growth Officer or Account Director
**I want** the system to automatically highlight chat segments containing keywords related to new budgets, pain points, or digital transformation initiatives
**So that** I can direct the Pre-sales team to engage in the Idea Generation phase, increasing win rates compared to late RFP participation.

### Acceptance Criteria
- **AC-07.1**: The system must classify signals into "Hot" (Urgent budget/need), "Warm" (Researching), and "Cold".
- **AC-07.2**: The system must automatically tag the technology domain or business area mentioned (e.g., "EV battery" -> Tag: Automotive, IoT).
- **AC-07.3**: An alert notification must be sent to the Account Team when a "Hot" signal is detected.

### Business Rules
- **BR-OPP-01**: Keywords must be customizable per industry domain (e.g., Automotive vs. Retail).

---

## US-08: Competitor Activity Monitoring
**As a** Bid Manager or Account Manager
**I want** to receive alerts when competitor names (e.g., Accenture, CMC, Local Vendors) are mentioned in Core Account chats
**So that** I can understand their footprint, pricing strategies, or performance issues to formulate a counter-attack strategy.

### Acceptance Criteria
- **AC-08.1**: The system must verify matches against a predefined list of Competitors per market region.
- **AC-08.2**: The system must display the context of the mention (Positive/Negative sentiment associated with the competitor).

---

## US-09: Dynamic Stakeholder Mapping
**As a** FPT C-Level Leader
**I want** a dashboard visualizing personnel changes and key stakeholder movements extracted from daily conversations
**So that** I can plan executive visits or engagement activities (congratulations, gifts) to strengthen relationships.

### Acceptance Criteria
- **AC-09.1**: The system must extract entities related to job titles, promotions, or new joiners (e.g., "new CTO", "took over purchasing").
- **AC-09.2**: The system must update the "Power Map" visualization when a hierarchy change is detected.

---

## US-10: Strategic Tech Insights (Voice of Customer)
**As a** CTO or Solution Architect
**I want** to identify trending technology keywords and common pain points across multiple Core Accounts (e.g., Honda, Toyota, Recruit)
**So that** I can guide R&D investment into Accelerators or Frameworks that meet shared market needs.

### Acceptance Criteria
- **AC-10.1**: The system must aggregate top mentioned tech keywords (e.g., "GenAI", "Low-code") monthly.
- **AC-10.2**: The system must correlate keywords with specific industries to generate an "Industry Demand Report".
