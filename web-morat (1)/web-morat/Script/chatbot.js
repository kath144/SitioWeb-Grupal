const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const closeChat = document.getElementById('closeChat');

// Mostrar/ocultar chat
chatToggle.onclick = () => {
  chatContainer.style.display = 'flex';
  chatToggle.style.display = 'none';
  userInput.focus();
  chatbox.innerHTML = ''; 
  iniciarChat();
};

closeChat.onclick = () => {
  chatContainer.style.display = 'none';
  chatToggle.style.display = 'block';
};

function appendMessage(sender, text) {
  const message = document.createElement('div');
  message.className = sender;
  message.innerText = (sender === 'user' ? "👤 Tú: " : "🧔🏻 MoratBot: ") + text;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function mostrarMenu() {
  return `Elige una opción sobre Morat:
1. ¿Quiénes son Morat?
2. Álbumes más famosos
3. Canciones populares
4. Historia de la banda
5. Próximos conciertos
6. Salir`;
}

function getBotResponse(input) {
  switch (input.trim()) {
    case "1":
      return "Morat es una banda colombiana de pop folk formada en Bogotá en 2015, conocida por sus letras románticas y sonidos acústicos.";
    case "2":
      return "Sus álbumes más famosos incluyen: 'Sobre el amor y sus efectos secundarios', 'Balas Perdidas' y '¿A dónde vamos?'.";
    case "3":
      return "Canciones populares: 'Cómo te atreves', 'Besos en guerra', 'Presiento', 'Cuando nadie ve'.";
    case "4":
      return "La banda empezó tocando en calles y pequeños escenarios, y alcanzó fama internacional gracias a sus letras emotivas y colaboraciones con otros artistas.";
    case "5":
      return "Próximos conciertos: Consulta la página oficial de Morat para fechas actualizadas en tu ciudad.";
    case "6":
      return "¡Gracias por chatear sobre Morat! Escribe 'menu' si quieres volver a empezar.";
    case "menu":
      return mostrarMenu();
    default:
      return "Opción no válida. Escribe un número del 1 al 6 o 'menu'.";
  }
}

function sendMessage() {
  const text = userInput.value;
  if (!text.trim()) return;

  appendMessage('user', text);
  const response = getBotResponse(text.toLowerCase());
  appendMessage('bot', response);
  userInput.value = '';
}

// Mostrar bienvenida y menú al abrir chat
function iniciarChat() {
  appendMessage('bot', "¡Hola! Soy MoratBot 🧔🏻");
  appendMessage('bot', mostrarMenu());
}

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
