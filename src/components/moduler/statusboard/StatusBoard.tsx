import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DayOneAllStatus } from '../../../api/countries/conutries';
import { useAppSelector } from '../../../store/hooks';
import { CountriesType, oneCountry } from '../../../type/country';
import { ChartBoard } from '../chartBoard/ChartBoard';
import { SummaryBoard } from '../summaryBoard/SummaryBoard';

interface IProps {
  boardData: CountriesType | undefined;
}

interface chartObj {
  name: string;
  data: number[];
}

export const StatusBoard = ({ boardData }: IProps) => {
  const [summer, setSummer] = useState<CountriesType>();
  const [chart, setChart] = useState<chartObj[] | null>(null);
  const country = useAppSelector(state => state.mainContents.country);
  const summery = useAppSelector(state => state.mainContents.sumery);

  useEffect(() => {
    setSummer(boardData);
    fetchCountryTotal(country, setChart);
    selectSummery(country);
  }, [country, boardData]);

  // 상태관레서 국기명 Summery 가져오기
  const selectSummery = (country: string) => {
    if (country === '') return;
    const summeryObj = summery.filter(item => item.Country === country);
    setSummer(summeryObj[0]);
  };

  return (
    <Wrapper>
      <SummaryBoard summer={summer} />
      <ChartBoard chart={chart} />
    </Wrapper>
  );
};

// 해당 국가
async function fetchCountryTotal(country: string | null, setState: any) {
  try {
    const { data } = await DayOneAllStatus<oneCountry[]>(country);
    const Confirmed = data.map(item => item.Confirmed);
    const Deaths = data.map(item => item.Deaths);
    const Recovered = data.map(item => item.Recovered);
    setState([
      { name: 'Confirmed', data: Confirmed },
      { name: 'Deaths', data: Deaths },
      { name: 'Recovered', data: Recovered },
    ]);
  } catch (error) {
    console.error(error);
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
