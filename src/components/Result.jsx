import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export const Result = ({ userInput }) => {
  const calculateInvestment = calculateInvestmentResults(userInput);
  const initialInvestment = calculateInvestment[0].valueEndOfYear - 
  calculateInvestment[0].interest - 
  calculateInvestment[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculateInvestment.map((item) => {
            const totalInterest = item.valueEndOfYear - 
            item.annualInvestment * item.year - 
            initialInvestment;
            const totalAmountInvested = item.valueEndOfYear - totalInterest;
          return (
            <tr key={item.year}>
              <td className="center">{item.year}</td>
              <td className="center">
                {formatter.format(item.valueEndOfYear)}
              </td>
              <td className="center">{formatter.format(item.interest)}</td>
              <td className="center">{formatter.format(totalInterest)}</td>
              <td className="center">{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
