import { EXAMPLES } from "../../../data.js";
import TabButton from "../TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { useState } from "react";

export default function Examples() {
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
      <Section title="Examples" id="examples" className="demo-class" moi="test">
        <Tabs
          // ButtonsContainer="div"
          button={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}>Components</TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}>Props</TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}>State</TabButton>
            </>
          }>
          {content}
        </Tabs>
      </Section>
    </>
  );
}

