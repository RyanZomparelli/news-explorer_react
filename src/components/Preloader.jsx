import "../blocks/preloader.css";

const Preloader = ({ children, type }) => {
  return (
    <>
      {type === "search" ? (
        <div className="circle-preloader">
          <div className="circle-preloader__animation"></div>
          {children}
        </div>
      ) : (
        <div className="circle-preloader__overlay">
          <div className="circle-preloader__animation circle-preloader__animation_type_global"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
