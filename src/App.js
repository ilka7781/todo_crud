import './App.css';
import Header from "./components/header/header";
import AuthRoutes from "./components/routes/AuthRoutes";
import LayoutRoutes from "./components/routes/LayoutRoutes";
import React from 'react'
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
            <Header/>
            <Routes>
                <Route path='/*' element={<LayoutRoutes/>}/>
                <Route path='/auth/*' element={<AuthRoutes/>}/>
            </Routes>
    </div>
  );
}

export default App;
