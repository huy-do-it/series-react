import { data } from "../data.js";
import Header from "./Components/Header/Header.jsx";
import MainContent from "./Components/MainContent/MainContent.jsx";

function App() {
  console.log(data[0]);

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
            {/* <MainContent
              image={data[0].image}
              title={data[0].title}
              desc={data[0].desc}
            />
            <MainContent
              image={data[1].image}
              title={data[1].title}
              desc={data[1].desc}
            />
            <MainContent
              image={data[2].image}
              title={data[2].title}
              desc={data[2].desc}
            />
            <MainContent
              image={data[3].image}
              title={data[3].title} 
              desc={data[3].desc}
            /> */}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
