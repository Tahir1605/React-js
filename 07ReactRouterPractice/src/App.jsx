import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element:
          <div>
            <Navbar />
            <Home />
            <Footer />
          </div>
      },
      {
        path: '/about',
        element:
          <div>
            <Navbar />
            <About/>
            <Footer/>
          </div>
      },
      {
        path: '/contact',
        element:
          <div>
            <Navbar />
            <Contact/>
            <Footer />
          </div>
      },
      {
        path: '/github',
        element:
          <div>
            <Navbar />
            <Github/>
            <Footer />
          </div>
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
