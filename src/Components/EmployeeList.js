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
                <td className="text-left py-6 px-4 whitespace-nowrap">
                  <div className="text- text-left text-gray-500">Samson</div>
                </td>
                <td className="whitespace-nowrap py-6 px-4">
                  <div className=" text-sm text-left text-gray-500">Moses</div></td>
                <td className="whitespace-nowrap py-6 px-4"><div className="text-sm text-left text-gray-500">callmeSammy@yahoo.com</div></td>
                <td className="whitespace-nowrap py-6 px-4 text-right">
                  <a href="#" className="text-sm text-purple-600 hover:text-purple-900  tracking-wider font-semibold mx-2">Edit</a>
                  <a href="#"  className="text-sm text-purple-600 hover:text-purple-900 tracking-wider font-semibold ">Delete</a>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
    )
  }

  export default EmployeeList