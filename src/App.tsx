import React from "react"
import "./app.less"
import image from "./wall.jpg"
import { ClickCounter } from "./ClickCounter"

const App = () => (
  <>
    <h1>
      Hello rock Ninja
      {process.env.NODE_ENV}
      {process.env.name}
    </h1>
    <img src={image} alt="logo" width="500" height="500" />
    <ClickCounter />
  </>
)

export default App
