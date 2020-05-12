import * as Models from "./models"
import * as Worker from "./worker"

export class Interactor {
  caliente: firebase.app.App | null = null
  user: User = {
    uid: "",
    permissions: {},
  }

  constructor() {
    this._ = this._.bind(this)

    Worker._(this._)
  }

  _(response: Models.InitResponse) {
    this.caliente = response.caliente
  }
}
