import { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FormControlLabel, Box } from '@mui/material';
import { PresentValueSwitch } from './PresentValueSwitch';
import { UIContext } from '../../../context/ui';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // maintainAspectRatio: false,
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Horizontal Bar Chart',
    // },
  },
};

const labels = ['Aporte total', 'Saldo acumulado'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [20, 40, 60],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const Chart = () => {
  const { isPresentValueSwitchChecked, turnPresentValueSwitch } =
    useContext(UIContext);
  return (
    <>
      <Bar options={options} data={data} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <FormControlLabel
          control={
            <PresentValueSwitch
              sx={{ m: 1 }}
              checked={isPresentValueSwitchChecked}
              onChange={() => {
                turnPresentValueSwitch(!isPresentValueSwitchChecked);
              }}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Ajustar a valor presente"
        />
      </Box>
    </>
  );
};
