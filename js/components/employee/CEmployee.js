import EmployeeView from "./EmployeeView.js"
import employeeModel from "./../../models/EmployeeModel.js"

export class CEmployee {
    constructor() {
        this.view      
    }
    
    
    init() {

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

            employeeModel.deleteEmployee(item.id, currentProject.id)
            this.view.deleteCombo.setValue("")
            
            
        })

    }


}