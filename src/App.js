import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Employee from './Components/Employee';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route index element={<EmployeeList/>}/>
    <Route path="/" element={<EmployeeList/>}/><Route/>
    <Route path = "/employeelist" element={<EmployeeList/>}/> 
    <Route path="/employee" element={<Employee/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
  
}

export default App;
