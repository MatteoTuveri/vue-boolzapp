import {contacts} from './data';

const { createApp } = Vue

createApp({
  data() {
    return {
        contacts : contacts
    }
  }
}).mount('#app')