const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button'); // Select all buttons with the class 'button'

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const color = e.target.id; // Get the id of the clicked button
        console.log(color); // Log the color
        body.style.backgroundColor = color; // Change the body's background color
    });
});
