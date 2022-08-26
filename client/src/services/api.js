import axios from "axios"
const BASE_URL = `http://localhost:8000/api/`
const USER = `user/`
class ListApiService {
  static async getUserByEmailAndPassword(email, password) {
    try {
      const response = await axios.post(BASE_URL + USER + `email`, {
        email: email,
        password: password,
      })
      return response.data
    } catch (err) {
      console.log(err.message)
    }
  }
}

export default ListApiService
