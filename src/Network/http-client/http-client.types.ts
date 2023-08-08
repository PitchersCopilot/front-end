export type PostReqOptions = {
  url?: string;
};

export interface IHttpClient<T> {
  // TODO: Change the SearchBodyTyp to a more generic one
  post(body: SearchBody, options?: PostReqOptions): Promise<T>;
}
