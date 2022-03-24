import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DayOneAllStatus } from '../../../api/countries/conutries';
import { useAppSelector } from '../../../store/hooks';
import { CountriesType } from '../../../type/country';
import { SummaryBoard } from '../summaryBoard/SummaryBoard';

interface IProps {
  boardData: CountriesType | undefined;
}
export const StatusBoard = ({ boardData }: IProps) => {
  const [summer, setSummer] = useState<CountriesType>();
  const country = useAppSelector(state => state.mainContents.country);
  const summery = useAppSelector(state => state.mainContents.sumery);

  useEffect(() => {
    setSummer(boardData);
    fetchCountryTotal(country);
    selectSummery(country);
  }, [country, boardData]);
  const selectSummery = (country: string) => {
    if (country === '') return;
    const summeryObj = summery.filter(item => item.Country === country);
    setSummer(summeryObj[0]);
  };

  return (
    <Wrapper>
      <SummaryBoard summer={summer} />
    </Wrapper>
  );
};

async function fetchCountryTotal(country: string | null) {
  try {
    const { data } = await DayOneAllStatus(country, 'confirmed');
  } catch (error) {
    console.error(error);
  }
}

const Wrapper = styled.div`
  width: 100%;
`;
