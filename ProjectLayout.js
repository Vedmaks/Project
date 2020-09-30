let data = []

class CProjectWindow {
    
    init() {

        

        data = ProjectWindowModel.getProjects()

    }
}

class ProjectWindowModel {

    getProjects() {

		function newProject(id, name, desc) {
			return {id: id, name: name, desc: desc}
		}

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

class ProjectWindowView {

}

ProjectWindowModel.prototype.getProjects()

webix.ui({
	"id": "projectWindow",
	"rows": [
		{
			"css": "webix_dark",
			"view": "toolbar",
			"height": 45,
			"cols": [
				{ "view": "label", "label": "ПРОЕКТЫ" },
				{ "view": "template", "role": "placeholder", "width": 459, "borderless": 1 },
				{ "view": "template", "template": "Сотрудник Сотрудникович", "role": "placeholder", "width": 168, "borderless": 1 },
				{ "view": "button", "label": "Выйти", "autowidth": true, "width": 1 }
			]
		},
		{
			"css": "webix_dark",
			"view": "toolbar",
			"cols": [
				{ "view": "button", "label": "Создать", "height": 0 },
				{ "label": "Редактировать", "view": "button", "height": 0 },
				{ "label": "Удалить", "view": "button", "height": 0 }
			],
			"height": 45
		},
		{
			"columns": [
				{
					"id": "name",
					"name": "name",
					"header": "Название",
					"fillspace": false,
					"sort": "string",
					"hidden": false,
					"adjust": "data"
				},
				{ "id": "desc", "name": "desc", "header": "Описание", "sort": "string", "fillspace": true, "hidden": false }
			],
			"view": "datatable",
			"borderless": 0, data: ProjectWindowModel.prototype.getProjects()
		}
	]
})
