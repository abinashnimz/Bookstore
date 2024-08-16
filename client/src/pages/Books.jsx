import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../components/BookCard/BookCard";

export const Books = () => {

    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("http://localhost:2000/api/book/getBooks");
                console.log(response);
                if (response) {
                    setBookData(response.data.data);
                }
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }
        fetch();
    }, []);

    return (
        <div className="bg-zinc-900 min-h-screen">
            <div className="pt-4 px-8 pb-8">
                <h2 className="text-2xl text-yellow-100 font-semibold md:text-3xl">All Books</h2>
                <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {bookData && bookData.map((item, ind) => (
                        <div key={ind}>
                            <BookCard props={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}