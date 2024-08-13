import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="h-[88vh] bg-zinc-900 items-center justify-center flex flex-col md:flex-row">
            <div className="w-full flex flex-col items-center justify-center px-8 lg:w-3/6 lg:items-start">
                <h1 className="text-4xl font-semibold text-yellow-100 text-center lg:text-6xl lg:text-left">Discover Your Next Great Read</h1>
                <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">Uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books</p>
                <div className="mt-8">
                    <Link to="/all-books" className="text-yellow-100 text-xl font-semibold border border-yellow-100 rounded-full p-4">Discover Books</Link>
                </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center lg:w-3/6 lg:h-[100%]">
                <img src="./hero.png" alt="hero-image"/>
            </div>
        </div>
    )
}