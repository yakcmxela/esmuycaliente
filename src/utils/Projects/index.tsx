import { Interactor } from "./interactor"
import { useInteractor } from "./node_modules/shared/hooks"
import React, { createContext } from "react"

export const FirebaseProjects = createContext(null)
export const FirebaseUser = createContext(null)

export const Firebase = ({ children }: any) => {
  const interactor: any = useInteractor(Interactor, ["user"])
  const currentUser = interactor.projects.onyx.auth()
  console.log(currentUser)
  return (
    <FirebaseUser.Provider value={interactor.user}>
      <FirebaseProjects.Provider value={interactor.projects}>
        {children}
      </FirebaseProjects.Provider>
    </FirebaseUser.Provider>
  )
}
