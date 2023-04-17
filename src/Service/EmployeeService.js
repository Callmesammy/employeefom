import axios from "axios"

const EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {
saveEmployee(employee){

      return axios.post(EMPLOYEE_API_URL, employee)
    }
}
export default new EmployeeService();