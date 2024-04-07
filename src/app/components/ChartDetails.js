"use client";

import { Card, AreaChart, Title } from '@tremor/react';

export default function Details({ results }) {
  const chartData = results.forecasts.map((item) => {
    return {
      date: item.date,
      "Temperature (℃)": item.temp,
      "Temperature Min": item.temp_min.toFixed(1),
      "Temperature Max": item.temp_max.toFixed(1)
    };
  });

  const dataFormatter = (value) => `${value} ℃`

  return (
    <>
      <Card>
        <Title>Weather Details</Title>
        <AreaChart 
          className='h-80'
          data={chartData} 
          index='date'
          categories={['Temperature (℃)', 'Temperature Min', 'Temperature Max']}
          colors={['indigo', 'rose', 'cyan']}
          minValue={0}
          showAnimation={true}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
        />
      </Card  >
    </>
  );
}