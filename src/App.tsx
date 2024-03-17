import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//Pages
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'

//Layout
import RootLayout from './layout/RootLayout'
import HelpLayout from './layout/HelpLayout'
import NotFound from './pages/NotFound'
import CareersLaouy from './layout/CareersLaouy'

import Qqlayout from './layout/Qqlayout'
import Careers, { careersLoader } from './pages/Carreers/Careers'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='qq' element={<Qqlayout />} >

      </Route>
      <Route path='careers' element={<CareersLaouy />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (


    <div className="App">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
