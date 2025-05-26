const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => showUser(data));
};

const showUser = (users) => {
  const userContainer = document.getElementById("users");

  for (const user of users) {
    const li = document.createElement("li");
    li.textContent = user.name;
    userContainer.appendChild(li);
  }
};
