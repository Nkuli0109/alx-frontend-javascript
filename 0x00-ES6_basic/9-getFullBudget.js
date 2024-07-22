import createBudgetObject from './7-createBudgetObject';

export default function createFullBudgetObject(totalIncome, totalGDP, perCapitaIncome) {
  const budget = createBudgetObject(totalIncome, totalGDP, perCapitaIncome);
  const fullBudget = {
    ...budget,
    formatIncomeInDollars: (income) => `$${income}`,
    formatIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
