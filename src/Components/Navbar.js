import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <div className='nav'>
      <div className='left_side'>
        <h1>useContext</h1>
 
      </div>
      <div className='right_side'>
      <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/about'>About</Link>
        
      </div>
    </div>
  )
}

export default Navbar
