import axios from 'axios';
import AxiosInstance from '../../Libs/axios/axios.config.ts';
import { IHttpClient, PostReqOptions } from './http-client.types.ts';

// export default class HttpClient<REQ_T, RES_T> implements IHttpClient<REQ_T> {
export default class HttpClient<REQ_T, RES_T> {
  private httClient: typeof AxiosInstance;

  private baseUrl?: string;

  constructor(_baseUrl?: string) {
    this.httClient = axios;
    this.baseUrl = _baseUrl;
  }

  async post(body: REQ_T, options?: PostReqOptions): Promise<RES_T> {
    if (!this.baseUrl && !options)
      throw new Error('You must specify either the url or the base url');

    const requestUrl: string = `${this.baseUrl || ''}${options?.url || ''}`;
    const { data } = await this.httClient.post<RES_T>(requestUrl, body);
    return data;
  }
}
