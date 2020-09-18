import { createMachine, interpret, send } from 'xstate';

const elBox = document.querySelector('#box');

const machine = createMachine({
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        mousedown: {
          target: 'active',
        },
      },
    },
    active: {
      on: {
        mouseup: {
          target: 'inactive',
        },
      },
    },
  }
});

// let currentState = machine.initialState;

// Create a service using interpret(...)
const service = interpret(machine);

// Listen to state transitions and set
service.onTransition(state => {
// `elBox.dataset.state` to the state value as before.
  elBox.dataset.state = state.value;
})

// Start the service.
service.start();

elBox.addEventListener('mousedown', (event) => {
  // Send a mousedown event
  service.send(event);
});

elBox.addEventListener('mouseup', (event) => {
  // Send a mouseup event
  service.send(event
    // {
    // type: 'mouseup',
    // }
  );
});