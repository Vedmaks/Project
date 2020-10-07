import { OneTaskView } from "./OneTaskView.js"
import taskModel from "./../../models/TaskModel.js"

export class COneTask {
    constructor() {
      this.view
    }
    
    
    init() {

    }

    config() {
        return OneTaskView()
    }

    attachEvents() {

        this.view = {
            getBack1: $$("getBack1"),
            getBack2: $$("getBack2"),
            cancel: $$("oneTaskCancel"),
            confirm: $$("oneTaskConfirm"),
            delete: $$("oneTaskDelete")
        }

        // возвращение при отмене
        this.view.cancel.attachEvent('onItemClick', () => {
            this.getBack()
        })


        // Удаление задачи
        this.view.delete.attachEvent('onItemClick', () => {
            taskModel.delete(this.fetch()).then(() => {
               this.getBack()
            })
        })

        //Изменение задачи
        this.view.confirm.attachEvent('onItemClick', () => {
            taskModel.update(this.fetch()).then(() => {
                this.getBack()
            })
           
        })
    }

    // возвращение к задачам
    getBack() {
        $$("tasks").show()
        $$("oneTask").hide()
        this.view.getBack2.hide()
        this.view.getBack1.show()
    }

    // получение данных из формы
    fetch() {
        return $$("oneTask").getValues()
    }
}