(function() {
    // CSS styles
    const styles = `
        /* Import Google font - Poppins */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        }

        body {
        background: #E3F2FD;
        }

        .chatbot-toggler {
        position: fixed;
        bottom: 30px;
        right: 35px;
        outline: none;
        border: none;
        height: 50px;
        width: 50px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #724ae8;
        transition: all 0.2s ease;
        }

        body.show-chatbot .chatbot-toggler {
        transform: rotate(90deg);
        }

        .chatbot-toggler span {
        color: #fff;
        position: absolute;
        }

        .chatbot-toggler span:last-child,
        body.show-chatbot .chatbot-toggler span:first-child {
        opacity: 0;
        }

        body.show-chatbot .chatbot-toggler span:last-child {
        opacity: 1;
        }

        .chatbot {
        position: fixed;
        right: 35px;
        bottom: 90px;
        width: 420px;
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        transform: scale(0.5);
        transform-origin: bottom right;
        box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
            0 32px 64px -48px rgba(0, 0, 0, 0.5);
        transition: all 0.1s ease;
        }

        body.show-chatbot .chatbot {
        opacity: 1;
        pointer-events: auto;
        transform: scale(1);
        }

        .chatbot header {
        padding: 16px 0;
        position: relative;
        text-align: center;
        color: #fff;
        background: #724ae8;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .chatbot header span {
        position: absolute;
        right: 15px;
        top: 50%;
        display: none;
        cursor: pointer;
        transform: translateY(-50%);
        }

        header h2 {
        font-size: 1.4rem;
        }

        .chatbot .chatbox {
        overflow-y: auto;
        height: 510px;
        padding: 30px 20px 100px;
        }

        .chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
        width: 6px;
        }

        .chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 25px;
        }

        .chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 25px;
        }

        .chatbox .chat {
        display: flex;
        list-style: none;
        }

        .chatbox .outgoing {
        margin: 20px 0;
        justify-content: flex-end;
        }

        .chatbox .incoming span {
        width: 32px;
        height: 32px;
        color: #fff;
        cursor: default;
        text-align: center;
        line-height: 32px;
        align-self: flex-end;
        background: #724ae8;
        border-radius: 4px;
        margin: 0 10px 7px 0;
        }

        .chatbox .chat p {
        white-space: pre-wrap;
        padding: 12px 16px;
        border-radius: 10px 10px 0 10px;
        max-width: 75%;
        color: #fff;
        font-size: 0.95rem;
        background: #724ae8;
        }

        .chatbox .incoming p {
        border-radius: 10px 10px 10px 0;
        }

        .chatbox .chat p.error {
        color: #721c24;
        background: #f8d7da;
        }

        .chatbox .incoming p {
        color: #000;
        background: #f2f2f2;
        }

        .chatbot .chat-input {
        display: flex;
        gap: 5px;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
        padding: 3px 20px;
        border-top: 1px solid #ddd;
        }

        .chat-input textarea {
        height: 55px;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
        max-height: 180px;
        padding: 15px 15px 15px 0;
        font-size: 0.95rem;
        }

        .chat-input span {
        align-self: flex-end;
        color: #724ae8;
        cursor: pointer;
        height: 55px;
        display: flex;
        align-items: center;
        visibility: hidden;
        font-size: 1.35rem;
        }

        .chat-input textarea:valid~span {
        visibility: visible;
        }

        @media (max-width: 490px) {
        .chatbot-toggler {
            right: 20px;
            bottom: 20px;
        }

        .chatbot {
            right: 0;
            bottom: 0;
            height: 100%;
            border-radius: 0;
            width: 100%;
        }

        .chatbot .chatbox {
            height: 90%;
            padding: 25px 15px 100px;
        }

        .chatbot .chat-input {
            padding: 5px 15px;
        }

        .chatbot header span {
            display: block;
        }
        }
    `;
  
    // HTML structure
    const htmlStructure = `
      <button class="chatbot-toggler">
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span class="close-btn material-symbols-outlined">close</span>
        </header>
        <ul class="chatbox">
          <li class="chat incoming">
            <span class="material-symbols-outlined">smart_toy</span>
            <p>Hi there 👋<br>How can I help you today?</p>
          </li>
        </ul>
        <div class="chat-input">
          <textarea placeholder="Enter a message..." required></textarea>
          <span id="send-btn" class="material-symbols-rounded">send</span>
        </div>
      </div>
    `;
  
    // Inject CSS
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  
    // Inject HTML
    const chatbotElement = document.createElement('div');
    chatbotElement.id = 'chatbot-container';
    chatbotElement.innerHTML = htmlStructure;
    document.body.appendChild(chatbotElement);
  
    // Load Material Icons
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0';
    document.head.appendChild(linkElement);
  
    // Load DOMPurify
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.10/purify.min.js';
    document.head.appendChild(scriptElement);
  
    // Main chatbot logic
    scriptElement.onload = function() {
      const chatbotToggler = document.querySelector(".chatbot-toggler");
      const closeBtn = document.querySelector(".close-btn");
      const chatbox = document.querySelector(".chatbox");
      const chatInput = document.querySelector(".chat-input textarea");
      const sendChatBtn = document.querySelector(".chat-input span");
  
      let userMessage = null;
      const inputInitHeight = chatInput.scrollHeight;
  
      // API configuration
      const API_KEY = ""; // Your API key here
      const API_URL = `https://mantle.us.gaianet.network/v1/chat/completions`;
  
      const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", `${className}`);
        let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi;
      }
  
      const generateResponse = async (chatElement) => {
        const messageElement = chatElement.querySelector("p");
        console.log(userMessage);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            messages: [{ 
              role: "system", 
              content: "Act as an expert in the Mantle protocol and help the user based on your expertise in deploying apps with Mantle"
            },
            { 
              role: "user", 
              content: userMessage
            }] 
          }),
        }
  
        try {
          console.log("Request Options:", requestOptions);
          const response = await fetch(API_URL, requestOptions);
          const data = await response.json();
          console.log("API Response:", data);
  
          if (!response.ok) throw new Error(data.error?.message || 'Unknown error occurred');
  
          let responseMessage = '';
          if (data.choices && data.choices[0] && data.choices[0].message) {
            responseMessage = data.choices[0].message.content;
          } else if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            responseMessage = data.candidates[0].content.parts[0].text;
          } else {
            throw new Error('Unexpected response structure');
          }
  
          responseMessage = convertLinksToAnchors(responseMessage);
          messageElement.innerHTML = DOMPurify.sanitize(responseMessage);
        } catch (error) {
          console.error("Error:", error);
          messageElement.classList.add("error");
          messageElement.textContent = error.message || 'An error occurred while fetching the response';
        } finally {
          chatbox.scrollTo(0, chatbox.scrollHeight);
        }
      }
  
      const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;
  
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;
  
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
  
        setTimeout(() => {
          const incomingChatLi = createChatLi("Thinking...", "incoming");
          chatbox.appendChild(incomingChatLi);
          chatbox.scrollTo(0, chatbox.scrollHeight);
          generateResponse(incomingChatLi);
        }, 600);
      }
  
      function convertLinksToAnchors(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function(url) {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        });
      }
  
      chatInput.addEventListener("input", () => {
        chatInput.style.height = `${inputInitHeight}px`;
        chatInput.style.height = `${chatInput.scrollHeight}px`;
      });
  
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
          e.preventDefault();
          handleChat();
        }
      });
  
      sendChatBtn.addEventListener("click", handleChat);
      closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
      chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
    };
  })();
