import { ProjectView } from "./ProjectView.js"
import { CProjectWindow } from "./projectWindow/CProjectWindow.js"

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
            edit: $$('editBtn')
        }

        this.window.attachEvents()

        this.view.create.attachEvent('onItemClick', () => {
            this.window.switch("create")
        })

        this.view.edit.attachEvent('onItemClick', () => {
            if (!this.view.datatable.getSelectedItem()) {
                webix.message('Выделите строку')
                return
            }
            this.window.switch("edit")
        })

        this.view.remove.attachEvent('onItemClick', () => {
            if (!this.view.datatable.getSelectedItem()) {
                webix.message('Выделите строку')
                return
            }
            this.window.switch("remove")
        })
    }
}
