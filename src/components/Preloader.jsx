import "../blocks/preloader.css";

const Preloader = ({ children, type }) => {
  return (
    <div className="circle-preloader">
      <div className="circle-preloader__animation"></div>
      {children}
    </div>
  );
};

export default Preloader;
