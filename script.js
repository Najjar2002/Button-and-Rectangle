const rectangle = document.getElementById('rectangle');
const button = document.getElementById('moveButton');

const colors = ['red', 'blue', 'green', 'orange'];
let position = 0; 

function moveRectangle() {
    position = (position + 1) % 4;

    rectangle.style.top = '';
    rectangle.style.bottom = '';
    rectangle.style.left = '';
    rectangle.style.right = '';

    switch (position) {
        case 0: // bottom-left
            rectangle.style.left = '20px';
            rectangle.style.bottom = '20px';
            break;
        case 1: // bottom-right
            rectangle.style.right = '20px';
            rectangle.style.bottom = '20px';
            break;
        case 2: // top-right
            rectangle.style.right = '20px';
            rectangle.style.top = '20px';
            break;
        case 3: // top-left
            rectangle.style.left = '20px';
            rectangle.style.top = '20px';
            break;
    }

    rectangle.style.backgroundColor = colors[position];
}


rectangle.style.left = '20px';
rectangle.style.bottom = '20px';

button.addEventListener('click', moveRectangle);
