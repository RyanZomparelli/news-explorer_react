import "../blocks/notFound.css";

// ASSETS
import notFoundIcon from "../assets/not-found_v1.svg";

const NotFound = ({ children }) => {
  return (
    <section className="not-found">
      <img
        src={notFoundIcon}
        alt="Not found icon."
        className="not-found__image"
      />
      {children}
    </section>
  );
};

export default NotFound;
