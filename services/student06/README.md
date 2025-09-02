# Student06 Service

**Student:** Camilo Andres

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:

```bash
cd services/student06
docker build -t student06 .
docker run -p 8106:8080 student06
```

## Endpoints:

- `http://localhost:8106/` - Returns "Hello, I am Camilo Andres"
- `http://localhost:8106/health` - Returns "ok"

## Technology:

- BusyBox with static HTML
