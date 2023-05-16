
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/shared/Nav'

function App() {

  return (
    <div className='max-w-[1280px] mx-auto relative'>
      <div className='sticky top-0 z-50'>
        <Nav></Nav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
