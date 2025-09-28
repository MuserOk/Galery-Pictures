import axios from "axios"
import { useEffect, useState } from "react"
import Search from "./search" //si se activa search se reemplazan las fotos.


export default function GetApi() {

  const [getApi, setGetApi] = useState([])
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    axios.get("https://api.pexels.com/v1/search?query=people", {
      headers: {
        Authorization: apiKey,
      },
    })
      .then(res => setGetApi(res.data.photos))
      .catch(err => console.error(err))
  }, [])
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-250">
        {getApi.map((photo) => (
          <img className="w-58 h-42 rounded" key={photo.id} src={photo.src.large} alt={photo.photographer} />))}
      </ul>
    </div>
  )
};
