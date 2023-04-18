  import React from 'react'

  const EmployeeList = () => {
    return (
      <div className="container my-8 justify-center mx-auto mt-4 items-center">
            <div className=" h-12 ">
        <button className="rounded bg-gray-600 text-sm font-semibold px-4 py-2 items-center text-white ">Add Employee</button>
        <div className="flex shadow border-b mt-2">
          <table className="w-full">
            <thead className="bg-gray-100">
            <tr>
              <th className="text-sm text-gray-500 px-4 py-2 tracking-wider text-left uppercase">First Name</th>
              <th className="text-sm text-gray-500 px-4 py-2  tracking-wider text-left uppercase">Last Name</th>
              <th className="text-sm text-gray-500 px-4 py-2  tracking-wider text-left uppercase"> Email</th>
              <th className="text-sm text-gray-500 px-4 py-2 tracking-wider text-right uppercase"> Actions</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samson</td>
                <td>Moses</td>
                <td>callmeSammy@yahoo.com</td>
                <td>*</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
    )
  }

  export default EmployeeList