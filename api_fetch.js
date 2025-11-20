fetch("http://localhost:3000/students")
  .then(res => res.json())
  .then(data => console.log(data));
