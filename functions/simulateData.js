import { getPresentValue, getBalanceByRate } from '../functions';

export const simulateData = (state) => {
  const initialCapital = Number(state.initialCapital);
  const annualContribution = Number(state.annualContribution);
  const years = Number(state.years);

  const totalContribution = initialCapital + annualContribution * years;

  const totalContributionPV = getPresentValue({
    futureValue: totalContribution,
    years,
    inflation: state.inflationRate,
  });

  const alternative1 = getBalanceByRate({
    ...state,
    alternativeRate: state.alternative1Rate,
  });
  const alternative2 = getBalanceByRate({
    ...state,
    alternativeRate: state.alternative2Rate,
  });

  return { totalContribution, totalContributionPV, alternative1, alternative2 };
};
