import { connect } from "react-redux";
import Search from "../components/Search";
import { searchs, getRecentSearches } from "../actions/Action";

const mapStateToProps = state => {
  return {
    searchResult: state.Reducer.searchResult,
    searchLoading: state.Reducer.searchLoading,
    recentSearch: state.Reducer.recentSearch,
    recentSearchLoading: state.Reducer.recentSearchLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchResults: string => {
      return dispatch(searchs(string));
    },
    getRecentSearches: () => {
      return dispatch(getRecentSearches());
    }
  };
};
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
