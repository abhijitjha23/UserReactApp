import React from "react";

const contactPreference = [
  { label: "By Email", value: "email" },
  { label: "By Phone", value: "phone" },
  { label: "By SMS Text", value: "sms" }
];
const pets = ["Dog", "Cat", "Bird", "Fish", "Rabbit", "Turtle"];

export class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      website: "",
      favouritePet: pets[0],
      description: "",
      agree: false,
      contactPreference: contactPreference[0].value
    };
  }

  clearForm = () => {
    const state = {
      name: "",
      email: "",
      website: "",
      favouritePet: pets[0],
      description: "",
      agree: false,
      contactPreference: contactPreference[0].value
    };
    this.setState(state);
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleClear = e => {
    e.preventDefault();
    this.clearForm();
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting the form!: ", this.state);
  };

  favouritePetsDropdown = () => {
    const options = pets.map((value, ind) => {
      return (
        <option key={ind} value={value}>
          {value}
        </option>
      );
    });

    return (
      <div className="field-group">
        <label htmlFor="favouritePet">Favourite Pet: </label>
        <select
          id="favouritePet"
          name="favouritePet"
          onChange={this.handleInputChange}
          value={this.state.favouritePet}
        >
          {options}
        </select>
      </div>
    );
  };

  radioButtonGroup = () => {
    const radioButtons = contactPreference.map(({ label, value }, index) => {
      return (
        <div key={index}>
          <label htmlFor={label + index}>{label}</label>
          <input
            id={label + index}
            type="radio"
            name="contactPreference"
            checked={this.state.contactPreference === value}
            value={value}
            onChange={this.handleInputChange}
          />
        </div>
      );
    });
    return (
      <div className="field-group column">
        <span>How would you like to be contacted?</span>
        <div>{radioButtons}</div>
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="field-group">
          <label htmlFor="name">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="field-group">
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            id="website"
            name="website"
            value={this.state.webssite}
            onChange={this.handleInputChange}
          />
        </div>
        {this.favouritePetsDropdown()}
        <div className="field-group">
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            name="description"
            onChange={this.handleInputChange}
            value={this.state.description}
          />
        </div>
        <div className="field-group">
          <label htmlFor="agree">Agree to Terms and Conditions: </label>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={this.state.agree}
            onChange={this.handleInputChange}
          />
        </div>
        {this.radioButtonGroup()}
        <div className="actions">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
