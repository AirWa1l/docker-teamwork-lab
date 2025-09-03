# Student06 Service

**Student:** Juan Esteban Rodriguez

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:

```bash
cd services/student07
docker build -t student07 .
docker run -p 8107:8080 student07
```

## Endpoints:

- `http://localhost:8107/` - Returns "Hello, I am Student07 Juan Esteban Rodriguez"
- `http://localhost:8107/health` - Returns "ok"

## Technology:

- BusyBox with static HTML