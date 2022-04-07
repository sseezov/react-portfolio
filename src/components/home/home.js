import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters/animatedLetters'
import Logo from './logo/logo'
import './home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    'С',
    'е',
    'р',
    'г',
    'е',
    'й',
    ' ',
    'С',
    'и',
    'з',
    'о',
    'в',
    ',',
  ]
  const jobArray = [
    'в',
    'е',
    'б',
    '-',
    'р',
    'а',
    'з',
    'р',
    'а',
    'б',
    'о',
    'т',
    'ч',
    'и',
    'к',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Я</span>
            <span className={letterClass}> — </span>

            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={12}
            />
          </h1>
          <h2>
            Junior frontend developer:
            <br /> Typescript / React / Redux
          </h2>
          <Link to="/about" className="flat-button">
            НАПИСАТЬ МНЕ
          </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
