import logo from "./logo.svg";
import "./App.css";

function App() {
  function myFunction() {
    var copyText = document.querySelector(".myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    const textValue = copyText.value.toUpperCase();

    navigator.clipboard.writeText(textValue);

    console.log(textValue);
  }

  return (
    <div className="App">
      <input type="text" className="myInput" />
      <button onClick={myFunction} className="copyButton">Copy text</button>
    </div>
  );
}

export default App;
