import React from 'react';
import styled from 'styled-components';
import { CountryLIst } from '../../atom/CountryList/CountryList';
import { CountryDefine, CountryListDefine } from '../../../type/country';

interface IPorp {
  conturyArry: CountryDefine[] | undefined;
}

export const CountrySideBar = ({ conturyArry }: IPorp) => {
  return (
    <Sidebar>
      {conturyArry?.map((item, index) => (
        <CountryLIst key={index} conturey={item} />
      ))}
    </Sidebar>
  );
};

const Sidebar = styled.nav`
  overflow-y: scroll;
  width: 23em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
