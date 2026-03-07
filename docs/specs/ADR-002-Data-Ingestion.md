# ADR-002: Data Ingestion Mechanism (Webhooks vs. Polling)

## Status
Accepted

## Context
We need to capture MS Teams chat messages in near real-time from a large number of channels (50+).

## Decision
The system **must** use **Microsoft Graph Webhooks (Change Notifications)** for real-time data ingestion, supplemented by **Delta Queries** for reconciliation.

## Reasoning
1. **Real-time Latency**: Webhooks provide push notifications, significantly reducing the delay between message creation and dashboard update (NFR-101 requirement: <10 mins).
2. **Efficiency**: Avoids unnecessary API calls to MS Graph, reducing the risk of hitting rate limits (a identified risk in the Project Plan).
3. **Reconciliation**: Delta Queries will be scheduled periodically (every 4-6 hours) to ensure no messages were missed due to webhook delivery failures (e.g., system downtime).

## Implementation Detail
- Use a dedicated `WebhookHandler` endpoint to receive `POST` requests from Microsoft Graph.
- Subscriptions to change notifications must be renewed periodically (before expiry).
- Use `ValidationToken` correctly during subscription handshake.

## Consequences
- Requires a public-facing URL (or an API Gateway) for the webhook endpoint.
- System must handle high bursts of traffic if many messages arrive simultaneously across multiple channels.
