import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { id: 0, text: 'Home', path: '/' },
  { id: 1, text: 'PC Games', path: '/games/pc' },
  { id: 2, text: 'Browser Games', path: '/games/browser' },
  { id: 3, text: 'All Games', path: '/games/all' },
]

const activeLinkStyle = 'text-secondary'
const linkStyle = 'hover:text-secondary transition-all'
const navSmallStyle =
  'absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-dark text-light flex flex-col justify-center items-center text-4xl space-y-5 md:hidden transform -translate-x-full transition-transform duration-500'
const navSmallToggledStyle =
  'absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-dark text-light flex flex-col justify-center items-center text-4xl space-y-5 md:hidden transition-transform duration-500'

const Navbar = () => {
  const [toggled, setToggled] = useState(false)

  const onHamburgerClick = (): void => setToggled((prevState) => !prevState)

  return (
    <div className="bg-dark shadow-xl relative">
      <div className="container mx-auto px-2 md:px-0 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-5xl text-secondary font-macondo">
          MMOWorld
        </a>

        {/* Nav */}
        <nav className="hidden space-x-4 text-light md:flex">
          {links.map(({ id, text, path }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive ? activeLinkStyle : linkStyle
              }
            >
              {text}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Btn */}
        <button
          className={
            toggled
              ? 'hamburger-btn toggled md:hidden'
              : 'hamburger-btn md:hidden'
          }
          onClick={onHamburgerClick}
        >
          <span className="line-top"></span>
          <span className="line-middle"></span>
          <span className="line-bottom"></span>
        </button>

        {/* Nav - Small screen */}
        <nav className={toggled ? navSmallToggledStyle : navSmallStyle}>
          {links.map(({ id, text, path }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive ? activeLinkStyle : linkStyle
              }
              onClick={onHamburgerClick}
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
