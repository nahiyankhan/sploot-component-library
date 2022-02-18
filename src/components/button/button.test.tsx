import React from "react"
import { render } from "@testing-library/react"

import Button from "./button"

describe("Button", () => {
  test("Renders the Button component", () => {
    render(<Button label="Hello World!" />)
  })
})