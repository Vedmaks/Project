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
            logout: $$('logout'),
        }

        this.view.confirmLogin.attachEvent('onItemClick', () => {

            if (this.verification()) {
                $$("login").hide()
                $$("project").show()
                $$("logout").show()
                $$("mainLabel").setHTML("ПРОЕКТЫ")
                $$("currentUser").setHTML($$("loginForm").elements.login.getValue())
                window.currentUser = { id: 1 }
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
