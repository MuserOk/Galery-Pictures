export default function Search() {
    return(
        <form className="flex justify-center items-center md:w-[356px] lg:w-108">
            <input type="text" placeholder="Search..." className="pl-4 w-44 sm:w-92  text-black bg-gray-200 border-[2px_0px_2px_2px] border-gray-300 rounded-tl-lg rounded-bl-lg py-2"/>
            <button type="submit" className="cursor-pointer w-12 sm:w-26  bg-gray-50 hover:bg-gray-100 active:bg-gray-200 border-[2px_2px_2px_0px] border-gray-50 active:border-gray-200 rounded-br-lg rounded-tr-lg px-2 py-1 place-items-center">
                <svg height="32" width="32">
                    <path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff"></path>
                </svg>
            </button>
        </form>
    )
};


//https://www.pexels.com/api/documentation/#photos-search 

//https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature
//Ocean , Tigers , Pears