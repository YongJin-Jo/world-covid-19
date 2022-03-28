import React, { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';

interface IProps {
  chart:
    | {
        name: string;
        data: number[];
      }[]
    | null;
}

export const ChartBoard = ({ chart }: IProps) => {
  console.log(chart);

  return (
    <div>
      {chart && (
        <ApexChart
          type="area"
          options={{
            chart: {
              height: 100,
              width: 100 + '%',
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            yaxis: { show: false },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
          }}
          series={chart?.map(item => item)}
        />
      )}
    </div>
  );
};
