import { firestore } from "firebase"

export interface GetCollectionRequest {}

export interface GetCollectionResponse {
  collections: Array<string>
}
