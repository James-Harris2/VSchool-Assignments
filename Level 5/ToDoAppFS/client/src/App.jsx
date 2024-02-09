
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Users from './Users'


function App() {

    return (
        <div>
          <h1> {Users} </h1>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' index element={<Users />} /> */}
                    <Route path='/' element={<CreateUser />} />
                    <Route path='/updateUser/:id' element={<UpdateUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

