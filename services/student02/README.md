# Student02 Service  

**Student:** Michael Ramirez  

---

## 📌 Description  
This is a simple web service built with **Express (Node.js)**.  
It responds with my name on the root endpoint and provides a health check endpoint.  

---

## 📂 Project Structure  
services/student02/<br/>
│── app/<br/>
│ └── main.js # Main Express server<br/>
│── Dockerfile # Docker build instructions<br/>
└── README.md # Documentation

---

## ▶️ How to Run Individually  

1. Navigate to the service folder:
   ```bash
   cd services/student02
   ```
Build the Docker image:
   ```bash
   docker build -t student02 .
   ```
Run the container (mapping container port 8080 to host port 8102):
 ```bash
 docker run -p 8102:8080 student02
   ```
## 🌐 Endpoints
Root
http://localhost:8102/<br/>
👉 Returns:<br/>
Hello, I am student02, my name is Michael Ramirez. I live in Colombia 🇨🇴<br/>
Health Check<br/>
http://localhost:8102/health<br/>
👉 Returns:
 ```bash
ok
   ```
## 🛠️ Technology Stack
Node.js 20 (Alpine)<br/>
Express.js

