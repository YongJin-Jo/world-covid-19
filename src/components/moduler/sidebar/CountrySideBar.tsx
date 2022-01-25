import React from 'react';
import styled from 'styled-components';
import { CountryLIst } from '../../atom/CountryList/CountryList';
import { CountryDefine } from '../../pages/main/CovidMain';
export const CountrySideBar = (conturyArry: any) => {
  console.log(conturyArry);

  return (
    <Sidebar>
      <CountryLIst />
    </Sidebar>
  );
};

const Sidebar = styled.nav`
  display: flex;
`;
