import { createMachine, interpret } from 'xstate';

const elBox = document.querySelector('#box');

const machine = createMachine({
  // Create your state machine here
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        CLICK: 'active'
      }
    },
    active: {
      on: {
        CLICK: 'inactive'
      }
    }
  }
});

// Create a service using interpret(...)
const service = undefined;

// Listen to state transitions and set
// `elBox.dataset.state` to the state value as before.
// ...

// Start the service.
// ...

elBox.addEventListener('mousedown', (event) => {
  // Send a mousedown event
  // ...
});

elBox.addEventListener('mouseup', (event) => {
  // Send a mouseup event
  // ...
});
