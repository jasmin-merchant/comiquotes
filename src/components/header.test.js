import React from "react"
import renderer from "react-test-renderer"

import Header from './header.component'

describe("Header", () => {
  it("renders header correctly", () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})