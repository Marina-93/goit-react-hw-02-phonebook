import React from "react";
import '../App.css'

class Filter extends React.Component {
  render() {
    return (
      <label className="filter-label">
        Find contacts by name
        <input
          className="filter-input"
          value={this.props.value}
          onChange={this.props.onChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    );
  }
}

export default Filter;