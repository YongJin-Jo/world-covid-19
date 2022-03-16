import React from 'react';
import styled from 'styled-components';
import { GlobalType } from '../../../type/country';
import { SummaryBoard } from '../summaryBoard/SummaryBoard';

interface IProps {
  boardData: GlobalType | undefined;
}

export const StatusBoard = ({ boardData }: IProps) => {
  return (
    <Wrapper>
      <SummaryBoard boardData={boardData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
