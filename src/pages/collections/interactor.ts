import { firestore } from "firebase-admin"
import { GetCollectionResponse } from "./models"
import * as Worker from "./worker"

export class Interactor {
  collections: Array<string> = []
  constructor() {
    this.getCollections = this.getCollections.bind(this)
    Worker.getCollections(this.getCollections)
  }
  getCollections(response: GetCollectionResponse) {
    this.collections = response.collections
  }
}
