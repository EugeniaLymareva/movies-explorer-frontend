class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    getImageUrl() {
        return this._baseUrl.replace('/beatfilm-movies', '')
    }

    _checkResponse(response) {
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
    }

    async getMovies() {
        const response = await fetch(`${this._baseUrl}/`, {
          headers: this._headers,
        })
        return this._checkResponse(response)
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',  
    headers: {
      'Content-Type': 'application/json',
    }
})

export default moviesApi