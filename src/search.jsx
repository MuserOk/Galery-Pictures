export default function Search() {
    return(
        <div className="flex w-full">
            <input type="text" placeholder="Search..." className="text-black bg-gray-200 border-y-2 border-l-2 border-gray-300 rounded-bl-md rounded-tl-md rounded- py-2 pl-4 w-full"/>
            <button type="button" className="bg-gray-50 border-2 border-gray-50 rounded-br-md rounded-tr-md px-2">
                <svg height="32" width="32">
                    <path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fill-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    )
};
