const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'http://127.0.0.1:8000/getcount/2020-10-24T18:50:23.541Z'

// function fetchTodos() {
//     return delay(2000)
//         .then(() => {
//             return fetch(url)
//         })
//         .then(response => response.json())
// }

// fetchTodos() 
// .then(data => console.log('Response:', data))
// .catch(e => console.log(e))

async function fetchAsync(params) {
  console.log('Fetching...');
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data:', data)
  } catch (e) {
    console.log('Error:', e);
  } finally {
    
  }
}

fetchAsync()

// let isLoading = true;

// fetch(myRequest).then(function (response) {
//     var contentType = response.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//         return response.json();
//     }
//     throw new TypeError("Oops, we haven't got JSON!");
// })
//     .then(function (json) { /* process your JSON further */ })
//     .catch(function (error) { console.log(error); })
//     .finally(function () { isLoading = false; });

// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    // targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
// fetch(proxyUrl + targetUrl)
  // .then(blob => blob.json())
  // .then(data => {
    // console.table(data);
    // document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    // return data;
  // })
  // .catch(e => {
    // console.log(e);
    // return e;
  // });