import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchContury } from '../../../api/countries/conutries';
import { CountrySideBar } from '../../moduler/sidebar/CountrySideBar';
import { StatusBoard } from '../../moduler/statusboard/StatusBoard';
import { CountryDefine } from '../../../type/country';

export const CovidMain = () => {
  const [conturyArry, setConturyItem] = useState<CountryDefine[]>();
  useEffect(() => {
    fetchData(setConturyItem);
  }, []);
  return (
    <Main>
      <CountrySideBar conturyArry={conturyArry} />
      <StatusBoard />
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

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;
