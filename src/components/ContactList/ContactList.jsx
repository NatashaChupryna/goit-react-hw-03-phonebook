import React from 'react';
import { nanoid } from 'nanoid';
import { List, Button, Item } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete}) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={nanoid()}>
            <span>{contact.name} : </span>
            <span>{contact.number}</span>
            <Button onClick={() => onDelete(contact.id)}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};