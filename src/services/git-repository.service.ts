import api from "./api.service";

export default class RepositoryService {
  static async getRepositories(username: string) {
    const { data } = await api.get(`users/${username}`);
    return data;
  }
}
