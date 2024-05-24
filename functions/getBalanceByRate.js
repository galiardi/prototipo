import { getBalance } from './getBalance';
import { getPresentValue } from './getPresentValue';

export const getBalanceByRate = (state) => {
  const initialCapital = Number(state.initialCapital);
  const annualContribution = Number(state.annualContribution);
  const years = Number(state.years);
  const interestRate = Number(state.alternativeRate);

  const balance = getBalance({
    initialCapital,
    annualContribution,
    years,
    rate: interestRate,
  });
  const balancePV = getPresentValue({
    futureValue: balance,
    years,
    inflation: state.inflationRate,
  });

  return { balance, balancePV };
};
