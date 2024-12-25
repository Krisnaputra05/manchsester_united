// This file contains the JavaScript code for the website. 
// It may include functions for interactivity, event handling, and any dynamic behavior required on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to My Simple Website!';
    
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});