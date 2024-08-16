import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GrLanguage } from "react-icons/gr";
// import { GrLanguage } from "react-icons/gr";


export const BookDetails = ()=>{

    const {id} = useParams();
    const [bookData, setBookData] = useState({});

    useEffect(()=>{
        const fetchBook = async ()=>{
            try{
                const response = await axios.get(`http://localhost:2000/api/book/getBook/${id}`);
                if(response){
                    setBookData(response.data.data);
                }
            }catch(err){
                console.log(err);
            }
        };
        fetchBook();
    },[id]);

    return(
        <div className="bg-zinc-900 min-h-screen">
            <div className="px-12 py-8 flex flex-col gap-8 md:flex-row">
                <div className="p-4 h-[50vh] bg-zinc-800 rounded flex items-center justify-center md:w-3/6 md:h-[88vh]">
                    <img src={bookData.url} alt="book-cover" className="h-[40vh] md:h-[70vh]" />
                </div>
                <div className="flex flex-col gap-2 md:w-3/6 md:px-4 md:gap-4">
                    <h1 className="text-xl text-zinc-300 font-semibold md:text-3xl">{bookData.title}</h1>
                    <p className="text-zinc-400 text-xs md:text-sm">by {bookData.author}</p>
                    <p className="text-zinc-500 text-l">{bookData.desc}</p>
                    <p className="flex gap-2 items-center justify-start text-zinc-400">
                        <GrLanguage/>{bookData.language}
                    </p>
                    <p className="text-zinc-300 font-semibold text-xl md:text-2xl">Price: {bookData.price}</p>
                </div>
            </div>
        </div>
    )
}