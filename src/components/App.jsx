import { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledApp, Title } from './App.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const Contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(Contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  filterContacts = event => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toUpperCase();
    return contacts.filter(contact => {
      return contact.name.toUpperCase().includes(normalizedFilter);
    });
  };

  onFilterChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name === name && contact.number === number
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <StyledApp>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.addContact}></ContactForm>

        <Title>Contacts</Title>

        <Filter
          name={this.state.filter}
          onFilterChange={this.onFilterChange}
        ></Filter>

        <ContactList
          contacts={this.filterContacts()}
          onDelete={this.deleteContact}
        ></ContactList>
      </StyledApp>
    );
  }
}
