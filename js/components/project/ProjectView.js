export function ProjectView() {
	return {
		id: "project",
		rows: [
			{
				css: "webix_dark",
				view: "toolbar",
				height: 45,
				cols: [
					{ view: "label", label: "ПРОЕКТЫ" },
					{ view: "template", role: "placeholder", width: 459, borderless: 1 },
					{ view: "template", template: "Сотрудник Сотрудникович", role: "placeholder", width: 168, borderless: 1 },
					{ view: "button", label: "Выйти", autowidth: true, width: 1 }
				]
			},
			{
				css: "webix_dark",
				view: "toolbar",
				id: "CRUDToolbar",
				cols: [
					{ view: "button", id: "createBtn", label: "Создать", height: 0 },
					{ label: "Редактировать", id: "editBtn", view: "button", height: 0 },
					{ label: "Удалить", id: "removeBtn", view: "button", height: 0 }
				],
				height: 45
			},
			{
				columns: [
					{ id: "name", name: "name", header: "Название", fillspace: false, sort: "string",
						hidden: false,
						adjust: "data"
					},
					{ id: "desc", name: "desc", header: "Описание",  fillspace: true, sort: "string",
					hidden: false }
				],
				view: "datatable", id : "projectDatatable", select: true,
				borderless: 0, data: [
					{id: 1, name: "testProject1", desc: "testDesc1"},
					{id: 2, name: "testProject2", desc: "testDesc2"},
					{id: 3, name: "testProject3", desc: "testDesc3"},
					{id: 4, name: "testProject4", desc: "testDesc4"}

				],
			}
		]

	}
}
