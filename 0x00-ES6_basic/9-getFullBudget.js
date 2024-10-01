import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  
  const fullBudget = {
    ...budget, // Spread the budget object to include its properties
    getIncomeInDollars(income) { // Method to get income in dollars
      return `$${income}`; // Return the formatted string
    },
    getIncomeInEuros(income) { // Method to get income in euros
      return `${income} euros`; // Return the formatted string
    },
  };

  return fullBudget; // Return the fullBudget object
}