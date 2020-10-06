import { TasksView } from "./TasksView.js"
import { CTasksWindow } from "./tasksWindow/CTasksWindow.js"
import taskModel from "./../../models/TaskModel.js"
import { CEmployee } from "./../employee/CEmployee.js"
import { Task } from "./../../models/entities/Task.js"


export class CTasks {
    constructor() {
      this.view
      this.window
    }
    
    
    init() {
        this.window = new CTasksWindow()
        this.window.onChange = () => { this.refreshTable() }
        this.window.init()
    }

    config() {
        webix.ui( new CEmployee().config() )
        webix.ui(this.window.config())
        return TasksView()
    }

    attachEvents() {
        this.view = {
            datatable: $$('tasksDatatable'),
            create: $$('createTask'),
            remove: $$('removeTask'),
            getBack1: $$("getBack1"),
            getBack2: $$("getBack2"),
            tasks: $$("tasks"),
            oneTask: $$("oneTask")
        }

        //Добавление соббытий окна
        this.window.attachEvents()

        //Обновление таблицы при показе
        this.view.tasks.attachEvent("onViewShow", () => { this.refreshTable() });

        //Создание задачи
        this.view.create.attachEvent('onItemClick', () => {
            this.window.parse(new Task())
            this.window.createWindow()
        })

        //Удаление задачи
        this.view.remove.attachEvent('onItemClick', () => {
            let item = this.view.datatable.getSelectedItem()
            if (!item) {
                webix.message('Выделите строку')
                return
            }

            taskModel.getTaskById(item.id).then((task) => {
                this.window.parse(task)
                this.window.removeWindow()
            })
        })

        //Возвращение к задачам
        this.view.getBack2.attachEvent('onItemClick', () => {
            this.view.tasks.show()
            this.view.oneTask.hide()            
            this.view.getBack1.show()
            this.view.getBack2.hide()
        })

        //Переход к конкретной задаче
        this.view.datatable.attachEvent("onItemDblClick", (id) => {
            let item = this.view.datatable.getItem(id)
            this.view.oneTask.show()
            this.view.tasks.hide()
            this.view.getBack1.hide()
            this.view.getBack2.show()

            taskModel.getTaskById(item.id).then((task) => {
                this.view.oneTask.parse(task)
            })
        })

    }

    //Обновление таблицы
    refreshTable(tasks) {
        if (tasks) {
            this.view.datatable.clearAll()
            this.view.datatable.parse(tasks)
            return
        } else {
            taskModel.getTasksByProjectId(currentProject.id).then((tasks) => {
                this.view.datatable.clearAll()
                this.view.datatable.parse(tasks)
            })
        }
    }
    
}
