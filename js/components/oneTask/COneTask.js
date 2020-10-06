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
            confirm: $$("oneTaskConfirm")
        }

        //Возвращение к задачам
        this.view.cancel.attachEvent('onItemClick', () => {
            $$("tasks").show()
            $$("oneTask").hide()
            this.view.getBack2.hide()
            this.view.getBack1.show()
        })

        //Изменение задачи
        this.view.confirm.attachEvent('onItemClick', () => {
            taskModel.update(this.fetch()).then(() => {
                $$("tasks").show()
                $$("oneTask").hide()
                this.view.getBack2.hide()
                this.view.getBack1.show()
            })
           
        })
    }

    fetch() {
        return $$("oneTask").getValues()
    }
}