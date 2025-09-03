# Student10 Service

**Student:** Juan David Pinto 

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:


```bash
cd services/student10
docker build -t student10 .
docker run -p 8110:8080 student10
```

## Endpoints:

- `http://localhost:8110/` - Returns "Hello, I am Juan David Pinto :3"
- `http://localhost:8110/health` - Returns "ok"

## Technology:

- BusyBox with static HTML