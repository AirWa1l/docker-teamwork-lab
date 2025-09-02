const express = require("express");
const app = express();
app.get("/", (_, res) => {
  res.send(`
    <h1>Hello, I am student02 my name is Michael Ramirez. I live in Colombia</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" 
         alt="Bandera de Colombia" width="200"/>
  `);
});
app.get("/health", (_, res) => res.send("ok"));
app.listen(8080, () => console.log("listening on 8080"));
