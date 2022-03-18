import { Link } from "react-router-dom"

const Navbar = ({user}) =>{

    return(
        <div className="navbar">
            <span className="logo"> <Link className="link" to='/'>Pz Hub</Link></span>

            {user ? (
                <ul className="list">
                <li className="listItem">
                    <img src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="avatar"/>
                </li>
                <li className="listItem">Pz Hub</li>
                <li className="listItem">Logout</li>
            </ul>
            ) : (
                <Link className="link" to='/login'>Login</Link>
            )}
            
        </div>
    )
}

export default Navbar