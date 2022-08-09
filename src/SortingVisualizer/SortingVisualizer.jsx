import React from "react";
import ReactiveButton from "reactive-button";
import '../SortingVisualizer/SortingVisualizer.css';

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 225;

//TESTING GIT FUNCTIONALITY LOL
// This is the main color of the array bars.
const PRIMARY_COLOR = 'NAVY-BLUE';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }
  

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }

  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  bubbleSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  render() {
    const {array} = this.state;


    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}

        <div className="container-tester">
        <ReactiveButton onClick={() => this.resetArray()}
        color='teal'
        size='medium'
        idleText={'Generate Array'}
        loadingText={'Loading'}
        rounded
        />
        <ReactiveButton onClick={() => this.mergeSort()}
        color='Red'
        size='medium'
        idleText={'Merge Sort'}
        loadingText={'Loading'}
        rounded
        />
        <ReactiveButton onClick={() => this.quickSort()}
        color='blue'
        size='medium'
        idleText={'Quick Sort'}
        loadingText={'Loading'}
        rounded
        />
        <ReactiveButton onClick={() => this.heapSort()}
        color='violet'
        size='medium'
        idleText={'Heap Sort'}
        loadingText={'Loading'}
        rounded
        />
        <ReactiveButton onClick={() => this.bubbleSort()}
        color='green'
        size='medium'
        idleText={'Bubble Sort'}
        loadingText={'Loading'}
        rounded
        />
        <ReactiveButton onClick={() => this.testSortingAlgorithms()}
        color='teal'
        size='medium'
        idleText={'Testing! (Me no work)'}
        loadingText={'Loading'}
        rounded
        />
        </div>
      </div>
    );
  }
}


function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
