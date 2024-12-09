import './Header.css';
import {FaMagnifyingGlass, FaBell, FaCircleUser} from 'react-icons/fa6';
import {MdArrowDropDown} from 'react-icons/md';

function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <img
                    src="https://cdn.prod.website-files.com/655d9d0f63f0529b22c94af6/65cbf0474a42367f8a54dcda_MR_Horizontal_ring_whitetext.svg"
                    className="logo"
                />
                <div className="header-menu">
                    <ul>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                    </ul>
                </div>
                <div className="acc-menu">
                    <FaMagnifyingGlass />
                    <FaBell />
                    <FaCircleUser />
                </div>
            </div>
            <div className="page-info">
                <h1 className="title">Movies</h1>
                <button className="genre-pick">
                    <p>Genres</p>
                    <MdArrowDropDown />
                </button>
            </div>
        </div>
    );
}

export default Header;
