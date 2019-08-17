let payload = {}


  fetch('https://jsonplaceholder.typicode.com/todos/5')
  .then(res => res.json())
    .then(data => {
      console.log(data)
      payload = data
      
    })




