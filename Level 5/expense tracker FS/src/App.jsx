
import './App.css'
import AddTransaction from './components/AddTransaction'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'

function App(){
  return( 
    <>
      <Header />
      <AddTransaction />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </>
  )
}



export default App
