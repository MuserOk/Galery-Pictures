import Header from "./header"
import MainIn from "./main-in"
function App() {
  

  return (
    <div className="flex flex-col px-3 pt-[5rem] w-full items-center border-2">
    <h1 className="pb-[3rem] text-5xl font-extrabold text-[#051c33]">SnapShot</h1>
    <Header/>
    <MainIn/>
    <footer>
      <h6>
        <a href="https://github.com/MuserOk/Galery-Pictures" className="">By<strong>MuserOk</strong></a>
      </h6>
    </footer>
      
    </div>
  )
}

export default App
