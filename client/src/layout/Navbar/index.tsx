import { useState } from "react"
import { getUser, clearStorage } from '../../services/user'
import "./styles.css"

function Logout() {
  clearStorage();
  window.location.reload();
}

export const Navbar = () => {

  const [activeLink, setActiveLink] = useState(1)


  const user = getUser()!;

  return (
    <nav className="container-fluid">
      <ul><li><a href="/" className='contrast' ><strong>Affiliated</strong></a></li></ul>
      <ul>
        <li><a className={`${activeLink === 1 ? "active" : ""}`} onClick={() => setActiveLink(1)} href="/">Form</a></li>
        <li><a className={`${activeLink === 2 ? "active" : ""}`} onClick={() => setActiveLink(2)} href="/#/sales">Sales</a></li>
      </ul>
      <ul>

        <li><div>{user?.profile?.username}</div></li>
        <li>
          <button className='outline contrast' onClick={Logout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
