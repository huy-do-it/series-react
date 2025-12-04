import PropTypes from "prop-types";

import logo from "./assets/logo-tuhoc.png";

import { data } from "../data.js";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React Tuhoc.cc</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

function MainContent({image, title, desc}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

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
