import { connect } from "react-redux";
import Search from "../components/Search";
import { searchs } from "../actions/Action";

const mapStateToProps = state => {
  return {
    searchResult: state.Reducer.searchResult,
    searchLoading: state.Reducer.searchLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchResults: string => {
      return dispatch(searchs(string));
    }
  };
};
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
