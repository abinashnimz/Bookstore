import { Link } from "react-router-dom";

export const Navbar = ()=>{

    const links=[
        {title: "Home", link:"/"},
        // {title: "About", link:"/about-us"},
        {title: "Books", link:"/all-books"},
        {title: "Cart", link:"/cart"},
        {title: "Profile", link:"/profile"},
    ];
    return(
        <div className="bg-zinc-800 text-white px-8 py-4 flex justify-between">
            <div className="flex gap-4 items-center"> 
                <img className="h-10" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="" />
                <h1 className="text-2xl">Nimz' Book Gallery</h1>
            </div>
            <div className="flex gap-4 items-center text-xl">
                <div className="flex gap-4 items-center">
                    {links.map((item, ind)=>(
                        <Link to={item.link} className="hover:text-blue-500 transition-all duration-300" key={ind}>{item.title}</Link>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Link to={"/sign-in"} className="border border-indigo-400 px-2 py-1 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300">LogIn</Link>
                    <Link to={"/sign-up"} className="bg-indigo-400 px-2 py-1 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300">SignUp</Link>
                </div>
            </div>
        </div>
    )
}