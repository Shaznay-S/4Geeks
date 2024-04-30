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
    // Log the contact details and agendaSlug being added for debugging purposes
    console.log('Attempting to add contact:', contact, 'to agenda:', agendaSlug);

    fetch('https://playground.4geeks.com/apis/fake/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...contact, agenda_slug: agendaSlug })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json(); // Parse JSON only if response is ok
    })
    .then(addedContact => {
      console.log('Successfully added contact:', addedContact);

      // Update the state with the newly added contact
      setState(prevState => ({
        ...prevState,
        contacts: {
          ...prevState.contacts,
          [agendaSlug]: [...prevState.contacts[agendaSlug], addedContact]
        }
      }));
    })
    .catch(error => {
      console.error("Error adding contact:", error.message);
    });
};

  /*
  const addContact = (contact, agendaSlug) => {
    console.log('Added contact:', contact, agendaSlug)
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

      setState(prevState => ({
        ...prevState,
        contacts: {
         ...prevState.contacts,
          [agendaSlug]: [...prevState.contacts[agendaSlug], addedContact]
        }
      }));
    })
    .catch(error => console.error("Error adding contact:", error));
  };

  const addContact = (contact, agendaSlug) => {
    fetch('https://playground.4geeks.com/apis/fake/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...contact, agenda_slug: agendaSlug })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      return response.json();
    })
    .then(addedContact => {
      console.log('Added contact:', addedContact);
      // State update logic
    })
    .catch(error => {
      console.error("Error adding contact:", error);
    });
  };
  */

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
