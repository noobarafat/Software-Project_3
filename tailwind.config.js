/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }



  function toggleLoginForm() {
    var loginForm = document.getElementById("login-form-container");
    loginForm.classList.toggle("hidden");
}
