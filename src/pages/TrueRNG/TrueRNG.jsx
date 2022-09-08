import "./TrueRNG.scss";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";

function App() {
  // getCsvData();
  const [csvData, setCsvData] = useState([]);

  const getCsvData = async () => {
    const response = await fetch("http://localhost:8080/csvdatalast/5");
    let csvDataJson = await response.json();
    setCsvData(csvDataJson);
  };

  // let time = Date.now();
  // const updateCsvData = () => {
  //   time = Date.now();
  // };
  setInterval(getCsvData, 60000);
  // setInterval(updateCsvData, 1000);
  useEffect(() => {
    getCsvData();
  }, []);

  return (
    <div id="truerng">
      <NavBar></NavBar>
      <div className="truerng-results">
        <h1>PREVIOUS RESULTS</h1>
        <div className="truerng-main-results">
          <div className="truerng-result">
            <h2>DATE / TIME</h2>
            <p className="truerng-results__pdata">
              {csvData[0]?.dateTime?.replaceAll("T", " ")}
              <br></br>
              {csvData[1]?.dateTime?.replaceAll("T", " ")}
              <br></br>
              {csvData[2]?.dateTime?.replaceAll("T", " ")}
              <br></br>
              {csvData[3]?.dateTime?.replaceAll("T", " ")}
              <br></br>-{csvData[4]?.dateTime?.replaceAll("T", " ")}-
            </p>
          </div>
          <div className="truerng-result">
            <h2>mR/h</h2>
            <p className="truerng-results__pdata">
              {csvData[0]?.mrh}
              <br></br>
              {csvData[1]?.mrh}
              <br></br>
              {csvData[2]?.mrh}
              <br></br>
              {csvData[3]?.mrh}
              <br></br>-{csvData[4]?.mrh}-
            </p>
          </div>
          <div className="truerng-result">
            <h2>CPM</h2>
            <p className="truerng-results__pdata">
              {csvData[0]?.cpm}
              <br></br>
              {csvData[1]?.cpm}
              <br></br>
              {csvData[2]?.cpm}
              <br></br>
              {csvData[3]?.cpm}
              <br></br>-{csvData[4]?.cpm}-
            </p>
          </div>
        </div>
        <div>
          <h2>CPM HISTORY</h2>
          <p>{/* {csvData[0]._1s},{csvData[0]._2s},{csvData[0]._3s} */}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
