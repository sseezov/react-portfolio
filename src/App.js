import { Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Layout from './components/layout/layout'
import './App.scss'
import Contacts from './components/contact/contacts'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
