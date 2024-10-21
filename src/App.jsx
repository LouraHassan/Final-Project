import { RouterProvider } from 'react-router-dom'
import Router from './Routers/Routers'
import './App.css'

function App() {

  return (
    <>
               <RouterProvider router={Router}></RouterProvider>

    </>
  )
}

export default App
