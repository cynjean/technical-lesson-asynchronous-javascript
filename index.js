//Step 3: Create and call a function which will pull from a user's array, loop through the array, and create a new element to display each user within the array.
function displayUsers(users) {
    const userList = document.querySelector('#user-list');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userList.appendChild(listItem);
    });
}
// Step 4:Refactor with Async/Await
async function fetchAndDisplayUsers() {
    try {
        const response = await
        fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
// Step 5: Add error handling
        const userList = document.querySelector('#user-list');
        const errorMessage = document.createElement('li');
        errorMessage.textContent = 'Failed toload user data. Please try again later.';
        userList.appendChild(errorMessage); 
        console.error('Error fetching user data:', error);
    }
}
fetchAndDisplayUsers();
// Step 2: Fetch data with a Promise
//fetch('https://jsonplaceholder.typicosde.com/users')
//.then(response => response.json())
//.then(users => {
//   console.log(users);
//})
//.catch(error => {
//    console.log('Error fetching user data:', error);
//});