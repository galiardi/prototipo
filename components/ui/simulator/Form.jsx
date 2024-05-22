import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Alternative } from './Alternative';
import { useGetAverageAnnualInflation } from '../../../functions';

export const Form = ({ formName }) => {
  const averageAnnualInflationRate =
    Math.round(Number(useGetAverageAnnualInflation() * 100)) / 100 ||
    'cargando...';
  const [formData, setFormData] = useState({
    name: formName,
    initialCapital: 0,
    annualContribution: 0,
    years: 0,
    interestRate: 0,
  });
  console.log(useGetAverageAnnualInflation());
  const onInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <form>
          <div>
            <div className="inputDiv">
              <p>Capital inicial</p>
              <input
                type="number"
                name="initial-capital"
                value={formData.initialCapital}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div>
            <div className="inputDiv">
              <p>Aporte anual</p>
              <input
                type="number"
                name="annual-Contribution"
                value={formData.annualContribution}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div>
            <div className="inputDiv">
              <p>Años</p>
              <input
                type="number"
                name="years"
                value={formData.years}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div>
            <div className="inputDiv">
              <p>Tasa de inflación anual</p>
              <input
                type="text"
                name="averageAnnualInflationRate"
                value={`${averageAnnualInflationRate}*`}
                onChange={onInputChange}
              />
            </div>
          </div>
          <Alternative borderColor={'rgba(255, 99, 132, 0.5)'} />
          <Alternative borderColor={'rgba(53, 162, 235, 0.5)'} />
        </form>
        <Typography sx={{ fontSize: '0.7rem' }}>
          *Promedio de la variación anual del IPC de los últimos 25 años
          contados desde el mes actual.
        </Typography>
        <Box sx={{ padding: '2rem' }}>
          <Button variant={'outlined'} color={'secondary'}>
            Calcular
          </Button>
        </Box>
      </Box>

      <style jsx>
        {`
          form {
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 0.5rem;
            padding: 0.5rem 2rem 1rem 2rem;
            background-color: #fff;
            border: 2px solid #000;
            border-radius: 1rem;
          }
          form > div {
            margin: 0.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          }
          .inputDiv {
            position: relative;
            display: flex;
            justify-content: center;
            width: 19rem;
          }
          input {
            width: 14rem;
            border: 1px solid #ddd;
            font-size: 1rem;
            font-family: inherit;
            border-radius: 0.2rem;
            text-indent: 1rem;
          }
          i {
            position: absolute;
            right: 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .error {
            color: red;
            font-size: 0.7rem;
            position: relative;
            top: 0px;
            left: 0px;
            height: 0px;
          }
          .notError {
            visibility: hidden;
            font-size: 0.7rem;
            position: relative;
            top: 0px;
            left: 0px;
            height: 0px;
          }
          p {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};
