import "./node_modules/@testing-library/jest-dom/extend-expect"
import { Firebase, FirebaseProjects, FirebaseUser } from "./index"
import Enzyme from "enzyme"
import React from "react"

const { shallow } = Enzyme

describe("<Firebase /> Component", () => {
  const component = shallow(<Firebase />)
  it("Should pass the firebase user as a prop", () => {
    const props = component.find(FirebaseUser.Provider).props()
    console.log(props)
    expect(props.value).toHaveProperty("uid")
  })
  it("Should pass project-1 project as a prop", () => {
    const props = component.find(FirebaseProjects.Provider).props()
    expect(props).toHaveProperty("value.project-1")
  })
  it("Should pass 'katy-hearn-api' project as a prop", () => {
    const props = component.find(FirebaseProjects.Provider).props()
    expect(props).toHaveProperty("value.katy")
  })
})
