# Student02 Service  

**Student:** Michael Ramirez  

---

## 📌 Description  
This is a simple web service built with **Express (Node.js)**.  
It responds with my name on the root endpoint and provides a health check endpoint.  

---

## 📂 Project Structure  
services/student02/
│── app/
│ └── server.js # Main Express server
│── Dockerfile # Docker build instructions
└── README.md # Documentation

yaml
Copiar código

---

## ▶️ How to Run Individually  

1. Navigate to the service folder:
   ```bash
   cd services/student02
Build the Docker image:

bash
Copiar código
docker build -t student02 .
Run the container (mapping container port 8080 to host port 8102):

bash
Copiar código
docker run -p 8102:8080 student02
🌐 Endpoints
Root
http://localhost:8102/
👉 Returns:

text
Copiar código
Hello, I am student02, my name is Michael Ramirez. I live in Colombia 🇨🇴
Health Check
http://localhost:8102/health
👉 Returns:

ok
🛠️ Technology Stack
Node.js 20 (Alpine)
Express.js

