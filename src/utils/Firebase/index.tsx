import { Interactor } from "./interactor"
import { useInteractor } from "../../shared/hooks"
import { createContext } from "react"

export const FirebaseProjects = createContext(null)
export const FirebaseUser = createContext(null)

const Firebase = ({ children }: any) => {
  const interactor: any = useInteractor(Interactor, ["caliente"])
  console.log(interactor)
  return (
    <FirebaseUser.Provider value={interactor.user}>
      <FirebaseProjects.Provider value={interactor}>
        {children}
      </FirebaseProjects.Provider>
    </FirebaseUser.Provider>
  )
}

export default Firebase
