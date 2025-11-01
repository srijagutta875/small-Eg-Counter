import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class CounterPage extends Component {
  state = {WordsList: [], counterValue: ''}

  inputChange = event => {
    this.setState({
      counterValue: event.target.value,
    })
  }

  addButtonClicked = () => {
    const {counterValue} = this.state
    if (counterValue.trim() !== '') {
      const newWord = {
        id: uuidv4(),
        text: counterValue,
      }
      this.setState(prevState => ({
        WordsList: [...prevState.WordsList, newWord],
        counterValue: '',
      }))
    }
  }

  formSubmit = event => {
    event.preventDefault()
    this.addButtonClicked()
  }

  render() {
    const {WordsList, counterValue} = this.state
    return (
      <div className="bgContainer">
        <div className="innerCard">
          <div className="firstContainer">
            <div className="headingFirst">
              <h1>Count the characters like a Boss</h1>
            </div>
            {WordsList.length <= 0 ? (
              <div className="imageContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            ) : (
              <ul>
                {WordsList.map(each => (
                  <li key={each.id} className="list-item">
                    <p>
                      {each.text} : {each.text.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="secondContainer">
            <div className="headingSecond">
              <h1>Character Counter</h1>
              <form className="input-container" onSubmit={this.formSubmit}>
                <input
                  type="text"
                  placeholder="Enter the Characters here"
                  value={counterValue}
                  onChange={this.inputChange}
                  className="input"
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CounterPage
