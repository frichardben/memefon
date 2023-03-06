import { apiClient } from '../http';
import { AxiosResponse } from 'axios';
import { IFeed } from '../model';

export class PostService {
  static getAllPosts(page: number): Promise<AxiosResponse<IFeed[]>> {
    return apiClient.get(`posts/?page=${page}`);
  }
}
