class ProjectModel {

    Project(id, name, desc) {
        return {id: id, name: name, desc: desc}
    }

    getProjects() {

        let arr = [
            this.Project(1, "Проект 1", "Описание проекта 1."),
            this.Project(2, "Проект 2", "Описание проекта 2."),
            this.Project(3, "Проект 3", "Описание проекта 3."),
            this.Project(4, "Проект 4", "Описание проекта 4.")
        ]

        return arr
    }

    getProjectById(id) {

        return this.newProject(3, "Проект 3", "Описание проекта 3.")

    }
}

const projectModel = new ProjectModel()
export default projectModel