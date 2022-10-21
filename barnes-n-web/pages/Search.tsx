import Header from "./components/Header";

const Search = () => {
  return (
    <div className="page">
      <Header />
      <div className="searchBox">
        <div className="row">
          {/* Search Section */}
          <div className="column">
            <label className="searchText">Search</label>
            <form>
              <label>
                <p>Location</p>
                <input
                  className="searchInputBox"
                  type="text"
                  placeholder="City"
                />
                <input
                  className="searchInputBox"
                  type="text"
                  placeholder="Zip Code"
                />
              </label>
              <label>
                <p>Search Criteria</p>
                <input
                  className="searchInputBox"
                  type="text"
                  placeholder="Title"
                />
                <input
                  className="searchInputBox"
                  type="text"
                  placeholder="ISBN 13"
                />
                <input
                  className="searchInputBox"
                  type="text"
                  placeholder="ISBN 10"
                />
                <input
                  className="searchInputBox"
                  type="text"
                  placeholder="Author"
                />
              </label>
              {/* Submit Button */}
              <input className="searchButton" type="submit" value="Search" />
            </form>
          </div>
          {/* Results Section */}
          <div className="column">
            <label className="searchText">Results</label>
            <div className="resultsBox"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
