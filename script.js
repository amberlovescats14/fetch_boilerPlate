



// const getAPI = () => {
//   let payload;
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//     .then(data => {
//       payload = data
//       showApi(payload)
//     })
// }
// const showApi = (payload) => {
//   console.log(`amber`)
//   payload.map(user => console.log(user.name))
// }
// getAPI()


function getAPI() {
  let payload;
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
      .then(data => {
      payload = data
      showAPI(payload)
    })

}

function showAPI(payload){
  payload.map(user => console.log(user.name))
}

getAPI()


