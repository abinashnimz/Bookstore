export const Footer = ()=>{
    console.log(new Date().getFullYear())
    return(
        <div className="bg-zinc-800 text-white px-8 py-4 flex items-center justify-center">
            <h1>&copy; {new Date().getFullYear()}, Made for practice Nimz' Book Gallery</h1>
        </div>
    )
}