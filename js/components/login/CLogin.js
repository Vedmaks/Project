import { LoginView } from "./LoginView.js"
import employeeModel from "./../../models/EmployeeModel.js"

export class CLogin {
    constructor() {
        this.view      
    }
    
    
    init() {
    
    }

    config() {
        return LoginView()
    }

    attachEvents() {
        this.view = {
            confirmLogin: $$('confirmLogin'),
            logout: $$('logout'),
        }

        this.view.confirmLogin.attachEvent('onItemClick', () => {

            if (this.verification()) {
                let id = $$("loginForm").elements.login.getValue();
                $$("login").hide()
                $$("project").show()
                $$("logout").show()
                $$("mainLabel").setHTML("ПРОЕКТЫ")
                employeeModel.getEmployeeById(id).then((employee) => {
                    window.currentUser = employee
                    //$$("currentUser").setHTML(`${currentUser.lastname} ${currentUser.firstname}`)
                })
                
                
                $$("loginForm").clear()
            } else {
                webix.message('Неверные данные!')
            }
            
        })

        this.view.logout.attachEvent('onItemClick', () => {
            $$("login").show()
            $$("project").hide()
            $$("tasks").hide()
            $$("oneTask").hide()
            $$("getBack1").hide()
            $$("getBack2").hide()
            $$("mainLabel").setHTML("Авторизация")
            $$("currentUser").setHTML("")
            $$("logout").hide()
            
        })
    }

    verification() {
        let login = $$("loginForm").elements.login.getValue();
        let password = $$("loginForm").elements.password.getValue();

        if (login == "admin" && password == "admin") {
            return true
        }
        return true
    }
}
