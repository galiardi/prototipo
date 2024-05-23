import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Alternative } from './Alternative';
import { useGetAverageAnnualInflation } from '../../../hooks';
import { getBalance, getPresentValue } from '../../../functions';

export const Form = () => {
  const inflationRate =
    Math.round(Number(useGetAverageAnnualInflation() * 100)) / 100 ||
    'cargando...';

  const [formData, setFormData] = useState({
    initialCapital: '',
    annualContribution: '',
    years: '',
    alternative1Name: 'Alternativa 1',
    alternative2Name: 'Alternativa 2',
    alternative1Rate: '',
    alternative2Rate: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const calculate = () => {
    const {
      initialCapital,
      annualContribution,
      years,
      alternative1Rate,
      alternative2Rate,
    } = Object.keys(formData).reduce(
      (acc, el) => ({ ...acc, [el]: Number(formData[el]) }),
      {}
    );

    const totalContribution = initialCapital + annualContribution * years;

    const totalContributionPV = getPresentValue({
      futureValue: totalContribution,
      years,
      inflation: inflationRate,
    });

    const balance1 = getBalance({
      initialCapital,
      annualContribution,
      years,
      rate: alternative1Rate,
    });
    const balance1PV = getPresentValue({
      futureValue: balance1,
      years,
      inflation: inflationRate,
    });

    console.log('aporte total: ' + totalContribution);
    console.log('aporte total en valor presente: ' + totalContributionPV);
    console.log('balance1: ' + balance1);
    console.log('balance1 en valor presente: ' + balance1PV);
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
                name="initialCapital"
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
                name="annualContribution"
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
              <p>Tasa de inflación anual (%)</p>
              <input
                type="text"
                name="inflationRate"
                value={`${inflationRate}*`}
                onChange={onInputChange}
              />
            </div>
          </div>
          <Alternative
            inputName={'alternative1'}
            alternativeName={formData.alternative1Name}
            annualInterestRate={formData.alternative1Rate}
            borderColor={'rgba(255, 99, 132, 0.5)'}
            onInputChange={onInputChange}
          />
          <Alternative
            inputName={'alternative2'}
            alternativeName={formData.alternative2Name}
            annualInterestRate={formData.alternative2Rate}
            borderColor={'rgba(53, 162, 235, 0.5)'}
            onInputChange={onInputChange}
          />
        </form>
        <Typography sx={{ fontSize: '0.7rem' }}>
          *Promedio de la variación anual del IPC de los últimos 25 años
          contados desde el mes actual.
        </Typography>
        <Box sx={{ padding: '2rem' }}>
          <Button variant={'outlined'} color={'secondary'} onClick={calculate}>
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
