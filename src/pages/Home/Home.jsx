import "./Home.scss";
// import "../../animations/magneto.jsx";
// import "../../animations/magneto.scss";
import NavBar from "../../components/NavBar/NavBar";
import GeigerCounterImage from "../../assets/images/GeigerCounter.png";
import DataImage from "../../data/data.jpg";
import DataHourImage from "../../data/data_Hour.jpg";

function App() {
  return (
    <div id="home">
      <NavBar></NavBar>
      <div className="home-intro">
        <img
          src={GeigerCounterImage}
          alt="GMC 300E Plus Geiger Counter."
          width="auto"
          height="auto"
        />
        <p className="home-intro__description">
          Random numbers and computers don't go well together. Computers can't
          actually generate true random numbers, they rely on different things
          like timestamps and hardware id's. By using a Geiger counter we can
          measure radioactive decay which is truly random and generate a number
          from it.
        </p>
        <div className="green-line-div"></div>
        <h1>Background Radiation in London (CPM)</h1>
        <div className="home-image-data">
          <figure>
            <img src={DataImage} alt="Data" width="auto" height="auto" />
            <figcaption>Time in seconds</figcaption>
          </figure>
          <figure>
            <img
              src={DataHourImage}
              alt="Data hour"
              width="auto"
              height="auto"
            />
            <figcaption>Time in minutes</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default App;
