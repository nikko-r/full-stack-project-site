import "./Error404.scss";
import HazmatCatImage from "../../assets/images/HazmatCat.png";

function App() {
  return (
    <div id="error404">
      <img
        src={HazmatCatImage}
        alt="Error 404 page not found."
        width="auto"
        height="auto"
      />
    </div>
  );
}

export default App;
