import React from 'react';
import styled from 'styled-components';
import { LiveByCountryAllStatus } from '../../../api/countries/conutries';
import { useAppDispatch } from '../../../store/hooks';
import { targetCountry } from '../../../store/reduser';
import { CountryDefine, LiveCountryStatusDefine } from '../../../type/country';
const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${props => props.theme.purple.light};
  font-weight: bold;
  color: white;
`;

export const CountryLIst = ({ conturey }: IPorps) => {
  const dispatch = useAppDispatch();
  const onClick = (e: React.MouseEvent) => {
    dispatch(() => {
      targetCountry(e.currentTarget.textContent as string);
    });
  };
  return <Wrapper onClick={onClick}>{conturey.Country}</Wrapper>;
};

async function fetchCountryTotal(country: string | null) {
  try {
    const { data } = await LiveByCountryAllStatus<LiveCountryStatusDefine[]>(
      country
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

interface IPorps {
  conturey: CountryDefine;
}
