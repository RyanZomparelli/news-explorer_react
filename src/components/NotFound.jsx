import "../blocks/notFound.css";

// ASSETS
import notFoundIcon from "../assets/not-found_v1.svg";

const NotFound = () => {
  return (
    <section className="not-found">
      <img
        src={notFoundIcon}
        alt="Not found icon."
        className="not-found__image"
      />
      <h3 className="not-found__title">Nothing Found</h3>
      <p className="not-found__paragraph">Sorry, but nothing matched</p>
      <p className="not-found__paragraph">your search terms.</p>
    </section>
  );
};

export default NotFound;
