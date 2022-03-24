import React from 'react';
import styled from 'styled-components';
import { CountriesType } from '../../../type/country';

interface IProps {
  summer: CountriesType | undefined;
}

export const SummaryBoard = ({ summer }: IProps) => {
  return (
    <Wrapper>
      <SummaryCount>
        <h2>전체 확진자 수</h2>
        <span>
          {summer?.TotalConfirmed
            ? summer?.TotalConfirmed.toLocaleString()
            : '정보가 없습니다.'}
        </span>
      </SummaryCount>
      <SummaryCount>
        <h2>전체 사망자 수</h2>
        <span>
          {summer?.TotalDeaths
            ? summer?.TotalDeaths.toLocaleString()
            : '정보가 없습니다.'}
        </span>
      </SummaryCount>
      <SummaryCount>
        <h2>신규 확지자 수</h2>
        <span>
          {summer?.NewConfirmed
            ? summer?.NewConfirmed.toLocaleString()
            : '정보가 없습니다.'}
        </span>
      </SummaryCount>
      <SummaryCount>
        <h2>신규 사망자 수</h2>
        <span>
          {summer?.NewDeaths
            ? summer?.NewDeaths.toLocaleString()
            : '정보가 없습니다.'}
        </span>
      </SummaryCount>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
`;
const SummaryCount = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 10px;
  background: ${props => props.theme.purple.light};
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
  }
  span {
    font-size: 30px;
    margin: 10px;
  }
`;
