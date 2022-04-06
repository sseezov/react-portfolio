import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/Contact'
import Layout from './components/layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
