import Game from "../src/Components/Game/Game";
import "./App.css";

function App(props) {
  const rMadrid = {
    name: "Real Madrid",
    logoSrc: "https://www.freeiconspng.com/uploads/real-madrid-logo-png-5.png",
  };

  const barCa = {
    name: "Barcelona",
    logoSrc: "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png",
  };

  const manUtd = {
    name: "Manchester United",
    logoSrc:
      "https://i.pinimg.com/originals/1f/7f/09/1f7f09801fa9bacd049ada1587246edc.png",
  };

  const manCity = {
    name: "Manchester City",
    logoSrc:
      "https://lh4.googleusercontent.com/proxy/G1nv6vioMC-k6aD84IancDNczLKlDSKKzeUuaQbhF2NvM_Y3eWZ27WYEyts1LgBiy3ApjVMW2hUgzLy82uJpwCgWplOWj8jq6E_KYlfUjjL70HLHU3LDnUfIYEMDsUVmYZkishF8d5k=s0-d",
  };

  return (
    <div className="App">
      <Game venue="Nou Camp Stadium" homeTeam={barCa} visitingTeam={rMadrid} />
      <Game
        venue="Old Trafford Stadium"
        homeTeam={manUtd}
        visitingTeam={manCity}
      />
    </div>
  );
}
export default App;
