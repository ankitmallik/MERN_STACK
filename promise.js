//  Creating a Promise that resolves after 2 seconds with a username object
// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({username: "ankit mallik"})
//   }, 2000);
// });
// firstPromise.then((username)=>
// {
//     console.log(username);

// })

fetch("https://dummyjson.com/users")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res.users[0].address.coordinates);
  })
  .catch(() => {
    console.log("error");
  });
