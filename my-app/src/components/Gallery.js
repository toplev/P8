import "../styles/Gallery.css"
import { aptoList } from "../datas/aptoList"
import { Link } from "react-router-dom"

function Gallery() {
  return (
    <div className="gallerybackgroud">
      {aptoList.map((apto) => (
        <div key={apto.id} className="apto-list">
          <div>
            <Link to={`/Apto/${apto.id}`}>
              <img src={apto.cover} alt="Kasa Logo" className="gradient-img" />
            </Link>
          </div>
          <div className="Gallery2">{apto.title}</div>
        </div>
      ))}
    </div>
  )
}
export default Gallery
