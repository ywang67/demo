/* eslint-env browser */

import React from "react";
import ReactDOM from "react-dom";

import "./backupcss.css";

/**
 * Please note that this app is intentionally in a broken state.  You must create your
 * component and add it to `ReactDOM.render` (at the bottom of this file) to get started.
 */

/**
 * Using React create a `Typeahead` component that takes `list` and `classname` props.
 * Be sure that the component utilizes propTypes and any other best practices
 * that you follow. Use the `carBrands` list which is defined below as the
 * value for the `list` prop.
 *
 * Ensure that your component meets the following requirements:
 * 1. As the user types in an input field, a list of options should appear below it.
 *    - The list should only appear when input is not empty. Whitespace is
 *      considered empty.
 *    - The list should contain items from the `list` prop that *start*
 *      with the user entered value. Matching should be case insensitive.
 *    - Every new character typed should filter the list.
 * 2. Clicking on a list item should populate the input with the selected item's
 *    value and hide the list.
 * 3. For visible option strings, style the substring the user has entered as
 *    *bold*.
 * 4. Highlight a list item with gray background and white
 *    text when the user mouses over it.
 * 5. The input and list should be navigable using the keyboard.
 *    - Using `tab` and `shift+tab`, the user should be able to focus the different
 *      list items.
 *        - With the cursor in the input, pressing the `tab` key should focus the
 *          first item with the default browser focus style.
 *        - Subsequent presses of the "tab" key should focus the next item in the list.
 *        - Pressing the `shift+tab` keys should focus the previous item in the list.
 *        - Pressing the `shift+tab` key when the first item is focused should focus
 *          the input again.
 *        - Mousing over other list items should highlight them while the keyboard-
 *          focused item remains focused.
 *        - Pressing the `tab` key when no list is visible should move focus away
 *          from the input.
 *    - Pressing the `return` key when an item is focused should populate the input
 *      with the focused item's value, hide the list, and focus the input
 *      again.
 *    - Pressing the `escape` key should close the list.
 * 6. Clicking outside the input or the list should close the list.
 */

/**
 * Please don't change the `carBrands` list.
 */
const carBrands = [
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Jeep",
  "Kia",
  "Mazda",
  "Mercedez-Benz",
  "Mitsubishi",
  "Nissan",
  "Peugeot",
  "Porsche",
  "SAAB",
  "Subaru",
  "Suzuki",
  "Toyota",
  "Volkswagen",
  "Volvo"
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      chosen: false,
    };

    this.searchTextChange = this.searchTextChange.bind(this);
    this.keyBoardPress = this.keyBoardPress.bind(this);
    this.documentClicked = this.documentClicked.bind(this);
  }

  componentDidMount() {
    document.onkeydown = (evt) => {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
          this.setState({
            chosen: true,
          })
      }
    };
    this.addDocumentListener();
  }

  componentWillMount() {
    this.removeDocumentListener();
    document.onkeydown = null;
  }

  addDocumentListener() {
    document.addEventListener("keypress", this.keyBoardPress);
    document.addEventListener("touchstart", this.documentClicked);
    document.addEventListener("click", this.documentClicked);
  }

  removeDocumentListener() {
    document.removeEventListener("keypress", this.keyBoardPress);
    document.removeEventListener("touchstart", this.documentClicked);
    document.removeEventListener("click", this.documentClicked);
  }

  documentClicked(evt) {
    const { target } = evt;
    if (target.className !== 'search-element'
      && target.className !== 'search-results'
      && target.className !== 'ssearch-results-wrapper'
      && target.className !== 'search-input') {
        this.setState({
          chosen: true,
        });
      }
  }

  keyBoardPress(evt) {
    // console.log(evt);
    if (evt.key === 'Enter' && this.state.searchText.length !== 0) {
      // console.log(document.activeElement.textContent);
      if (document.activeElement.textContent) {
        let res = document.activeElement.textContent[0].toUpperCase();
        document.activeElement.textContent.split('').forEach((e, i) => {
          if (i !== 0) {
            res = res + e;
          }
        });
        this.searchTextChange(res);
        this.setState({
          chosen: true,
        });
      }
    }
  }

  searchTextChange(evt) {
    this.setState(
      {
        searchText: typeof evt === "string" ? evt : evt.target.value,
        chosen: false,
      },
      () => {
        const elements = document.getElementsByClassName("search-element");

        Object.values(elements).forEach(element => {
          element.innerHTML = element.textContent
            .toLowerCase()
            .replace(
              this.state.searchText.toLowerCase(),
              `<span style="color: black; font-weight: bold;">${
                this.state.searchText
              }</span>`
            );
        });
      }
    );
  }

  renderSearchResults(text) {
    const { chosen } = this.state;
    let values = [];
    const empty = !text.split(" ").filter(e => e !== "").length;
    if (text.length && !empty && !chosen) {
      values = carBrands.filter(car => {
        const includ = car.toLowerCase().includes(text.toLowerCase());
        const withStart = car[0].toLowerCase() === text[0].toLowerCase();
        return includ && withStart;
      });
    }
    const styleObj =
      this.state.searchText.length === 1 ? { textTransform: "capitalize" } : {};
    return (
      <div className="search-results">
        {values.map(val => (
          <div
            style={styleObj}
            tabIndex={0}
            className="search-element"
            key={val}
            onClick={() => {
              this.searchTextChange(val);
              this.setState({
                chosen: true,
              });
            }}
          >
            {val}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className="container">
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={this.searchTextChange}
          placeholder="type to search"
        />
        <div className="search-results-wrapper">
          {this.renderSearchResults(searchText)}
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
