import { ProjectView } from "./ProjectView.js"
import { CProjectWindow } from "./projectWindow/CProjectWindow.js"
import projectModel from "./../../models/ProjectModel.js"

export class CProject {
    constructor() {
      this.view
      this.window
    }
    
    
    init() {
        this.window = new CProjectWindow()
        this.window.init()
    }

    config() {
        webix.ui(this.window.config())
        return ProjectView()
    }

    attachEvents() {
        this.view = {
            datatable: $$('projectDatatable'),
            create: $$('createBtn'),
            remove: $$('removeBtn'),
            edit: $$('editBtn'),
            logout: $$('logout')
        }

        this.window.attachEvents()

        this.view.create.attachEvent('onItemClick', () => {
            this.window.createWindow()
        })

        this.view.edit.attachEvent('onItemClick', () => {
            let item = this.view.datatable.getSelectedItem()

            if (!item) {
                webix.message('Выделите строку')
                return
            }
            this.window.editWindow(item.id)

            $$('projectName').setValue(item.name)
            $$('projectDesc').setValue(item.desc)
            
        })

        this.view.remove.attachEvent('onItemClick', () => {
            let item = this.view.datatable.getSelectedItem()
            if (!item) {
                webix.message('Выделите строку')
                return
            }
            this.window.removeWindow(item.id)
            $$('projectName').setValue(item.name)
            $$('projectDesc').setValue(item.desc)
            $$('projectName').disable()
            $$('projectDesc').disable()
        })

        $$("getBack1").attachEvent('onItemClick', () => {
            $$("project").show()
            $$("tasks").hide()
            $$("getBack1").hide()
            $$("mainLabel").setHTML("ПРОЕКТЫ")
        })

        this.view.datatable.attachEvent("onItemDblClick", (id) => {
            let item = this.view.datatable.getItem(id)
            window.currentProject = {id: item.id};
            $$("tasks").show()
            $$("project").hide()
            $$("getBack1").show()
            $$("mainLabel").setHTML("Задачи: " + item.name)
        })
    }
}
