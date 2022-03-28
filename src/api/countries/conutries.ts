import { AxiosResponse } from 'axios';
import { CountryStatus } from '../../type/country';
import { conturey } from '../index';

//전세계 통계
function fetchSummary<T>(): Promise<AxiosResponse<T>> {
  return conturey.get('summary');
}

// 국가 리스트 생성
function fetchContury<T>(): Promise<AxiosResponse<T>> {
  return conturey.get('countries');
}

// 국가 라이브 상태
function LiveByCountryAllStatus<T>(
  country: string | null
): Promise<AxiosResponse<T>> {
  return conturey.get(`live/country/${country}`);
}

// 국가 전체 상태
function ByCountryTotalAllStatus<T>(
  country: string | null
): Promise<AxiosResponse<T>> {
  return conturey.get(`country/${country}`);
}

// 국가별 하루 통계
function DayOneAllStatus<T>(country: string | null): Promise<AxiosResponse<T>> {
  return conturey.get(`dayone/country/${country}`);
}

export {
  fetchSummary,
  fetchContury,
  ByCountryTotalAllStatus,
  LiveByCountryAllStatus,
  DayOneAllStatus,
};
