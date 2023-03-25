const inputRef = document.querySelector("#validation-input");


inputRef.addEventListener("blur", (event) => {
    const inputDataToNumber = Number(inputRef.dataset.length);
 if (event.currentTarget.value.length !== inputDataToNumber) {
     inputRef.classList.add("invalid");inputRef.classList.remove("valid"); 
    } else inputRef.classList.remove("invalid"), inputRef.classList.add("valid");
});

console.log(inputRef);
        

