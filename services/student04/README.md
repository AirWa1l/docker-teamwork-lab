# Student04 Service

**Student:** Jhoan Sebastian Rivera 

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:

```bash
cd services/student04
docker build -t student04 .
docker run -p 8104:8080 student04
```

## Endpoints:

- `http://localhost:8104/` - Returns "Hello, I am Jhoan Sebastian Rivera"
- `http://localhost:8104/health` - Returns "ok"

## Technology:

- BusyBox with static HTML