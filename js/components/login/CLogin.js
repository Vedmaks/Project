import { LoginView } from "./LoginView.js"

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
        }

        this.view.confirmLogin.attachEvent('onItemClick', () => {

            if (this.verification()) {
                $$("login").hide()
                $$("project").show()
                $$("logout").show()
                $$("mainLabel").setHTML("ПРОЕКТЫ")
                $$("currentUser").setHTML($$("loginForm").elements.login.getValue())
                $$("loginForm").clear()
            } else {
                webix.message('Неверные данные!')
            }
            
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
