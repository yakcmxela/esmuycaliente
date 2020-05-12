import { GetCollectionResponse } from "./models"
import * as admin from "firebase-admin"

export const getCollections = (
  callback: (response: GetCollectionResponse) => void
) => {
  const response: GetCollectionResponse = { collections: [] }
  admin
    .firestore()
    .listCollections()
    .then((collections) => {
      collections.forEach((collection: admin.firestore.CollectionReference) => {
        response.collections.push(collection.id)
      })
    })
    .catch((error) => {
      throw new Error(error)
    })
  callback(response)
}
