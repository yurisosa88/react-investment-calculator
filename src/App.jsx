import { useState } from "react"
import { Header } from "./components/Header"
import { Result } from "./components/Result"
import { UserInput } from "./components/UserInput"

function App() {
  const [invesmentValues,setInvesmentValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration : 8
});

const inputIsValid = invesmentValues.duration >= 1;

function handleInputChange(inputIdentifier,newValue){
  setInvesmentValues( (prevVal) => {
      return {
          ...prevVal,
          [inputIdentifier]: +newValue
      }
  });
}

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleInputChange} userInput={invesmentValues} />
      {/* {inputIsValid && <Result userInput={invesmentValues} />}
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>} */}
      {inputIsValid ? <Result userInput={invesmentValues} /> : 
      <p className="center">Please enter a duration greater than zero</p> }
    </>
  )
}

export default App
