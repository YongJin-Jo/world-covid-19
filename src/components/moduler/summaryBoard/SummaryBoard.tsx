import React from 'react';
import styled from 'styled-components';
import { GlobalType } from '../../../type/country';

interface IProps {
  boardData: GlobalType | undefined;
}

export const SummaryBoard = ({ boardData }: IProps) => {
  console.log(boardData);

  return (
    <Wrapper>
      <SummaryCount>
        <h2>전체 확진자 수</h2>
        <span>{boardData?.TotalConfirmed.toLocaleString()}</span>
      </SummaryCount>
      <SummaryCount>
        <h2>전체 사망자 수</h2>
        <span>{boardData?.TotalDeaths.toLocaleString()}</span>
      </SummaryCount>
      <SummaryCount>
        <h2>신규 확지자 수</h2>
        <span>{boardData?.NewConfirmed.toLocaleString()}</span>
      </SummaryCount>
      <SummaryCount>
        <h2>신규 사망자 수</h2>
        <span>{boardData?.NewDeaths.toLocaleString()}</span>
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
