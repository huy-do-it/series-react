import { useState } from "react"; 
import { data } from "../data.js";
import Header from "./Components/Header/Header.jsx";
import MainContent from "./Components/MainContent/MainContent.jsx";
import TabButton from "./Components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("vui lòng click vào nút");

  // console.log("app được gọi");
  // let tabContent = "Nội dung được hiển thị";
  
  // console.log(`Ngoài hàm: ${tabContent}`);
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
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
            <TabButton onSelect={() => handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
            {/* <TabButton batky="Components" /> */}
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  );
}

export default App;
