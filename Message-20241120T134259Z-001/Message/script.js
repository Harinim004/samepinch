function selectPerson(name) {
    selectedPerson = name;
    updateMessages();

    const selectedUserElement = document.getElementById('selected-user');
    const userProfileElement = document.getElementById('user-profile');
    const userImageElement = document.getElementById('user-image');
    const userNameElement = document.getElementById('user-name');

    selectedUserElement.style.display = 'flex';
    userNameElement.textContent = selectedPerson;
    userImageElement.src = `${selectedPerson.toLowerCase()}.jpg`; 
}
let selectedPerson = null;

function updateMessages() {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    
    if (!selectedPerson) {
        messagesContainer.innerHTML = `
            <div class="no-selection">
                <img src="placeholder.jpg" alt="No selection" />
                <p>Chat with your connections!</p>
            </div>
        `;
        messageInput.style.display = 'none'; 
    } else {
        messagesContainer.innerHTML = '';
        messageInput.style.display = 'flex'; 
    }
}

function sendMessage(event) {
    if (event.type === 'keydown' && event.key !== 'Enter') return;

    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();
    
    if (messageText && selectedPerson) {
        const messagesContainer = document.getElementById('messages');
       
        messagesContainer.innerHTML += `<div class="message received">Hello! This is ${selectedPerson}.</div>`;
        messagesContainer.innerHTML += `<div class="message sent">${messageText}</div>`;
        
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}