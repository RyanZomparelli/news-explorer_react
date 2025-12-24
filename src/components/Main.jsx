import "../blocks/main.css";

//COMPONENTS
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

const Main = ({ openModal, activeModal }) => {
  return (
    <main className="main">
      <Header openModal={openModal} activeModal={activeModal} />
      <About />
      <Footer />
    </main>
  );
};

export default Main;
