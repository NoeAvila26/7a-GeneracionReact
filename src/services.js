const URL_BASE = "http://localhost:8083/";

function LogIn({ data }) {
  const URL = `${URL_BASE}auth/login`;
  fetch(URL, {
    method: "POST",
    body:JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
    // mode:'no-corse'
    // crossDomain: true
    mode:'cors',
  })
    .then((response) => response.json())
    .then(({data: {token}}) => {
      localStorage.setItem('authToken,')

    })
}

export { LogIn };