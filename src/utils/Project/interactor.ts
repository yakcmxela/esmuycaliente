import * as Entities from "./node_modules/shared/entities"
import * as Models from "./models"
import * as Worker from "./worker"

export class Interactor {
  projects: Entities.Projects = {}
  user: Entities.User = {
    uid: "",
    permissions: {},
  }

  constructor() {
    this._ = this._.bind(this)

    Worker._(this._)
  }

  _(response: Models.InitResponse) {
    this.projects = response.projects
  }
}
