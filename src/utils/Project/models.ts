import * as Entities from "./node_modules/shared/entities"

export interface InitResponse {
  projects: Entities.Projects
}

export interface InitUser {
  user: Entities.User
}
