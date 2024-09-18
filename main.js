const usersContainer = document.getElementById('users');
const loader = document.getElementById('loader');


async function fetchUsers() {
  try {
    
    loader.style.display = 'block';


    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    
    loader.style.display = 'none';

    
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `
        <h3>Name: ${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>ID: ${user.id}</p>
      `;
      usersContainer.appendChild(userDiv);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}


fetchUsers();