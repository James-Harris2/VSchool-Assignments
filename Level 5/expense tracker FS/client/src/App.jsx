
import './App.css'
import Header from './components/Header'
import Balance from './components/TransactionManager'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import NavBar from './components/NavBar'
import TransactionManager from './components/TransactionManager'
// import { BrowserRouter as  Routes, Route, BrowserRouter} from 'react-router-dom';
// import { expenseT_Router } from '../../routes/expenseT_Router'
// import { Expense } from '../../model/expenseT_'


function App(){
  return( 
  
<>
      <NavBar />
      <TransactionManager />
      <Header />
      
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      {/* <Routes>
          <Route path="NavBar"element={NavBar} />
          <Route path="Balance" element={Balance} />
          <Route path="TransactionList" element={TransactionList} />
      </Routes> */}
</>
    
      
    
 
  )
}



export default App
