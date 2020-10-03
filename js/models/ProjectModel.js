import { Project } from "./entities/Project.js"

class ProjectModel {

    getProjects() {

        let arr = [
            new Project(1, "Проект 1", "Описание проекта 1."),
            new Project(2, "Проект 2", "Описание проекта 2."),
            new Project(3, "Проект 3", "Описание проекта 3."),
            new Project(4, "Проект 4", "Описание проекта 4.")
        ]

        return arr
    }

    getProjectById(id) {

        return new Project(3, "Проект 3", "Описание проекта 3.")

    }

    create() {
        alert("Саздание проекта")
    }

    edit(id) {
        alert("Редактирование проекта. id: " + id)
    }

    remove(id) {
        alert("Удаление проекта. id: " + id)
    }
}

const projectModel = new ProjectModel()
export default projectModel