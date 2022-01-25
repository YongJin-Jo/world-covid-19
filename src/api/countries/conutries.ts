import { AxiosResponse } from 'axios';
import { conturey } from '../index';

// 국가 리스트 생성
function fetchContury<T>(): Promise<AxiosResponse<T>> {
  return conturey.get('countries');
}

export { fetchContury };
