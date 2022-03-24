import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../store/hooks';
import { targetCountry } from '../../../store/reduser';
import { CountryDefine } from '../../../type/country';
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
    dispatch(targetCountry(e.currentTarget.textContent as string));
  };
  return <Wrapper onClick={onClick}>{conturey.Country}</Wrapper>;
};

interface IPorps {
  conturey: CountryDefine;
}
