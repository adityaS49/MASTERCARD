const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // perform validation checks
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value === '') {
    alert('Please enter your email.');
    return;
  }

  if (!emailInput.checkValidity()) {
    alert('Please enter a valid email address.');
    return;
  }

  if (passwordInput.value === '') {
    alert('Please enter a password.');
    return;
  }

  // submit form using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/submit-form');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed.');
      }
    }
  };
  xhr.send(JSON.stringify({
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }));
});
