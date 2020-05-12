import "./node_modules/@testing-library/jest-dom/extend-expect"
import { Interactor } from "./interactor"
import { app } from "firebase"

describe("<Firebase /> Interactor", () => {
  const { projects } = new Interactor()
  Object.keys(projects).forEach((projectId) => {
    it(`Should instantiate Firebase project ${projectId}`, () => {
      // Casting firebase app as any is a bad solution, but I hated the red line.
      expect(projects[projectId]).toBeInstanceOf((app as any).App)
    })
  })
})
