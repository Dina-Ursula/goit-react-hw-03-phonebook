import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormSubmit, InputContainer, Input, ButtonSubmit } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <FormSubmit onSubmit={this.handleSubmit}>
        <InputContainer>
          Name
          <Input
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputContainer>
        <InputContainer>
          Number
          <Input
            onChange={this.handleNameChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputContainer>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormSubmit>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
