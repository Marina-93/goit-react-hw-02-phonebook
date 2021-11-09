import React from "react";
import PropTypes from "prop-types";
import '../App.css'

class Filter extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label className="filter-label">
        Find contacts by name
        <input
          className="filter-input"
          value={value}
          onChange={onChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    )
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Filter;