import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="AIML"
          title="AI&ML"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="WEBDEV"
          title="Web Development"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="blockchain"
          title="Blockchain"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="NLP"
          title="NLP"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
