const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }
  // https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
  const params = {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }
  method === 'GET' ? delete params['body'] : void 0
  
  return fetch(url, params).then(response => {
    if (response.ok) {
      return response.json()
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    // https://developer.mozilla.org/ru/docs/Web/API/Body/json
    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))

const body = {
  name: 'Vladilen',
  age: 26
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))