# StreamPulse

A production-style live streaming dashboard that tracks realtime viewers using WebSockets and Redis, and persists analytics snapshots in PostgreSQL.

## Why This Project

I wanted to design a system similar to real media/streaming platforms that require:

- Realtime viewer tracking
- Horizontal scalability
- Shared state across multiple servers
- Cloud-ready infrastructure

## Features

- Realtime viewer counts via WebSockets
- Redis-backed shared state (no in-memory coupling)
- Periodic analytics snapshots to PostgreSQL
- Dockerized backend
- CI pipeline that builds and publishes images to AWS ECR

## Architecture Overview

- Frontend: Next.js (SSR/SEO-ready)
- Backend: Node.js + Express
- Realtime: WebSockets
- Cache: Redis
- Database: PostgreSQL
- Containerization: Docker
- CI/CD: GitHub Actions → AWS ECR

## Data Flow

1. Client connects via WebSocket
2. Viewer count updated atomically in Redis
3. Backend broadcasts updated counts
4. Periodic snapshots persisted to PostgreSQL
5. Analytics can be queried historically

## Scaling Strategy

- Stateless backend containers
- Shared state stored in Redis
- Compatible with AWS ALB + ECS/EC2
- No code changes required to scale horizontally

## CI/CD

- GitHub Actions builds Docker images on every push
- Images are pushed to AWS ECR
- Secrets handled via scoped IAM credentials

## Future Improvements

- Add automated tests to CI
- Deploy backend to ECS
- Add historical analytics visualizations
- Add authentication for private streams
