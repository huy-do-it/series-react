import { data } from "../data.js";
import Header from "./Components/Header/Header.jsx";
import MainContent from "./Components/MainContent/MainContent.jsx";
import TabButton from "./Components/TabButton.jsx";

function App() {
function handleSelect() {
    alert("Nút bấm được clicked!");
}
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent{...data[0]} />
            <MainContent{...data[1]} />
            <MainContent{...data[2]} />
            <MainContent{...data[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
            {/* <TabButton batky="Components" /> */}
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
