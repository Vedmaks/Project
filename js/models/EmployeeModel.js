import { Employee } from "./entities/Employee.js"

class EmployeeModel {

    getEmployees() {

        let arr = [
            new Employee(1, "Иванов", "Иван", "Иванович", "Программист"),
            new Employee(2, "Петров",  "Петр", "Петрович", "Тимлид"),
            new Employee(3, "Васильев", "Василий", "Васильевич", "Программист")
        ]

        return arr
    }

    getEmployeesByProjectId(id) {

        let arr = [
            new Employee(1, "Иванов", "Иван", "Иванович", "Программист"),
            new Employee(2, "Петров",  "Петр", "Петрович", "Тимлид"),
            new Employee(3, "Васильев", "Василий", "Васильевич", "Программист")
        ]

        return arr
    }

    getEmployeeById(id) {

        return new Employee(2, "Петр", "Петрович", "Петров", "Тимлид")

    }

    addEmployee(employeeId, projectId) {
        alert("Добавление сотрудника id: " + employeeId + " в проект id: " + projectId)
    }

    deleteEmployee(employeeId, projectId) {
        alert("Удаление сотрудника id: " + employeeId + " из проекта id: " + projectId)
    }
}

const employeeModel = new EmployeeModel()
export default employeeModel