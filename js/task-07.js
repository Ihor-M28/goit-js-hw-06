const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
inputRef.addEventListener('input', (event) => {
    const size = event.currentTarget.value;
    spanRef.style.fontSize = `${size}px`;
})

console.log(inputRef);