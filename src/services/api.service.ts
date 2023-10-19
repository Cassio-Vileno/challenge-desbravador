import axios from 'axios'


const api = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 90000,
  timeoutErrorMessage: "Servidor indisponível. Verifique sua conexão",
})

export default api;