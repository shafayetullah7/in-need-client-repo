import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navitems = <>
        <li><a>Home</a></li>
        <li><a>Item 3</a></li>
    </>;

    const navigate = useNavigate();

    return (
        <div className="navbar px-5 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-600 text-lg font-semibold">
                    {navitems}
                </ul>
                </div>
                <a className="font-bold cursor-pointer active:scale-95 duration-150 normal-case text-3xl tracking-widest text-[#FF6D60]">In-Need</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-600 text-lg font-semibold">
                {navitems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="outline-none border border-[#FF6D60] px-4 py-2 rounded-md font-bold text text-[#FF6D60]" onClick={()=>navigate('/login')}>Login</button>
            </div>
        </div>
    );
};

export default Nav;