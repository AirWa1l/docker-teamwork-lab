# Student06 Service

**Student:** Jose Adrian Marin Ordoñez - 2126988

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:

```bash
cd services/student09
docker build -t student09 .
docker run -p 8109:8080 student09
```

## Endpoints:

- `http://localhost:8109/` - Returns "Hello, I am Jose Adrian Marin 🐧"
- `http://localhost:8106/health` - Returns "ok"
