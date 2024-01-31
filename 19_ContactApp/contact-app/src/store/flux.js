import { useState } from 'react';

const useGlobalState = () => {
  const [state, setState] = useState({
    contacts: {
      personal: [],
      work: []
    },
    currentAgenda: "personal"
  });

  const setStore = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState
    }));
  };

  const loadContacts = (agendaSlug) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agendaSlug}`)
      .then(response => response.json())
      .then(data => {
        setStore({
          contacts: {
            ...state.contacts,
            [agendaSlug]: data
          }
        });
      })
      .catch(error => console.error("Error loading contacts:", error));
  };

  const addContact = (contact, agendaSlug) => {
    fetch('https://playground.4geeks.com/apis/fake/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...contact,
        agenda_slug: agendaSlug
      })
    })
    .then(response => response.json())
    .then(addedContact => {
      setStore({
        contacts: {
          ...state.contacts,
          [agendaSlug]: [...state.contacts[agendaSlug], addedContact]
        }
      });
    })
    .catch(error => console.error("Error adding contact:", error));
  };

  const updateContact = (contactId, updatedContact, agendaSlug) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedContact)
    })
    .then(response => response.json())
    .then(() => {
      // Assuming the API returns the updated contact, adjust as needed
      const updatedContacts = state.contacts[agendaSlug].map(contact =>
        contact.id === contactId ? { ...contact, ...updatedContact } : contact
      );
      setStore({
        contacts: {
          ...state.contacts,
          [agendaSlug]: updatedContacts
        }
      });
    })
    .catch(error => console.error("Error updating contact:", error));
  };

  const deleteContact = (contactId, agendaSlug) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updatedContacts = state.contacts[agendaSlug].filter(contact => contact.id !== contactId);
      setStore({
        contacts: {
          ...state.contacts,
          [agendaSlug]: updatedContacts
        }
      });
    })
    .catch(error => console.error("Error deleting contact:", error));
  };

  const switchAgenda = (agendaSlug) => {
    setStore({ currentAgenda: agendaSlug });
    loadContacts(agendaSlug); // Optionally reload contacts for the new agenda
  };

  return {
    state,
    actions: {
      loadContacts,
      addContact,
      updateContact,
      deleteContact,
      switchAgenda
    }
  };
};

export default useGlobalState;
