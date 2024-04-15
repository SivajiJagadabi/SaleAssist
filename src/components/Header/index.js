import './index.css'
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";


const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <h1 className='app-name'>TANN TRIM</h1>
            </div>
            <ul className='nav-items'>
                <li className='nav-item'>Bags</li>
                <li className='nav-item'>Travel</li>
                <li className='nav-item'>Accesories</li>
                <li className='nav-item'>Gifting</li>
                <li className='nav-item'>Jewelery</li>

            </ul>
            <ul className='icons-container'>
                <li className='icon'><CiSearch/></li>
                <li className='icon'><FaUserAlt/></li>
                <li className='icon'><FaRegBookmark/></li>
                <li className='icon'><FaBagShopping/></li>
            </ul>
        

        </div>
    )
}


export default Header