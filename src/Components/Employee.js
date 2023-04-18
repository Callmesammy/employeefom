import React, { useState } from 'react'
import EmployeeService from '../Service/EmployeeService';

function Employee ()  {
    
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange =(e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});

    }

    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error)
        });

    }
    return (
    <div className="flex intems-center max-w-2xl mx-auto shadow border-b ">
        <div className="px-8 py-8 ">
            <div className="font-thin text-2xl tracking-wider">
        <h1> Employee Form</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className=" block text-sm  text-gray-600 my-1"> First Name </label>
                    <input type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e)=>handleChange(e)}
                    className="w-96 h-8 border text-sm px-2 text-gray-700" ></input>
            </div>
            <div className="items-center justify-center w-full my-4">
                <label className="block text-sm  text-gray-600  w-full my-1"> Last Name</label>
                <input type="text"
                name="lastName" 
                value={employee.lastName}
                onChange={(e)=>handleChange(e)}
                className=" text-sm px-2 w-96 h-8 border text-gray-700"></input>
            </div>
            <div className="items-center w-full my-1 justify-center">
                <label className="text-sm text-gray-600 block my-1">Email</label>
                <input type="text"
                name="email"
                value={employee.email}
                onChange={(e)=>handleChange(e)}
                className="w-96 h-8 border text-sm px-2 text-gray-700"></input>
            </div>
            <div className="items-center w-full my-1 justify-center">
            <button onClick={saveEmployee} className="rounded bg-green-600 text-white font-semibold px-4 py-2 my-4 hover:bg-green-900">Save</button>
            <button className="rounded bg-red-600 font-semibold text-white px-4 py-2 my-4 hover:bg-red-900 mx-2">Clear</button>
        </div>
        </div>
    </div>
  );
}

export default Employee