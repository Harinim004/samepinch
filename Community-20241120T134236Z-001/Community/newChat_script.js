function openChatPage() {
    window.location.href = "comm";
    }



/*=======================================================================================================================================================================================================================================================================================================================================*/ 




const messageContainer = document.getElementById('chatViewArea');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') sendMessage();
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        // Display user's message
        const userMessageDiv = createUserMessageElement(messageText, 'user-message', true);
        messageContainer.appendChild(userMessageDiv);

        // Simulate a reply
        setTimeout(() => {
            const replyText = 'Reply: ' + messageText.split('').reverse().join(''); // Demo: reversing the message
    
            const replyMessageDiv = createReplyMessageElement(replyText, 'reply-message');
            messageContainer.appendChild(replyMessageDiv);
            scrollToBottom();
        }, 500);

        // Clear input
        messageInput.value = '';
        scrollToBottom();
    }
}

function createUserMessageElement(text, className, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'messageU user-message';
    messageDiv.textContent = text;

    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = new Date().toLocaleTimeString();
    messageDiv.appendChild(timestamp);

    return messageDiv;
}

function createReplyMessageElement(text, className, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'messageR user-message';
    messageDiv.textContent = text;

    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = new Date().toLocaleTimeString();
    messageDiv.appendChild(timestamp);

    return messageDiv;
}


function scrollToBottom() {
    messageContainer.scrollTop = messageContainer.scrollHeight;
}



