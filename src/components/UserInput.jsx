import { useState } from "react";

export const UserInput = ({onChangeInput,userInput}) => {

    const {initialInvestment,annualInvestment,expectedReturn,duration} = userInput;

  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input 
            type="number" 
            id="initialInvestment" 
            name="initialInvestment" 
            value={initialInvestment} 
            onChange={(event) => onChangeInput('initialInvestment',event.target.value)}/>
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input 
          type="number" 
          id="annualInvestment" 
          name="annualInvestment" 
          value={annualInvestment} 
          onChange={(event) => onChangeInput('annualInvestment',event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input 
          type="number" 
          id="expectedReturn" 
          name="expectedReturn" 
          value={expectedReturn} 
          onChange={(event) => onChangeInput('expectedReturn',event.target.value)}/>
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input 
          type="number" 
          id="duration" 
          name="duration" 
          value={duration} 
          onChange={ (event) => onChangeInput('duration',event.target.value)}/>
        </p>
      </div>
    </form>
  );
};
