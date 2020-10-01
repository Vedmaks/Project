import { Application } from "../../index.js"

export function LoginView() {
  return {
    "rows": [
      {
        "autoheight": false,
        "view": "form",
        "padding": {
          "top": 200,
          "bottom": 200,
          "left": 400,
          "right": 400
        },
        "rows": [
          { "view": "text", "label": "Логин", "name": "name" },
          { "view": "text", "label": "Пароль", "name": "password" },
          { view: "button", id: "confirm", click: Application.prototype.run(1), css: "webix_primary", label: "Войти" }
        ]
      }
    ]
  }
}
