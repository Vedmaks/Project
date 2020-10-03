import { TasksView } from "./TasksView.js"
import { CTasksWindow } from "./tasksWindow/CTasksWindow.js"
import taskModel from "./../../models/TaskModel.js"

export class CTasks {
    constructor() {
      this.view
      this.window
    }
    
    
    init() {
        this.window = new CTasksWindow()
        this.window.init()
    }

    config() {
        webix.ui(this.window.config())
        return TasksView()
    }

    attachEvents() {
        this.view = {
            datatable: $$('tasksDatatable'),
            create: $$('createTask'),
            remove: $$('removeTask'),
            logout: $$('logout')
        }

        this.window.attachEvents()

        this.view.create.attachEvent('onItemClick', () => {
            this.window.createWindow()
        })

        this.view.remove.attachEvent('onItemClick', () => {
            let item = this.view.datatable.getSelectedItem()
            if (!item) {
                webix.message('Выделите строку')
                return
            }
            this.window.removeWindow(item.id)
            $$('taskName').setValue(item.name)
            $$('taskDesc').setValue(item.desc)
            $$('taskName').disable()
            $$('taskDesc').disable()
        })

        $$("getBack2").attachEvent('onItemClick', () => {
            $$("tasks").show()
            $$("oneTask").hide()
            $$("getBack2").hide()
            $$("getBack1").show()
        })

        this.view.datatable.attachEvent("onItemDblClick", (id) => {
            let item = this.view.datatable.getItem(id)
            $$("oneTask").show()
            $$("tasks").hide()
            $$("getBack1").hide()
            $$("getBack2").show()
            $$('oneTaskId').setValue(item.id)
            $$('oneTaskName').setValue(item.name)
            $$('oneTaskDesc').setValue(item.desc)
            $$('oneTaskStatus').setValue(item.status)
            $$('oneTaskImportance').setValue(item.importance)
            $$('oneTaskEmployee').setValue(item.employee)
            $$('oneTaskPlanH').setValue(item.planH)
            $$('oneTaskFactH').setValue(item.factH)
        })
    }
}