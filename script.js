// Save registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, course });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
    registerForm.reset();
  });
}
