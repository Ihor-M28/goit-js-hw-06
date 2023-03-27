
const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    const login = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

  if (login.value === "" || password.value === "") {
    return console.log("всі поля повинні бути заповнені!");
  }

  console.log(`{Login: ${login.value}, Password: ${password.value}}`);
  event.currentTarget.reset();
}


// const formRef = document.querySelector(".login-form");
// formRef.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { password, password }
//     } = event.currentTarget;

//     if (password.value === "" || password.value === "") {
//         return alert("всі поля повинні бути заповнені!");
//     }
//     console.log(`Login: ${password.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
// }