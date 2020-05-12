import firebase from "firebase"
import * as Models from "./models"

const app = {
  apiKey: "AIzaSyCYKGLQ4cBqmjs_BE-0GnjVGhge8yw-XxU",
  authDomain: "caliente-430b8.firebaseapp.com",
  databaseURL: "https://caliente-430b8.firebaseio.com",
  projectId: "caliente-430b8",
  storageBucket: "caliente-430b8.appspot.com",
  messagingSenderId: "675128592808",
  appId: "1:675128592808:web:5a90a9727e8c8735a9359d",
}

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
