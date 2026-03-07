# Process Flows (BPMN Representation) - MS Teams Insights Aggregator

## 1. Process: Data Ingestion and Analysis Flow

### 1.1 Trigger
A new message is sent in an authorized Microsoft Teams channel.

### 1.2 Flow Description
1. **[Start]**: Message event detected via MS Graph Webhook or Delta Query.
2. **Retrieve Message Data**: Fetch content, sender ID, timestamp, and thread context.
3. **Pre-processing**:
    - Remove HTML tags.
    - Identify project context (Map `ChannelID` -> `ProjectID`).
4. **Sentiment Analysis (Parallel Path 1)**:
    - Send text to Sentiment Analysis engine.
    - Assign score (Float) and category (Positive, Neutral, Negative).
5. **Keyword/Categorization (Parallel Path 2)**:
    - Check text against keyword database.
    - Assign initial tags (e.g., "Deadline," "Bug").
6. **Data Aggregation**:
    - Calculate aggregate sentiment for the Project/Client.
    - Check if the message is part of an existing "High Priority" thread.
7. **Database Storage**: Save all processed metadata to the central repository.
8. **Dashboard Update**: Notify frontend of new data available.
9. **[End]**: Message is visible on the dashboard for PM/Stakeholder review.

---

## 2. Process: User Interaction (Alert Handling) Flow

### 2.1 Trigger
A user (PM or Team Lead) accesses the Dashboard.

### 2.2 Flow Description
1. **[Start]**: User logs in via Azure AD SSO.
2. **Display Active Projects**: System retrieves project health metrics (Ratio of Negative sentiment/Open items).
3. **Select High-Priority Project**: User clicks on a project marked "Red" or "Yellow."
4. **Review Detailed Messages**: System displays the categorized message feed for the selected project.
5. **Acknowledge/Action Item**:
    - User clicks "Acknowledge" on a specific message.
    - System updates the status in the database.
6. **Assign Task (Optional)**:
    - User tags a team member on a message.
    - System can optionally push a notification back to Teams or another tool.
7. **[End]**: Item status updated; dashboard metrics recalculated.

---

## 3. Process: User Onboarding Flow

### 3.1 Actors
- **Admin**: System Administrator.
- **System**: Dashboard.
- **New User**: The invitee.

### 3.2 Flow Description
1. **[Start]**: **Admin** accesses User Management screen -> Selects "Invite User".
2. **Input**: **Admin** enters Email and selects Role -> Clicks "Send".
3. **Validation**: **System** checks if Email exists.
    - **Decision**: Email exists?
        - **Yes**: Display error, end flow.
        - **No**: Create User record with status "Pending".
4. **Send Email**: **System** sends email with activation token -> **Output**: Email in User's inbox.
5. **Activation**: **New User** clicks link in Email.
6. **Token Check**: **System** validates token.
    - **Decision**: Token valid (within 24h)?
        - **No**: Show "Link Expired", require contact Admin.
        - **Yes**: Show account setup screen.
7. **Setup**: **New User** enters Display Name & New Password -> Submits.
8. **Completion**: **System** updates User status to "Active" -> Redirects to Dashboard.
9. **[End]**: User is logged in and active.

### 3.3 Business Rules
- **BR-005**: Activation token is one-time use only.
- **BR-006**: Default role is "Viewer" if not specified.

