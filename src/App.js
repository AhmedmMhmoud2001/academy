import './App.css';
import prelouder from "./pleload.gif"
import HomeN from "./HomeN/HomeN.js"
// preload clock Function

function App() {

  function myFunction (){
    const timer = setTimeout(() => {
     
      document.getElementById("preloud").style.display = "none";
      document.getElementById("HomeN").style.display = "block";

    }, 3000);
    return () => clearTimeout(timer);
   }

  return (
    
    <div className="App">
    {/*start preload clock */}
      <div className="preloud1" onLoad={myFunction}>
        <div className="preloud" id="preloud">
          <img src={ prelouder } alt="preloud"/>
        </div>
      </div>
    {/*End preload clock */}
      <div id="HomeN" className="HomeN">
        <HomeN/>
      </div>
    </div>
  );
}

export default App;
