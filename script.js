



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
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
      .then(data => {

        for(let i=0; i<data.length; i++){
          store.push(data[i])
        }

    })

}


getAPI()

console.log(store)

