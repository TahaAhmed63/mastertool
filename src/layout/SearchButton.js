import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";
import { Link } from "react-router-dom";
const SearchButton = ({ searchToggle }) => {
  return (
    <Link
      to="#"
      className="metaportal_fn_search hold"
      onClick={(e) => {
        e.preventDefault();
        searchToggle(true);
      }}
    >
      <span className="icon">
        <img src="/svg/loupe.svg" alt="" className="fn__svg" />
      </span>
    </Link>
  );
};
export default connect(null, { searchToggle })(SearchButton);
