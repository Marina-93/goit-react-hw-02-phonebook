import React from 'react';
import '../App.css'

class Form extends React.Component{
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
    const { name, value } = e.currentTarget

    this.setState({[name]: value})
    }
    handleSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit(this.state)

        this.reset()
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
        <label className="label">
          Имя
          <input
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
        />
        </label>

        <label className="label">
          Телефона
          <input
            className="input"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
        />
        </label>

        <button className="button" type="submit">Add contact</button>
     </form>
        );
    }

}

export default Form;