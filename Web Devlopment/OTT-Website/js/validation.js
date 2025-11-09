function validateLogin(){
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if(!email || !password){
    alert('Please enter email and password');
    return false;
  }
  // simple email check
  if(!/\S+@\S+\.\S+/.test(email)){ alert('Enter a valid email'); return false; }
  // demo: show success
  alert('Login successful (demo)');
  return false; // prevent actual submit in demo
}

function validateSignup(){
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const pwd = document.getElementById('password').value;
  const cpwd = document.getElementById('confirmPassword').value;
  if(!name||!email||!pwd||!cpwd){ alert('Please fill all fields'); return false; }
  if(!/\S+@\S+\.\S+/.test(email)){ alert('Enter a valid email'); return false; }
  if(pwd.length<6){ alert('Password must be at least 6 characters'); return false; }
  if(pwd!==cpwd){ alert('Passwords do not match'); return false; }
  alert('Signup successful (demo)');
  return false; // prevent actual submit
}