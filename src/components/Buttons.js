import satData from "./satData";
import styles from './styling.css'

const Buttons = (filterByType, setSat, displaySats) => {
  {displaySats.map((sat,id) => {
    return (
      <div className="flex-container">
      <button onClick={() => filterByType(sat)} key = {id}>{sat} Orbit</button>
      </div>
  );
  })}
  return (
    <div>
    <button onClick={setSat(satData)}></button>
    </div>
  )
};

export default Buttons;