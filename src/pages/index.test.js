import React from "react"
import renderer from "react-test-renderer"

import IndexPage from './index'

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<IndexPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})