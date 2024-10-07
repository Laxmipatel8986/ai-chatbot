document.addEventListener('DOMContentLoaded', () =>{
    const messageBox = document.getElementById('first-message');
    const userinput = document.getElementById('user-input');
    const sendmessage = document.getElementById('send-message');
    const mic = document.getElementById('mic');



    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        messageBox.appendChild(messageElement);
        messageBox.scrollTop = messageBox.scrollHeight; // Scroll to the bottom
    }
    

    sendmessage.addEventListener('click', () => {
        const message = userinput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userinput.value = '';

            // Simulate a bot response
            setTimeout(() => {
                addMessage("I'm a chatbot! You said: " + message, 'bot');
            }, 1000);
        }
    });


    // Allow sending message by pressing Enter key
    userinput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendmessage.click();
        }
    });

})

