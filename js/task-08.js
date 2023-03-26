// const formRef = document.querySelector(".login-form");
// formRef.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { login, password }
//     } = event.currentTarget;

//     if (login.value === "" || password.value === "") {
//         return alert("всі поля повинні бути заповнені!");
//     }
//     console.log(`Login: ${login.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
// }

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    const login = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}


