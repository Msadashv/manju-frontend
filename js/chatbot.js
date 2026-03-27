function toggleChat(){

    let chat = document.getElementById("chatbot-container");

    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

async function sendMessage(){

    let input = document.getElementById("chat-input");
    let message = input.value;

    if(!message) return;

    let chatBody = document.getElementById("chat-body");

    chatBody.innerHTML += `<div><b>You:</b> ${message}</div>`;

    input.value = "";

    let data = await askAPI(message);

    chatBody.innerHTML += `<div><b>AI:</b> ${data.answer}</div>`;

    chatBody.scrollTop = chatBody.scrollHeight;
}