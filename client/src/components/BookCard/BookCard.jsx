import { Link } from "react-router-dom"

export const BookCard = ({props})=>{
    return(
        <>
            <Link>
                <div className="bg-zinc-800 p-4 rounded flex flex-col gap-2 text-white">
                    <div className="bg-zinc-900 flex items-center justify-center rounded">
                        <img src={props.url} alt="book_img" className="h-[25vh]"/>
                    </div>
                    <h3 className="text-l font-semibold">{props.title}</h3>
                    <p className="text-sm text-zinc-300">by {props.author}</p>
                    <p className="text-l font-semibold text-zinc-200">Rs. {props.price}</p>
                </div>
            </Link>
        </>
    )
}