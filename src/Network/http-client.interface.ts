export interface IHttpClient<T> {
  get: () => Promise<T | Array<T>>;
  post: () => Promise<T | Array<T>>;
}

export class HttpClient<M> implements IHttpClient<M> {
  get: () => Promise<M | M[]>;

  post: () => Promise<M | M[]>;
}
