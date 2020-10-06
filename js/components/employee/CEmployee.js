import EmployeeView from "./EmployeeView.js"
import employeeModel from "./../../models/EmployeeModel.js"

export class CEmployee {
    constructor() {
        this.view      
    }
    
    
    init() {
        this.onChange = () => { this.refreshTable() }

    }

    config() {
        return EmployeeView()
    }

    attachEvents() {

        this.view = {
            window: $$('employeeWindow'),
            windowCancelBtn: $$('employeeWindowCancelBtn'),
            form: $$('employeeWindowForm'),
            addEmployee: $$('addEmployee'),
            deleteEmployee: $$('deleteEmployee'),
            addCombo: $$('addCombo'),
            deleteCombo: $$('deleteCombo'),
            datatable: $$("employeeDatatable")
        }

        this.refreshTable()

        $$("setEmployees").attachEvent('onItemClick', () => {
            this.view.window.show()
        })

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.form.clear()
            this.view.window.hide()
        })

        this.view.addEmployee.attachEvent('onItemClick', () => {

            let addedEmployee = this.view.addCombo.getValue()

            if(addedEmployee == "") {
                webix.message('Выберите сотрудника!')
            } else {
                employeeModel.addEmployee(addedEmployee, currentProject.id)
                this.view.addCombo.setValue("")
            }
            
            
        })

        this.view.deleteEmployee.attachEvent('onItemClick', () => {

            let item = this.view.datatable.getSelectedItem()
            if (!item) {
                webix.message('Выберите сотрудника!')
                return
            }

            employeeModel.getEmployeeById(item.id).then((employee) => {
                employeeModel.deleteEmployee(employee).then(() => {
                    this.onChange()
                })
            })

            //employeeModel.deleteEmployee(item.id, currentProject.id)            
        })

    }

    refreshTable(employees) {
        if (employees) {
            this.view.datatable.clearAll()
            this.view.datatable.parse(employees)
            return
        } else {
            employeeModel.getEmployees().then((employees) => {
                this.view.datatable.clearAll()
                this.view.datatable.parse(employees)
            })
        }
    }

}