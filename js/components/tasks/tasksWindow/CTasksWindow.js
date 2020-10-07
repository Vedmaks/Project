import TasksWindowView from "./TasksWindowView.js"
import taskModel from "./../../../models/TaskModel.js"

export class CTasksWindow {
    constructor() {
        this.view
    }

    init() { }

    config() {
        return TasksWindowView()
    }

    attachEvents() {

        this.view = {
            window: $$('tasksWindow'),
            windowConfirmBtn: $$('tasksWindowConfirmBtn'),
            windowCancelBtn: $$('tasksWindowCancelBtn'),
            form: $$('tasksWindowForm'),
        }

        this.view.windowConfirmBtn.attachEvent('onItemClick', () => {+
            taskModel.create(this.fetch()).then(() => {
                this.view.window.hide()
                this.onChange()
            })
        })

        this.view.windowCancelBtn.attachEvent('onItemClick', () => {
            this.view.window.hide()
        })
    }

    fetch() {
        return this.view.form.getValues()
    }

    parse(values) {
        this.view.form.setValues(values)
    }
}