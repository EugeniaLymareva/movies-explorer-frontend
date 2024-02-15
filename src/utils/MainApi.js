class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    _checkResponse(response) {
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
    } 

    async getUserInfo() {
        const response = await fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers,
          credentials: "include",
        })
        return this._checkResponse(response)
      }
    
    async updateUserInfo(userData) {
        const response = await fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            credentials: "include",
            method: 'PATCH',
            body: JSON.stringify(userData)
        })
        return this._checkResponse(response)
    }

    async getSavedMovies() {
        const response = await fetch(`${this._baseUrl}/movies`, {
          headers: this._headers,
          credentials: "include",
        })
        return this._checkResponse(response)
    }

    async addMovie(movieData) {
        const response = await fetch(`${this._baseUrl}/movies`, {
          headers: this._headers,
          credentials: "include",
          method: 'POST',
          // mode: 'no-cors',
          body: JSON.stringify(movieData),
        })
        return this._checkResponse(response)
    }

    async deleteMovie(movieId) {
        const response = await fetch(`${this._baseUrl}/movies/${movieId}`, {
          headers: this._headers,
          credentials: "include",
          method: 'DELETE'
        })
        return this._checkResponse(response)
    }
}

const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000',  // https://api.lea.nomoredomainsrocks.ru  // http://localhost:3000
    headers: {
      'Content-Type': 'application/json',
    }
})
  
export default mainApi