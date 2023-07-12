import { useRef, useState } from "react"
import { links, social } from "./data"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [sowLinks, setSowLinks] = useState(false)
  const ulRef = useRef()
  const handleShowLins = () => setSowLinks(!sowLinks)

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="./src/image/logo.png" alt="ForEach" className="logo" />
          <button className="nav-toggle" onClick={handleShowLins}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          style={{
            height: sowLinks
              ? ulRef.current.getBoundingClientRect().height
              : "0",
          }}
        >
          <ul className="links" ref={ulRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
