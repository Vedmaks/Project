import { CProject } from "./components/project/CProject.js"
//import { CLogin } from "./components/login/CLogin.js"

export class Application {
    constructor() {
       // this.login = new CLogin()
        this.project = new CProject()
    }

    init() {
       // this.login.init()
        this.project.init()
    }

    run() {
        
        webix.ui(this.config())
    }

    attachEvents() {
        this.project.attachEvents()
        //this.login.attachEvents()
    }

    config() {
       return this.project.config()
    }
}

webix.ready(() => {
    let app = new Application();
    app.init()
    app.run()
    app.attachEvents()
})