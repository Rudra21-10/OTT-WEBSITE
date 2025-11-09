function validateAdminLogin(){  const e=document.getElementById('adminEmail').value.trim();  const p=document.getElementById('adminPassword').value.trim();  if(!e||!p){alert('Enter credentials');return false;}alert('Admin login (demo)');return false;}
function showAddMovie(){document.getElementById('addMovie').style.display='block'}
function hideAddMovie(){document.getElementById('addMovie').style.display='none'}
function saveMovie(){alert('Saved (demo)');hideAddMovie();return false}