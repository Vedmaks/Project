class ProjectWindowModel {

    newProject(id, name, desc) {
        return {id: id, name: name, desc: desc}
    }

    export getProjects() {

        

        

        let arr = [
            newProject(1, "Проект 1", "Описание проекта 1."),
            newProject(2, "Проект 2", "Описание проекта 2."),
            newProject(3, "Проект 3", "Описание проекта 3."),
            newProject(4, "Проект 4", "Описание проекта 4.")
        ]



        return arr
    }

    getProjectById(id) {

    }
}