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
        $$("oneTaskCancel").attachEvent('onItemClick', () => {
            $$("tasks").show()
            $$("oneTask").hide()
            $$("getBack2").hide()
            $$("getBack1").show()
        })

        $$("oneTaskConfirm").attachEvent('onItemClick', () => {
            taskModel.edit( $$("oneTaskId").getValue() )
            $$("tasks").show()
            $$("oneTask").hide()
            $$("getBack2").hide()
            $$("getBack1").show()
        })
    }


}