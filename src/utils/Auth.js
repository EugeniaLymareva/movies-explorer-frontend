// const BASE_URL = 'https://api.lea.nomoredomainsrocks.ru';
const BASE_URL = 'http://localhost:3000'

const getResponseData = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

export const register = (username, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: username, email, password }),
  })
    .then(getResponseData)
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    })
    .then(getResponseData)
}