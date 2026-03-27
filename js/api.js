const API_BASE = "https://manju-ai-assistant-server.onrender.com/";

async function askAPI(question){

    const res = await fetch(
        "https://manju-ai-assistant-server.onrender.com/ask?question=" + encodeURIComponent(q)
    );

    return await res.json();
}