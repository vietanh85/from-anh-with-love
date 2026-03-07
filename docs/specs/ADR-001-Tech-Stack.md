# ADR-001: Technology Stack Selection

## Status
Accepted

## Context
The system needs to integrate with Microsoft Teams, process natural language (sentiment, keywords), and serve a real-time dashboard. We need a stack that is scalable, has strong support for MS Graph API, and allows for rapid development of data pipelines.
Recently, requirements for **User Management (Invitation/Role Management)** and **Hybrid Authentication** (SSO + Local) were added, requiring updates to the backend capabilities.

## Decision
1. **Backend**: Node.js (TypeScript) with NestJS.
   - *Reasoning*: Excellent asynchronous handling for webhooks, strong typing for complex MS Graph objects, and vast ecosystem for API development.
2. **Database**: PostgreSQL with Prisma ORM.
   - *Reasoning*: Relational data (Projects, Clients, Messages) fits well. JSONB support allows flexibility for varying MS Teams message schemas.
3. **Task Queue & Caching**: BullMQ (Redis) & Redis Cache.
   - *Reasoning*: 
     - **Queue**: Necessary for processing messages (NLP tasks) asynchronously to ensure the webhook response is fast.
     - **Cache**: Required for Session/Token Blacklisting (US-06 Immediate Suspension) and caching expensive dashboard queries.
4. **NLP Engine**: Azure Cognitive Services (Text Analytics).
   - *Reasoning*: Native integration with Azure/MS ecosystem, high accuracy for multi-language sentiment analysis, and managed service (no need to host models).
5. **Frontend**: Next.js (React) with Tailwind CSS and Recharts.
   - *Reasoning*: SSR for performance, Recharts for dashboard visualization, and standard internal tool development speed.
6. **Authentication & IAM**: Passport.js (Strategies: `jwt`, `local`, `azure-ad`).
   - *Reasoning*: Standard middleware for NestJS. Enables the required "Hybrid" authentication model (Azure AD SSO for corporate users + Local Password for invited users) and stateless JWT validation.
7. **Email Service**: Nodemailer.
   - *Reasoning*: Standard Node.js library to handle "User Invitation" emails (US-05) via SMTP, keeping the implementation provider-agnostic.

## Consequences
- **Redis Dependency**: Critical for both background jobs and security (token revocation). High availability for Redis is now a requirement.
- **Azure Dependency**: Tight coupling with Azure Cognitive Services (cost/latency) and Azure AD.
- **Complexity**: Managing dual authentication strategies (Local + SSO) requires careful security testing to ensure no loopholes.
- **Skillset**: Team needs proficiency in TypeScript across the stack.
