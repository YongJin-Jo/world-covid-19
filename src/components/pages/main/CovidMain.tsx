import React, { Dispatch, useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchContury } from '../../../api/countries/conutries';
import { CountrySideBar } from '../../moduler/sidebar/CountrySideBar';
import { StatusBoard } from '../../moduler/statusboard/StatusBoard';

export const CovidMain = () => {
  const [conturyArry, setConturyItem] = useState<CountryDefine[]>();
  useEffect(() => {
    fetchData(setConturyItem);
  }, []);
  return (
    <Main>
      <CountrySideBar {...conturyArry} />
      <StatusBoard />
    </Main>
  );
};

export interface CountryDefine {
  Country: string;
  Slug: string;
  ISO2: string;
}

async function fetchData(setState: any) {
  try {
    const { data: conturyItem } = await fetchContury<CountryDefine[]>();
    return setState(conturyItem);
  } catch (error) {
    console.log(error);
  }
}

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;
