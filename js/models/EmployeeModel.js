import { Employee } from "./entities/Employee.js"

class EmployeeModel {

    getEmployees() {

        let arr = [
            new Employee(1, "Иванов", "Иван", "Иванович", "Программист", "ivanich"),
            new Employee(2, "Петров",  "Петр", "Петрович", "Тимлид", "petrovich"),
            new Employee(3, "Васильев", "Василий", "Васильевич", "Программист", "vasilich")
        ]

        return arr
    }

    getEmployeesByProjectId(id) {

        let arr = [
            new Employee(1, "Иванов", "Иван", "Иванович", "Программист", "ivanich"),
            new Employee(2, "Петров",  "Петр", "Петрович", "Тимлид", "petrovich"),
            new Employee(3, "Васильев", "Василий", "Васильевич", "Программист", "vasilich")
        ]

        return arr
    }

    getEmployeeById(login) {

        return new Employee(2, "Петров",  "Петр", "Петрович", "Тимлид", "petrovich")

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