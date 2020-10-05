import { CProject } from "./components/project/CProject.js"
import { CLogin } from "./components/login/CLogin.js"
import { CTasks } from "./components/tasks/CTasks.js"
import { COneTask } from "./components/oneTask/COneTask.js"
import { CEmployee } from "./components/employee/CEmployee.js"

export class Application {
    constructor() {
       this.login = new CLogin()
       this.project = new CProject()
       this.tasks = new CTasks()
       this.oneTask = new COneTask()
       this.employee = new CEmployee()
    }

    init() {
        this.login.init()
        this.project.init()
        this.tasks.init()
        this.oneTask.init()
        this.employee.init()
    }

    run() {
        
        webix.ui(this.config())
    }

    attachEvents() {
        this.project.attachEvents()
        this.login.attachEvents()
        this.tasks.attachEvents()
        this.oneTask.attachEvents()
        this.employee.attachEvents()
    }

    config() {
       return {
           rows: [
            {
				css: "webix_dark",
				view: "toolbar",
				height: 45,
				cols: [
                    { view: "button", id: "getBack1", label: "К проектам", hidden: "true", autowidth: true, width: 1 },
                    { view: "button", id: "getBack2", label: "К задачам", hidden: "true", autowidth: true, width: 1 },
					{ view: "label", id:"mainLabel", label: "Авторизация" },
                    { view: "template", role: "placeholder", width: 460, borderless: 1 },
					{ view: "template", id: "currentUser", template: "", role: "placeholder", width: 170, borderless: 1 },
                    { view: "button", id: "logout", label: "Выйти", hidden: "true", autowidth: true, width: 1 },
				]
			},
               this.login.config(),
               this.project.config(),
               this.tasks.config(),
               this.oneTask.config(),
           ]

       }
    }
}

webix.ready(() => {
    let app = new Application();
    app.init()
    app.run()
    app.attachEvents()
})