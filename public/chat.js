// const responseController = require('./../controllers/responseController');
// const Command = require("./../models/commandModel");
const messagesContainer = document.getElementById("messages-container");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Add user message to the chat interface
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.textContent = chatInput.value;
  messagesContainer.appendChild(userMessage);

  // Process the user message and add a bot response to the chat interface
  // const botResponse = document.createElement("div");
  // botResponse.classList.add("bot-message");

  const targetCommand = chatInput.value;

  if (targetCommand === "1") {
    fetch("http://localhost:8000/menu")
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((element) => {
        const botResponse = document.createElement("div");
        botResponse.classList.add("bot-message");
        botResponse.textContent = `${element.command}, ${element.menuName}, ${element.price}`
        messagesContainer.appendChild(botResponse);


        // console.log(element.command);
        // if (element.command === chatInput.value) {
        //   console.log(
        //     "Found target command:",
        //     // element.command
        //   );
        // } else {
        //   console.log("target not found");
        // }
      });
    })
    .catch((error) => console.error(error));
  } else if(targetCommand === "2") {
    
  } else {

  }

   


  // Clear the input field and scroll to the bottom of the chat interface
  chatInput.value = "";
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});


// function run() {
//   // Creating Our XMLHttpRequest object
//   const xhr = new XMLHttpRequest();

//   // Making our connection
//   const url = "http://localhost:8000/commands";
//   xhr.open("GET", url, true);

//   // function execute after request is successful
//   xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText().data);
//     }
//   };
//   // Sending our request
//   xhr.send();
// }

// run()
// let data = [];
// fetch('http://localhost:8000/commands')
//   .then(res => res.json())
//   .then(data => (data.data.forEach(element => {
//     console.log(element.command);
//   })))
//   .catch(error => console.error(error));

// fetch("http://localhost:8000/commands")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     data.data.forEach((element) => {
  //       console.log(typeof element.command);
  //       if (element.command === chatInput.value) {
  //         console.log(
  //           "Found target command:",
  //           // element.command
  //         );
  //       } else {
  //         console.log("target not found");
  //       }
  //     });
  //   })
  //   .catch((error) => console.error(error));

  // switch (chatInput.value) {
  //   case "1":
  //     botResponse.textContent = "you typed 1";
  //     break;
  //   case "2":
  //     botResponse.textContent = "You typed 2.";
  //     break;
  //   default:
  //     botResponse.textContent = "Sorry, I didn't understand that.";
  // }

  // console.log(chatInput.value);
  // console.log("hi, i am your target command",targetCommand);
  // console.log(typeof chatInput.value);


  // fetch("http://localhost:8000/commands")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const foundCommands = data.data.filter(
  //       (element) => element.command.toString() === targetCommand
  //     );
  //     if (foundCommands.length > 0) {
  //       console.log(
  //         `Found ${foundCommands.length} commands with command value ${targetCommand}:`
  //       );
  //       foundCommands.forEach((element) =>
  //         // console.log(element.command, element.response)
  //         botResponse.textContent = element.response
  //       );
  //     } else {
  //       // console.log(`No commands found with command value ${targetCommand}`);
  //       botResponse.textContent = `No commands found with command value ${targetCommand}`
  //     }
  //   })
  //   .catch((error) => console.error(error));