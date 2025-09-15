// Save registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {

  // Create a small div to show success messages
  let successMessage = document.createElement('div');
  successMessage.style.marginTop = "10px";
  successMessage.style.color = "green";
  registerForm.appendChild(successMessage);

  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, course });
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    successMessage.textContent = `Registration successful for "${course}"! Redirecting to Home...`;

    // Reset form
    registerForm.reset();

    // Redirect after 1.5 seconds
    setTimeout(() => {
      window.location.replace("index.html");
    }, 1500);
  });
}
