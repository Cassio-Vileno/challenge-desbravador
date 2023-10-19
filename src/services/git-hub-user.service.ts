import api from "./api.service";

export default class UserService {
  static async getUser(username: string) {
    const { data } = await api.get(`users/${username}`);
    return data;
  }
}
