import Search from "./search"
import MainIn from "./main-in"
export default function App() {

  return (
    <div className="flex flex-col px-3 pt-[5rem] w-full items-center m-auto max-w-250">
      <h1 className="titulo pb-[3rem] text-[4rem] font-extrabold text-[#051c33]">SnapShot</h1>
      <Search />
      <MainIn />
      <footer>
        <h6>
          <p className="py-6">Photos provided by <a className="text-blue-900" href="https://www.pexels.com"><strong>Pexels</strong></a>. Proyect by <a href="https://github.com/MuserOk/Galery-Pictures" className="text-indigo-600"><strong>MuserOk</strong></a></p>
        </h6>
      </footer>

    </div>
  )
}
