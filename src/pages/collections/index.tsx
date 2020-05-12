import { useContext, useEffect } from "react"
import { FirebaseProjects } from "utils/Firebase"
import { Interactor } from "./interactor"
import { useInteractor } from "../../shared/hooks"

const Collections = ({}) => {
  const project = useContext(FirebaseProjects)
  const interactor: any = useInteractor(Interactor, ["collections"])
  console.log(interactor)
  useEffect(() => {
    console.log(project)
  }, [project])
  return (
    <section>
      <div></div>
    </section>
  )
}

export default Collections
