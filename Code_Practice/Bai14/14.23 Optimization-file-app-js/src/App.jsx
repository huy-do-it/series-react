import Header from "./Components/Header/Header.jsx";
import MainContents from "./Components/MainContent/MainContents.jsx";
import Examples from "./Components/MainContent/Examples.jsx";
function App() {

  return (
    <>
      <Header />
      <main>
        <MainContents />
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
