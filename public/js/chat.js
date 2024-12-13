document.getElementById("chat-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("message").value;

    try {
        console.log("this is the client side");
        const response = await fetch("/posts/chatWithAI", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        document.getElementById("response").innerText = data.reply;
    } catch (err) {
        console.error("Error:", err);
    }
});