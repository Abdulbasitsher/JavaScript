const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = "Please provide a valid height";
    } else if (weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please provide a valid weight";
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        result.innerHTML = ` ${bmi}`;
    }
})

// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('#result');

//     if (isNaN(height) || height <= 0) {
//         result.innerHTML = "Please provide a valid height.";
//     } else if (isNaN(weight) || weight <= 0) {
//         result.innerHTML = "Please provide a valid weight.";
//     } else {
//         const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
//         result.innerHTML = `Your BMI is ${bmi}`;
//     }
// });
