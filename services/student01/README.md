# Student08 Service

**Student:** Juan José Mafla 

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:

```bash
cd services/student08
docker build -t student08 .
docker run -p 8108:8080 student08
```

## Endpoints:

- `http://localhost:8108/` - Returns "Hello, I am Juan jose Mafla"
- `http://localhost:8108/health` - Returns "ok"

## Technology:

- BusyBox with static HTML
