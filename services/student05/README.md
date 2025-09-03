# Student05 Service

**Student:** Kevin Prado

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:

```bash
cd services/student05
docker build -t student05 .
docker run -p 8105:8080 student05
```

## Endpoints:

- `http://localhost:8105/` - Returns "Hello, I am Kevin Prado <3"
- `http://localhost:8105/health` - Returns "ok"

