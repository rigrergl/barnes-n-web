import Header from "./components/Header";

const Search = () => {
  return (
    <div className="page">
      <Header />
      <div className="searchBox">
        <div className="row">
          {/* Search Section */}
          <div className="column">
            <label style={{ textAlign: "center", fontSize: "25px" }}>
              Search
            </label>
            <form>
              <label>
                <p>Location</p>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="Zip Code"></input>
              </label>
              <label>
                <p>Search Criteria</p>
                <input type="text" placeholder="Title"></input>
                <input type="text" placeholder="ISBN 13"></input>
                <input type="text" placeholder="ISBN 10"></input>
                <input type="text" placeholder="Author"></input>
              </label>
              {/* Submit Button */}
              <input
                style={{
                  textAlign: "center",
                  top: "150px",
                  fontSize: "15px",
                  height: "40px",
                  width: "150px",
                  background: "#FB8500",
                  borderRadius: "25px",
                }}
                type="submit"
                value="Search"
              />
            </form>
          </div>
          {/* Results Section */}
          <div className="column">
            <label style={{ textAlign: "center", fontSize: "25px" }}>
              Results
            </label>
            <div className="resultsBox"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
