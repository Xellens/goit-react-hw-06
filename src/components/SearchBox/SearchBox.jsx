import s from "./SearchBox.module.css";
import PropTypes from "prop-types";

function SearchBox({ value, onChange }) {
  return (
    <div className={s.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" value={value} onChange={onChange} />
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
