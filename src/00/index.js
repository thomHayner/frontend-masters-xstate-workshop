import { createMachine } from 'xstate';

const elOutput = document.querySelector('#output');

function output(object) {
  elOutput.innerHTML = JSON.stringify(object, null, 2);
}

console.log('Welcome to the XState workshop!');

const user = {
  name: 'Thomas Hayner',
  company: 'Cyberdyne Systems',
  interests: ['state machines', 'global domination', 'hiking'],
};

output(user);
