import { Firebase, FirebaseProjects, FirebaseUser } from "./index"
import Enzyme from "enzyme"
import React from "react"
import { app } from "firebase"

const { shallow } = Enzyme

describe("<Firebase /> Component", () => {
  const component = shallow(<Firebase />)
  const props = component.find(FirebaseProjects.Provider).props()
  it("Should instantiate Caliente Firebase project", () => {
    // Casting app as any because I hate squiggly red lines
    if (props.value) {
      expect(props.value.caliente).toBeInstanceOf((app as any).App)
      expect(props.value.instantiate).toBe(true || false)
    }
  })
})
