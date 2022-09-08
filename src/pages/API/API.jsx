import "./API.scss";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  return (
    <div id="api">
      <NavBar></NavBar>
      <div className="api-usage">
        <div className="api-usage__section">
          <h1>USER SUBMISSIONS API</h1>
          <div className="api-usage-content">
            <br></br>
          </div>
        </div>
        <div className="api-usage__section">
          <h1>TRUE RNG</h1>
          <div className="api-usage-content">
            GET all recorded data localhost:8080/csvdata<br></br>GET last
            recorded data localhost:8080/csvdatalast<br></br>GET last x amount
            of recorded data localhost:8080/csvdatalast/{"{x}"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
