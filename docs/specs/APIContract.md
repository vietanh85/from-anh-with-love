# API Contract: Dashboard API Specification

## 1. Overview
This document outlines the primary API endpoints exposed by the Dashboard Service for consumption by the Frontend Application.

## 2. Authentication
- All requests must include an `Authorization: Bearer <JWT_TOKEN>` header.
- Tokens must be obtained via Azure AD SSO.

## 3. Endpoints

### 3.1 Get Project Summary
Returns high-level health metrics for all projects.
- **URL**: `GET /api/v1/projects`
- **Query Params**: `limit`, `offset`, `search`
- **Response**:
```json
{
  "projects": [
    {
      "projectId": "uuid",
      "projectName": "String",
      "clientName": "String",
      "healthStatus": "RED|YELLOW|GREEN",
      "sentimentScore": 0.75,
      "unresolvedActionItems": 5,
      "lastUpdate": "ISO-8601"
    }
  ],
  "total": 50
}
```

### 3.2 Get Project Detailed Feed
Returns categorized messages for a specific project.
- **URL**: `GET /api/v1/projects/{projectId}/messages`
- **Query Params**: `tag`, `sentiment`, `startDate`, `endDate`
- **Response**:
```json
{
  "messages": [
    {
      "messageId": "uuid",
      "content": "String",
      "sender": "String",
      "timestamp": "ISO-8601",
      "tags": ["DEADLINE", "BUG"],
      "sentiment": "NEGATIVE",
      "sentimentScore": -0.8,
      "isAcknowledged": false
    }
  ]
}
```

### 3.3 Acknowledge Message
Updates the status of a specific action item/message.
- **URL**: `PATCH /api/v1/messages/{messageId}/acknowledge`
- **Body**:
```json
{
  "isAcknowledged": true,
  "acknowledgedBy": "uuid"
}
```

### 3.4 Get Sentiment Trends
Returns historical sentiment data for chart visualization.
- **URL**: `GET /api/v1/projects/{projectId}/trends`
- **Query Params**: `interval (daily|weekly)`, `range (30d|90d)`
- **Response**:
```json
{
  "dataPoints": [
    { "date": "2024-03-01", "avgSentiment": 0.5 },
    { "date": "2024-03-02", "avgSentiment": 0.45 }
  ]
}
```

## 4. Error Codes
- `401 Unauthorized`: Token missing or expired.
- `403 Forbidden`: User does not have access to this project.
- `404 Not Found`: Project or Message ID does not exist.
- `429 Too Many Requests`: Rate limit exceeded.
- `500 Internal Server Error`: Server-side processing failure.
