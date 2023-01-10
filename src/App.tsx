import { BrowserRouter } from "react-router-dom"
import { PagesRouter } from "./Router"

function App() {
  return (
    <BrowserRouter>
      <PagesRouter />
    </BrowserRouter>
  )
}

export default App