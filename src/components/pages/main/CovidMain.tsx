import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchContury, fetchSummary } from '../../../api/countries/conutries';
import { CountrySideBar } from '../../moduler/sidebar/CountrySideBar';
import { StatusBoard } from '../../moduler/statusboard/StatusBoard';
import {
  CountryDefine,
  GlobalType,
  SummaryDefine,
} from '../../../type/country';

export const CovidMain = () => {
  const [conturyArry, setConturyItem] = useState<CountryDefine[]>();
  const [currentSummary, setCurrentSummary] = useState<GlobalType>();
  useEffect(() => {
    fetchData(setConturyItem);
    fetchSummaryData(setCurrentSummary);
  }, []);

  return (
    <Main>
      <CountrySideBar conturyArry={conturyArry} />
      <StatusBoard boardData={currentSummary} />
    </Main>
  );
};

async function fetchData(setState: any) {
  try {
    const { data: conturyItem } = await fetchContury<CountryDefine[]>();
    return setState(conturyItem);
  } catch (error) {
    console.error(error);
  }
}

async function fetchSummaryData(setState: any) {
  try {
    const {
      data: { Global: summaryItem },
    } = await fetchSummary<SummaryDefine>();
    return setState(summaryItem);
  } catch (error) {
    console.error(error);
  }
}

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;
