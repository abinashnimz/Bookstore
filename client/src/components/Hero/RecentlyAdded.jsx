import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";


export const RecentlyAdded = () => {

    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("http://localhost:2000/api/book/recentBooks");
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
        <div className="mt-4 px-8 pb-8">
            <h2 className="text-2xl text-yellow-100 font-semibold md:text-3xl">Recently Added Books</h2>
            <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {bookData && bookData.map((item, ind) => (
                    <div key={ind}>
                        <BookCard props={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}