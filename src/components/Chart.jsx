import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

const Chart = ({stats ,experience, height, weight}) => {
    let stats_lebel = [];
    let stats_Value = [];

    stats.map(stat => stats_lebel.push(stat.stat.name));
    stats.map(stat => stats_Value.push(stat.base_stat));

    const statData = {
        labels: stats_lebel,
        datasets:[{
            label:'Value',
            data:stats_Value,
            backgroundColor: [
                '#FAF3F0',
                '#D4E2D4',
                '#FFCACC',
                '#DBC4F0',
            ],
            borderColor:'#fff'            
        }],
    }
    const physical = {
        labels: ['Experience','Height','Weight'],
        datasets:[{
            label:'Value',
            data:[experience,height,weight],
            backgroundColor: [
                '#FBA1B7',
                '#FFD1DA',
                '#FFF0F5',
                '#FFDBAA',
            ],
            borderColor:'#fff'
        }],
    }
  return (
    <div className='flex h-auto flex-col md:flex-row gap-7 w-full md:w-[48%] items-center mt-5 md:justify-between'>
        <Bar className='h-full shadow-xl p-1 rounded-lg' data={statData} options={{responsive:true}}/>
        <Bar className='h-full shadow-xl p-1 rounded-lg' data={physical} options={{responsive:true}}/>
    </div>
  )
}

export default Chart
