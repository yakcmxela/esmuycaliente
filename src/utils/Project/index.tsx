import { Interactor } from "./interactor"
import { useInteractor } from "../../shared/hooks"
import React, { createContext } from "react"

export const FirebaseProjects = createContext(null)
export const FirebaseUser = createContext(null)

export const Firebase = ({
  children,
  project,
}: {
  children: React.ReactChildren
  project: string
}) => {
  const interactor: any = useInteractor(Interactor, ["user"])
  const currentUser = interactor.projects[project].auth()
  console.log(currentUser)
  return (
    <FirebaseUser.Provider value={interactor.user}>
      <FirebaseProjects.Provider value={interactor.projects}>
        {children}
      </FirebaseProjects.Provider>
    </FirebaseUser.Provider>
  )
}
