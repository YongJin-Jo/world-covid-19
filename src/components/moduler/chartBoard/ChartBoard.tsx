import React, { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';

interface IProps {
  chart:
    | {
        name: string;
        data: number[];
      }[]
    | null;
}

export const ChartBoard = ({ chart }: IProps) => {
  return (
    <Wrapper>
      {chart === null ? (
        <Contents>
          <h1>World Covid 19 Summary</h1>
        </Contents>
      ) : (
        <ApexChart
          type="area"
          height={'95%'}
          options={{
            dataLabels: { enabled: false },
            chart: {
              toolbar: {
                show: false,
              },
            },
            yaxis: { show: false },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
            legend: {
              labels: {
                colors: 'white',
              },
            },
          }}
          series={chart?.map(item => item)}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 5rem;
  }
`;
