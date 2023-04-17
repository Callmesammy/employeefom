import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Employee from './Employee';
import Navbar from './Navbar';
import EmployeeList from '../EmployeeList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Routes index element = {<EmployeeList/>}></Routes>
      <Routes path= "/" element={<EmployeeList/>}></Routes>
      <Routes path= "employeeList" element={<EmployeeList/>}></Routes>
      <Routes path= "employee" element={<Employee/>}></Routes>
    </Routes>
    </BrowserRouter>
    
    </>
  );
  
}

export default App;
