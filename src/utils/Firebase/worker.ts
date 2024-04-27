import firebase from "firebase"
import * as Models from "./models"

const app = process.env.FIREBASE_CONFIG

export const _ = async (
  callback: (response: Models.InitResponse | APICallableError) => void
) => {
  const caliente = firebase.initializeApp(app)
  return caliente
    .firestore()
    .collection("config")
    .get()
    .then((snapshot) => {
      return callback({
        caliente: caliente,
      })
    })
    .catch((error) => {
      return callback({
        code: error.code,
        description: error.message,
      })
    })
}
