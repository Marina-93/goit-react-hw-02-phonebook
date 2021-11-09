import React from "react";
import PropTypes from "prop-types"

class ContactList extends React.Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul className="list">
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              className="button-list"
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}

export default ContactList;