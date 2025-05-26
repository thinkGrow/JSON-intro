const handleLoadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    //   converted to obj
    .then((json) => console.log(json));
};
