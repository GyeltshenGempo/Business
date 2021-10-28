export default class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes('hello')) {
     console.log('Hi Gempo')
    }
    if (message.includes('dog')) {
      console.log('Hi Dog lover')
    }
  }
}
