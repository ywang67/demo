import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.constants = [
      "Tom",
      "Jack",
      "Lee",
      "Paul",
      "Hailong",
      "Zhen",
      "Pardeep"
    ];

    this.state = {
      labelNumber: 0,
      timeout: null,
      realtedArr: [],
      currInput: ""
    };
  }

  componentDidMount() {
    this.addDocumentListeners();
  }

  componentWillMount() {
    this.removeDocumentListeners();
  }

  addDocumentListeners = () => {
    document.addEventListener("mousemove", this.documentMouseMove);
  };

  removeDocumentListeners = () => {
    document.removeEventListener("mousemove", this.documentMouseMove);
  };

  documentMouseMove = evt => {
    const { target } = evt;
    if (target instanceof Element) {
      if (
        target.className !== "question-1" &&
        target.className !== "labelNumber" &&
        target.className !== "clickBtn"
      ) {
        this.debounce(this.handleClear)();
      }
    }
  };

  handleClear = () => {
    this.setState({
      labelNumber: 0
    });
  };

  debounce = fn => {
    let timeout = null;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, 500);
    };
  };

  handleLableNumberChange = () => {
    this.setState({ labelNumber: this.state.labelNumber + 1 }, () => {});
  };

  handleInputChange = evt => {
    const { value } = evt.target;
    this.setState(
      {
        currInput: value
      },
      () => {
        const temp = [];
        this.constants
          .filter(val =>
            val.toLowerCase().includes(this.state.currInput.toLowerCase())
          )
          .forEach((ele, index) => {
            temp.push({ data: ele, style: {} });
          });
        this.setState({
          realtedArr: temp
        });
      }
    );
  };

  handleResMouseOver = evt => {
    console.log(123);
    const { className } = evt.target;
    const len = this.state.realtedArr.length;
    const temp = [];
    for (let i = 0; i < len; i++) {
      if (Number(className.split(":")[1]) === i) {
        temp.push({
          data: this.state.realtedArr[i].data,
          style: { backgroundColor: "green" }
        });
      } else {
        temp.push({ data: this.state.realtedArr[i].data, style: {} });
      }
    }
    this.setState({ realtedArr: temp });
  };

  render() {
    const { labelNumber, realtedArr, currInput } = this.state;
    return (
      <div className="App">
        <div className="question-1">
          <div className="labelNumber">{labelNumber}</div>
          <button className="clickBtn" onClick={this.handleLableNumberChange}>
            Click me!
          </button>
        </div>
        <div className="question-2">
          <input
            style={{ width: "200px" }}
            type="text"
            value={currInput}
            onChange={this.handleInputChange}
          />
          {realtedArr.length ? (
            <div className="relatedWrapper">
              {realtedArr.map((e, index) => (
                <div
                  className={`$search-resut:${index}`}
                  onMouseOver={this.handleResMouseOver}
                  key={e.data}
                  style={{
                    border: ".5px solid",
                    width: "200px",
                    cursor: "pointer",
                    ...e.style
                  }}
                >
                  {e.data}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
