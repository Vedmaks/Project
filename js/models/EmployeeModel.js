import { Employee } from "./entities/Employee.js"

class EmployeeModel {

    constructor() {
        this.data = new Map();
        this.data.set(1, new Employee(1, "Иванов", "Иван", "Иванович", "Программист", "ivanich"));
        this.data.set(2, new Employee(2, "Петров",  "Петр", "Петрович", "Тимлид", "petrovich"));
        this.data.set(3, new Employee(3, "Васильев", "Василий", "Васильевич", "Программист", "vasilich"));
    }

    getEmployees() {

        return new Promise((resolve, reject) => {
            let employees = []

            for (let employee of this.data.values()) {
                employees.push(employee)
            }

            resolve(employees)
        })
    }

    getEmployeesByProjectId(projectId) {

        return new Promise((resolve, reject) => {
            let employees = []

            for (let employee of this.data.values()) {

                employees.push(employee)
            }

            resolve(employees)
        })
    }

    getEmployeeById(id) {

        return new Promise((resolve, reject) => {
            resolve(this.data.get(id))
        })

    }

    addEmployee(employeeId, projectId) {
        alert("Добавление сотрудника id: " + employeeId + " в проект id: " + projectId)
    }

    deleteEmployee(employee) {
        return new Promise((resolve, reject) => {
            this.data.delete(employee.id)
            resolve()
        })
    }
}

const employeeModel = new EmployeeModel()
export default employeeModel