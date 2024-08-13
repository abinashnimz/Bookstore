export const Navbar = ()=>{

    const links=[
        {title: "Home", link:"/"},
        {title: "About", link:"/about-us"},
        {title: "Books", link:"/all-books"},
        {title: "Cart", link:"/cart"},
        {title: "Profile", link:"/profile"},
    ];
    console.log(links)

    return(
        <div className="bg-zinc-800 text-white px-8 py-4 flex justify-between">
            <div className="flex gap-4 items-center"> 
                <img className="h-10" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="" />
                <h1 className="text-2xl">Nimz' Book Gallery</h1>
            </div>
            <div className="flex gap-4 items-center text-xl">
                <div className="flex gap-4 items-center">
                    {links.map((item, ind)=>(
                        <div key={ind} className="hover:text-blue-400 transition-all duration-300">{item.title}</div>
                    ))}
                </div>
                <div className="flex gap-4">
                    <button className="border border-indigo-400 px-2 py-1 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300">LogIn</button>
                    <button className="bg-indigo-400 px-2 py-1 rounded hover:bg-white hover:text-zinc-500 transition-all duration-300">SignIn</button>
                </div>
            </div>
        </div>
    )
}