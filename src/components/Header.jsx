import investmentLogo from '../assets/investment-calculator-logo.png'

export const Header = () => {
  return (
    <header id='header'>
        <img src={investmentLogo} alt='Invesment Logo' />
        <h1>Investment Calculator</h1>
    </header>
  )
}
