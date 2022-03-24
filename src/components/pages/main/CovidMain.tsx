import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchContury, fetchSummary } from '../../../api/countries/conutries';
import { CountrySideBar } from '../../moduler/sidebar/CountrySideBar';
import { StatusBoard } from '../../moduler/statusboard/StatusBoard';
import {
  CountriesType,
  CountryDefine,
  SummaryDefine,
} from '../../../type/country';
import { useDispatch } from 'react-redux';
import { summeryListUp } from '../../../store/reduser';

export const CovidMain = () => {
  const dispath = useDispatch();
  const [conturyArry, setConturyItem] = useState<CountryDefine[]>([]);
  const [currentSummary, setCurrentSummary] = useState<CountriesType>();
  useEffect(() => {
    fetchData(setConturyItem);
    fetchSummaryData(setCurrentSummary, dispath);
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

async function fetchSummaryData(setState: any, dispath: any) {
  try {
    const {
      data: { Global: Global, Countries: Countries },
    } = await fetchSummary<SummaryDefine>();
    dispath(summeryListUp(Countries as CountriesType[]));

    return setState(Global);
  } catch (error) {
    console.error(error);
  }
}

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;
