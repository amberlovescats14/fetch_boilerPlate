



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

let store = []

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
  for(let i=0; i<payload.length; i++){
    store.push(payload[i])
  }
}
console.log(store)

getAPI()


