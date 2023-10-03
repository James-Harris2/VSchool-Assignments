import ReactDOM from 'react-dom/client'
// import sortByMultipleCriteria from './sortByMultipleCriteria'
import App from './App'
import { ApiProvider } from './ApiContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ApiProvider>
    {/* <sortByMultipleCriteria/> */}
    <App/>
    
   
    </ApiProvider> 
  
)
