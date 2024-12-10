document.addEventListener("DOMContentLoaded", function () {
  // Check if JWT token exists in localStorage
  const token = localStorage.getItem('token');

  // If there's a token, verify it with the backend
  if (token) {
      fetch('backend/welcome.php', {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + token
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              // If the token is valid, redirect to the welcome page
              window.location.href = 'welcome.html';
          } else {
              // If token is invalid, clear the invalid token and show the login form
              localStorage.removeItem('token');
              alert('Your session has expired or is invalid. Please log in again.');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          // If there's an error, remove invalid token and show login form
          localStorage.removeItem('token');
      });
  } else {
      // If no token, show the login form
      console.log('No valid token found. Please log in.');
  }

  // Handle login form submission
  document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Send the login credentials to the server
      fetch('backend/login.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              // Store the JWT token in localStorage
              localStorage.setItem('token', data.token);
              // Redirect to the welcome page
              window.location.href = 'welcome.html';
          } else {
              alert('Invalid credentials!');
          }
      })
      .catch(error => console.error('Error:', error));
  });
});
