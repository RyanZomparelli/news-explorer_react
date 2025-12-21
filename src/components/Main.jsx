import "../blocks/main.css";

//COMPONENTS
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <About />
      <Footer />
    </main>
  );
};

export default Main;
