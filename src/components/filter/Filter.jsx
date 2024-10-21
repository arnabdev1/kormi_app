import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Bangladesh</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Gender</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Male</option>
            <option value="rent">Female</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Cleaning</option>
            <option value="rent">Driving</option>
            <option value="rent">Cooking</option>
            <option value="rent">Security</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Max Age(years)</label>
          <input
            type="number"
            id="maxAge"
            name="maxAge"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Pay(hourly)</label>
          <input
            type="text"
            id="maxPay"
            name="maxPay"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Min Experience(years)</label>
          <input
            type="text"
            id="minExperience"
            name="minExperience"
            placeholder="any"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
