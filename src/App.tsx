import { RouterProvider } from "react-router-dom"
import BaseLayout from "./components/shared/BaseLayout"
import router from "./router"


function App() {

  return (
    <BaseLayout>
      <RouterProvider router={router} />
    </BaseLayout>
  )
}

export default App
