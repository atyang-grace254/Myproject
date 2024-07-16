//script.js
//Function to get the current time of day and return a greeting message 
function getGreeting(){
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
        return "Good Morning!";
    } else if (hours < 18){
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}
//Function to display the greeting message
function displayGreeting(){ 
    const greetingMessage = getGreeting();
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textcontent = greetingMessage;
    }
    }
    //call the displayGreeting function when the page loads
    window.onload = displayGreeting

