import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";



export const Navbar = () => {

    const links = [
        { title: "Home", link: "/" },
        // {title: "About", link:"/about-us"},
        { title: "Books", link: "/all-books" },
        { title: "Cart", link: "/cart" },
        { title: "Profile", link: "/profile" },
    ];

    const [toggleMenu, setToggleMenu] = useState("hidden");

    return (
        <>
            <nav className="relative bg-zinc-800 text-white px-8 py-4 flex justify-between w-full z-20">
                <Link to="/" className="flex gap-4 items-center">
                    <img className="h-8 md:h-10" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="" />
                    <h1 className="text-l md:text-2xl">Nimz' Book Gallery</h1>
                </Link>
                <div className="flex gap-4 items-center text-xl">
                    <div className="hidden md:flex gap-4 items-center">
                        {links.map((item, ind) => (
                            <Link to={item.link} className="hover:text-blue-500 transition-all duration-300" key={ind}>{item.title}</Link>
                        ))}
                    </div>
                    <div className="hidden md:flex gap-4">
                        <Link to={"/sign-in"} className="border border-indigo-400 px-2 py-1 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300">SignIn</Link>
                        <Link to={"/sign-up"} className="bg-indigo-400 px-2 py-1 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300">SignUp</Link>
                    </div>
                    <button className="md:hidden text-2xl hover:text-zinc-400 transition-all duration-300" onClick={()=> toggleMenu ==="hidden" ? setToggleMenu("block") : setToggleMenu("hidden")}>
                        <CiMenuBurger />
                    </button>
                </div>
            </nav>
            <div className={`${toggleMenu} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-10 flex flex-col items-center justify-center gap-6 text-2xl font-semibold`}>
                {links.map((item, ind) => (
                    <Link to={item.link} className="text-white hover:text-blue-500 transition-all duration-300" key={ind} onClick={()=> toggleMenu ==="hidden" ? setToggleMenu("block") : setToggleMenu("hidden")}>{item.title}</Link>
                ))}
                <Link to={"/sign-in"} className="border border-indigo-400 px-4 py-2 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300" onClick={()=> toggleMenu ==="hidden" ? setToggleMenu("block") : setToggleMenu("hidden")}>SignIn</Link>
                <Link to={"/sign-up"} className="bg-indigo-400 px-4 py-2 rounded text-zinc-800 hover:bg-white transition-all duration-300" onClick={()=> toggleMenu ==="hidden" ? setToggleMenu("block") : setToggleMenu("hidden")}>SignUp</Link>
            </div>
        </>

    )
}