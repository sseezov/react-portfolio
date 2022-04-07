import {
  faFacebook,
  faTelegram,
  faVk,
} from '@fortawesome/free-brands-svg-icons'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../animatedLetters/animatedLetters'
import './about.scss'
import MyPic from './../../assets/images/UTgWXhK6jQg.jpg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="left-logo">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                ' ',
                'О',
                ' ',
                'с',
                'е',
                'б',
                'е',
              ]}
              idx={12}
            />
          </h1>
          <p style={{ fontSize: '19px' }}>
            Я занимаюсь фронтенд-разработкой в течение года. Помимо дефолтных
            Javascript, HTML и CSS, мне интересен Typescript, React и Redux.
            Знаком с bootstrap, css grid, node.js, в Реакте пользуюсь хуками.
          </p>
          <p style={{ fontSize: '15px' }}>
            Мои проекты вы можете посмотреть на гитхабе в папке "done". Я
            занимался созданием социальной сети, написал CLI, которая выводит
            данные о погоде, в зависимости от полученных данных, написал
            лендинговую страницу для храма и этот сайт-портфолио. Остальное, а
            это большая часть написанного кода - просто практика в создании
            отдельных интерфейсов и алгоритмов. В ходе учебы я закончил
            множество модулей на freecodecamp.org, модули theodinproject.com,
            задачи на ts.checkio и т.п.
          </p>
          <p style={{ fontSize: '15px' }}>
            Теперь кратко о себе: мне 31 год, у меня 2 высших очных образования
            и аспирантура за плечами. Восемь лет своей жизни я занимался наукой,
            преимущественно философией, и преподаванием, но теперь
            заинтересовался IT, хотя и здесь мне видится философия.
            Программирование для меня - это демиургическая практика, где цифры
            посредствуют логосу, а вечное солнце ноэматического открывается в
            диджитализации, понимаемой как переоткрытие пифагорейских практик.
          </p>
        </div>
        <div className="img-block">
          <img className="MyPic" src={MyPic} alt="это я" />
        </div>

        <div className="contacts">
          <h1 className="about-header">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['К', 'о', 'н', 'т', 'а', 'к', 'т', 'ы']}
              idx={15}
            />
          </h1>

          <ul>
            <li>
              <h2>
                <a
                  href="https://vk.com/sseezov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faVk} color="#4d4d4e" />
                  vk.com/sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="https://t.me/sseezov" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                  @sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="mailto: sseezov@mail.ru">
                  <FontAwesomeIcon icon={faAt} color="#4d4d4e" />
                  sseezov@mail.ru
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                  href="https://www.facebook.com/sseezov/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                  facebook.com/sseezov
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="tel:+79515808134" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faPhone} color="#4d4d4e" />+ 7 951 580
                  8134
                </a>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
