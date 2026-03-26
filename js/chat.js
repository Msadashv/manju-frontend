const API_BASE = "https://manju-ai-assistant-server.onrender.com/";

async function ask(){

let q = document.getElementById("question").value

let chat = document.getElementById("chat")

chat.innerHTML += `<div class="message user"><b>You:</b> ${q}</div>`

let response = await fetch(
"https://manju-ai-assistant-server.onrender.com/ask?question=" + encodeURIComponent(q)
)
let data = await response.json()

chat.innerHTML += `<div class="message ai"><b>AI:</b> ${data.answer}</div>`

}