const chatBox = document.getElementById('chatBox')
const chatContent = document.getElementById('chatContent')
const messagesDiv = document.getElementById('messages')
const messageInput = document.getElementById('messageInput')

function toggleChat() {
  if (
    chatContent.style.display === 'none' ||
    chatContent.style.display === ''
  ) {
    chatContent.style.display = 'flex'
  } else {
    chatContent.style.display = 'none'
  }
}

function sendMessage() {
  const messageText = messageInput.value.trim()
  if (messageText !== '') {
    const messageDiv = document.createElement('div')
    messageDiv.textContent = messageText
    messageDiv.classList.add('message')
    messagesDiv.appendChild(messageDiv)
    messageInput.value = ''
    messagesDiv.scrollTop = messagesDiv.scrollHeight
  }
}
