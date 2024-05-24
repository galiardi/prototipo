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
import { SimulatorDataContext } from '../../../context/simulatorData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'SALDO ACUMULADO',
    },
  },
};
export const Chart = () => {
  const {
    totalContribution,
    totalContributionPV,
    alternative1,
    alternative2,
    alternative1label,
    alternative2label,
  } = useContext(SimulatorDataContext);
  const { isPresentValueSwitchChecked, turnPresentValueSwitch } =
    useContext(UIContext);

  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Aporte total',
        data: [
          isPresentValueSwitchChecked ? totalContributionPV : totalContribution,
        ],
        borderColor: '#e1e1e1',
        backgroundColor: '#f1f1f1',
      },
      {
        label: alternative1label,
        data: [
          isPresentValueSwitchChecked
            ? alternative1.balancePV
            : alternative1.balance,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: alternative2label,
        data: [
          isPresentValueSwitchChecked
            ? alternative2.balancePV
            : alternative2.balance,
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

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
