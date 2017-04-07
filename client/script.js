/*
 *
 *     Config
 *
 */
const basicExample = document.querySelector('[data-example="basic"]');
const basicInputs = Array.prototype.slice.call(document.querySelectorAll('[data-input="basic"]'));

let fetchOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: {}
};


/*
 *
 *     Event listeners
 *
 */
basicInputs.forEach(input => input.addEventListener('input', handleInput));

basicExample.addEventListener('click', handleClick);
basicExample.addEventListener('keydown', handleKeypress);


/*
 *
 *     Event handlers
 *
 */
function handleClick() {
    document.getElementById('reported_by').value = basicExample.innerHTML;
    basicExample.innerHTML = '';
}

function handleInput() {
    let data = {};

    basicInputs.map((input) => {
        data[input.id] = input.value;
    });

    fetchOptions.body = JSON.stringify(data);

    fetch('/predict', fetchOptions)
        .then(response => response.json())
        .then(response => {
            basicExample.innerHTML = response[Object.keys(response)[0]];
        });
}

function handleKeypress(event) {
    if (event.keyCode === 13) {
        handleClick();
    }
}
