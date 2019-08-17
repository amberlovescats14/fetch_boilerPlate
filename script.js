
let payload;
 fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
    .then(data => {
      payload = data
      console.log(payload)
    })





