import Input from "../../components/Input";
import "./uni.css";

const Uni = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title uni-title">University</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={"MAKAUT"}
          title="MAKAUT"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={"CU"}
          title="Calcutta"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={"JU"}
          title="Jadavpur"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={"Burdwan"}
          title="Burdwan"
          name="test2"
        />
      </div>
    </>
  );
};

export default Uni;
