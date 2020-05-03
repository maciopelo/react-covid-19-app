import React, { Component } from "react";
import SearchPanel from "./components/SearchPanel";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import GlobalStats from "./components/GlobalStats";
import "./styles/App.css";

const API = "https://api.covid19api.com/summary";

class App extends Component {
  state = {
    globalStatistics: [],
    chosenCountry: "",
    currentCountryStats: [],
    isLoaded: false,
    error: null,
  };

  handleCountryChange = (e) => {
    this.setState({ chosenCountry: e.target.value });
  };
  handleBackButton = (e) => {
    e.preventDefault();
    this.setState({ currentCountryStats: [] });
  };

  searchStats = (e) => {
    e.preventDefault();
    const country = this.state.chosenCountry.toLowerCase().split(" ").join("-");

    fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.length) {
          alert("There is no data available yet about this country");
        } else {
          this.setState({ currentCountryStats: data });
        }
      });
  };

  componentDidMount() {
    this.fetchCountries();
  }

  fetchCountries = () => {
    fetch(API)
      .then((response) => response.json())
      .then(
        (data) => this.setState({ globalStatistics: data, isLoaded: true }),
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const {
      error,
      globalStatistics,
      isLoaded,
      chosenCountry,
      currentCountryStats,
    } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Logo />
          <SearchPanel
            countries={globalStatistics}
            handleCountryChange={this.handleCountryChange}
            searchStats={this.searchStats}
            chosenCountry={chosenCountry}
          />
          {currentCountryStats.length ? (
            <Stats
              currentCountryStats={currentCountryStats}
              handleBackButton={this.handleBackButton}
            />
          ) : (
            <GlobalStats globalStats={this.state.globalStatistics.Global} />
          )}
        </>
      );
    }
  }
}

export default App;
