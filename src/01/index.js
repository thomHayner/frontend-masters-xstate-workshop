const elBox = document.querySelector('#box');

// Pure function that returns the next state,
// given the current state and sent event
// function transition(state, event) {
//   switch (state) {
//     case 'inactive':
//       switch (event) {
//         case 'CLICK':
//           return 'active';
//         default:
//           return state;
//       }
//     case 'active':
//       switch (event) {
//         case 'CLICK':
//           return 'inactive';
//         default:
//           return state;
//       }
//     default:
//       return state;
//   }
// }

const machine = {
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        CLICK: 'active',
      },
    },
    active: {
      on: {
        CLICK: 'inactive',
      },
    },
  }
}

// Keep track of your current state
let currentState = machine.initial;

function transition(state, event) {
  const nextState = machine.states[state].on?.[event] || state;
  
  return nextState;
}

function send(event) {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event)

  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  // send a click event
  send('CLICK');
});