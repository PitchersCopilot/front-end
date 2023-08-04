import axios from 'axios';
import AxiosInstance from '../Libs/axios/axios.config.ts';

export type PostReqOptions = {
  url?: string;
};

export type SearchResponse<T> = {
  values: T;
};

export interface IHttpClient<T> {
  // TODO: Change the SearchBodyTyp to a more generic one
  post(body: SearchBody, options?: PostReqOptions): Promise<T>;
}

export class HttpClient<M> implements IHttpClient<M> {
  private httClient: typeof AxiosInstance;

  private baseUrl?: string;

  constructor(_baseUrl?: string) {
    this.httClient = axios;
    this.baseUrl = _baseUrl;
  }

  async post(body: SearchBody, options?: PostReqOptions): Promise<M> {
    if (!this.baseUrl && !options)
      throw new Error('You must specify either the url or the base url');

    try {
      const requestUrl: string | undefined = this.baseUrl || options?.url;
      const { data } = await this.httClient.post<SearchResponse<M>>(
        requestUrl!,
        body,
      );
      return data.values;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      throw new Error(error);
    }
  }
}
