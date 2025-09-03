# Student10 Service

**Student:** Maria Alejandra Moya 

## Description

Simple web service that responds with my name and a health check endpoint.

## How to run individually:


```bash
cd services/student01
docker build -t student01 .
docker run -p 8101:8080 student01
```

## Endpoints:

- `http://localhost:8110/` - Returns "Hello, I am Alejandra Moya :D"
- `http://localhost:8110/health` - Returns "ok"

