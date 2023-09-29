import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Projects" />
          <Button onClickHandler={handleClick} value="AIML" title="AI & ML" />
          <Button onClickHandler={handleClick} value="WEBDEV" title="Web Development" />
          <Button onClickHandler={handleClick} value="blockchain" title="Blockchain" />
          <Button onClickHandler={handleClick} value="NLP" title="NLP" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
