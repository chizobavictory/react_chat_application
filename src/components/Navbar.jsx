import { signOut } from "firebase/auth"
import { auth } from "../firebase"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chizoba Chat App</span>
      <div className="user">
        <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=619" alt="avatar" />
        <span>John</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar