import "../styles/Collapse.css"
import { useState } from "react"
import arrow from "../images/arrow.png"
import { aptoList } from "../datas/aptoList"
import { useParams } from "react-router-dom"

function Text2() {
  const idinlist = useParams("id").id
  const idnow = aptoList.filter((data) => data.id === idinlist)
  const [descriptionState, setDescriptionState] = useState(false)
  const [equipmentState, setEquipmentState] = useState(false)

  function toggleDescription() {
    setDescriptionState((prevState) => !prevState)
  }

  function toggleEquipment() {
    setEquipmentState((prevState) => !prevState)
  }

  return (
    <div className="aboutmain2">
      <div className="aboutmenu2">
        <div
          className={`title2${descriptionState ? " active" : ""}`}
          onClick={toggleDescription}
        >
          <div className="title2">Description</div>
          <span>
            <img
              className={
                descriptionState ? "arrow arrow_up" : "arrow arrow_down"
              }
              src={arrow}
              alt="showmore"
            />
          </span>
        </div>
        {descriptionState && (
          <div className="accordion">
            <div className="accordion-section">
              <div>{idnow[0].description}</div>
            </div>
          </div>
        )}
      </div>
      <div className="aboutmenu2">
        <div
          className={`title2${equipmentState ? " active" : ""}`}
          onClick={toggleEquipment}
        >
          <div className="title2">Equipment</div>
          <span>
            <img
              className={equipmentState ? "arrow arrow_up" : "arrow arrow_down"}
              src={arrow}
              alt="showmore"
            />
          </span>
        </div>
        {equipmentState && (
          <div className="accordion">
            <div className="accordion-section">
              <ul>
                {idnow[0].equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Text2
