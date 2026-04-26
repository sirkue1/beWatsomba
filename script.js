document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }

  const form = document.getElementById('contact-form');
  
  if (form) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('form-success');

    function validateName() {
      const value = nameInput.value.trim();
      const errorEl = document.getElementById('name-error');
      
      if (value.length < 2) {
        nameInput.classList.add('error');
        nameInput.classList.remove('valid');
        errorEl.textContent = 'Name must be at least 2 characters';
        return false;
      }
      
      nameInput.classList.remove('error');
      nameInput.classList.add('valid');
      errorEl.textContent = '';
      return true;
    }

    function validateEmail() {
      const value = emailInput.value.trim();
      const errorEl = document.getElementById('email-error');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!value || !emailRegex.test(value)) {
        emailInput.classList.add('error');
        emailInput.classList.remove('valid');
        errorEl.textContent = 'Please enter a valid email address';
        return false;
      }
      
      emailInput.classList.remove('error');
      emailInput.classList.add('valid');
      errorEl.textContent = '';
      return true;
    }

    function validateMessage() {
      const value = messageInput.value.trim();
      const errorEl = document.getElementById('message-error');
      
      if (value.length < 10) {
        messageInput.classList.add('error');
        messageInput.classList.remove('valid');
        errorEl.textContent = 'Message must be at least 10 characters';
        return false;
      }
      
      messageInput.classList.remove('error');
      messageInput.classList.add('valid');
      errorEl.textContent = '';
      return true;
    }

    if (nameInput) {
      nameInput.addEventListener('blur', validateName);
      nameInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateName();
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', validateEmail);
      emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateEmail();
        }
      });
    }

    if (messageInput) {
      messageInput.addEventListener('blur', validateMessage);
      messageInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateMessage();
        }
      });
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();
      
      if (isNameValid && isEmailValid && isMessageValid) {
        formSuccess.textContent = 'Thank you for your message! We will get back to you within 24 hours.';
        formSuccess.classList.add('success');
        form.reset();
        
        document.querySelectorAll('.valid').forEach(el => {
          el.classList.remove('valid');
        });
        
        setTimeout(function() {
          formSuccess.classList.remove('success');
          formSuccess.textContent = '';
        }, 5000);
      }
    });
  }
});