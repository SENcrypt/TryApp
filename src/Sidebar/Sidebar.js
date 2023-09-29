import Category from "./Category/Category";
import Uni from "./Uni/uni";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        </div>
        <Category handleChange={handleChange} />
        <Uni handleChange={handleChange} />
        
      </section>
    </>
  );
};

export default Sidebar;