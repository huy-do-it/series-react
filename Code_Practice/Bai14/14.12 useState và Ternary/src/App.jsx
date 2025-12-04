import { useState } from "react";
import { myData, EXAMPLES } from "../data.js";
import Header from "./Components/Header/Header.jsx";
import MainContent from "./Components/MainContent/MainContent.jsx";
import TabButton from "./Components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let content = <p>Vui lòng click vào nút để chọn 1 chủ đề</p>;
  if (selectedTopic) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
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
            <MainContent{...myData[0]} />
            <MainContent{...myData[1]} />
            <MainContent{...myData[2]} />
            <MainContent{...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            {/* <TabButton batky="Components" /> */}
          </menu>
          {/* cách 1: dùng toán tử 3 ngôi */}
          {/* {!selectedTopic ? (<p>Vui lòng click vào nút để chọn 1 chủ đề</p>) :
            (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>)
          } */}
          {/* cách 2: dùng toán tử AND(&&)*/}
          {/* {!selectedTopic && <p>Vui lòng click vào nút để chọn 1 chủ đề</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/* Cách 3 */}
          {content}
        </section>
      </main>
    </>
  );
}

export default App;
