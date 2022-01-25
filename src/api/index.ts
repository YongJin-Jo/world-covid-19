import axios, { AxiosInstance } from 'axios';

function CreateFetch(url: string): AxiosInstance {
  const fetchControl = axios.create(Object.assign({ baseURL: url }));
  return fetchControl;
}

export const conturey = CreateFetch(`${process.env.REACT_APP_COVID_19_URL}`);
