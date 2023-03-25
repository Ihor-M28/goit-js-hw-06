const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { login, password }
    } = event.currentTarget;

    if (login.value === "" || password.value === "") {
        return alert("всі поля повинні бути заповнені!");
    }
    console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}