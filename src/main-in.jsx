import GetApi from "./get-api"

export default function MainIn() {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row md:w-[50%] justify-center items-center gap-4 py-7 text-white w-full ">
                <button className="filtros bg-[#051c33] py-0.5 rounded-xs w-full md:w-24">Mountain</button>
                <button className="filtros bg-[#051c33] py-0.5 rounded-xs w-full md:w-24">Beaches</button>
                <button className="filtros bg-[#051c33] py-0.5 rounded-xs w-full md:w-24">Birds</button>
                <button className="filtros bg-[#051c33] py-0.5 rounded-xs w-full md:w-24">Food</button>
            </div>
            <p className="subTitulo">Birds Pictures</p>
            <div>
                <GetApi />
            </div>
        </div>
    )
};
