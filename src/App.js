import React from 'react';
import shortid from 'shortid';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css'

class App extends React.Component{
  state = {
  contacts: [],
  filter: '',
  }

  formSubmit = ({ name, number }) => {
    const friendName = name;
    if (this.state.contacts.some(({ name }) => name === friendName)) {
      alert(`${name} is already in contact`);
      return;
    }

    const list = {
      id: shortid.generate(),
      name,
      number,
    }

    this.setState(({ contacts }) => {
      return { contacts: [...contacts, list] }
    })
  }


changeFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  getFilterSearch = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  deleteContact = (nameId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== nameId),
    }))
  }

  render() {
    const filterSearch = this.getFilterSearch();
    return (
      <div className="conteiner">
        <h1 className="title">Phonebook</h1>

        <Form onSubmit={this.formSubmit} />

        <h2 className="title">Contacts</h2>

        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={filterSearch}
          onDelete={this.deleteContact}
        />
      </div>

    )
  }
}
      
      
export default App;
