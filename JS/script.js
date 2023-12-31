
const { createApp } = Vue

createApp({
  data() {
    return {
      account: {
        name: 'Sofia',
        avatar: 'Img/avatar_io.jpg'
      },
      contacts: [
        {
          id: 1,
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          id: 2,
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          id: 3,
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          id: 4,
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          id: 5,
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          id: 6,
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          id: 7,
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          id: 8,
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      activeIndex: 0,
      newMessage: '',
      time: '',
      search: '',
      clickedMessageID: null,
      showChat: false,
      showMenu: true,
      chatOptions: false,
      audio : true
    }
  },
  methods: {

    activation(index) {
      this.activeIndex = index;
      this.chatActive();
      this.showMenu = false;
      this.chatOptions= false;
    },
    chatActive() {
      this.showChat = !this.showChat
    },
    active(index) {
      if (this.activeIndex === index) {
        return 'active'
      }
    },

    lastMsg(index) {
      let contact = this.contacts[index].messages;
      if (contact.length === 0) {
        return 'Non ci sono messaggi'
      }
      else {
        return this.contacts[index].messages[contact.length - 1].message
      }
    },

    lastMsgStatus(index) {
      let result = this.lastMsg(index);
      if (result === 'Non ci sono messaggi') {
        return false;
      }
      else {
        if (this.contacts[index].messages[this.contacts[index].messages.length - 1].status === 'sent') {
          return true;
        }
        else {
          return false;
        }
      }
    },

    lastMsgHour(index) {
      let message = this.contacts[index].messages;
      if (message.length !== 0) {
        let contact = this.contacts[index].messages[this.contacts[index].messages.length - 1].date.split(' ');
        let hour = contact[contact.length - 1].split(':');
        return `${hour[0]}:${hour[1]}`
      }
      else {
        return '';
      }
    },

    messageStatus(index) {
      let message = this.contacts[this.activeIndex].messages;
      if (message.length !== 0) {
        let status = this.contacts[this.activeIndex].messages[index].status;
        if (status === 'sent') {
          return 'sent'
        }
        else {
          return 'received'
        }
      }
      else {
        return '';
      }
    },
    messageMenu(index) {
      let message = this.contacts[this.activeIndex].messages;
      if (message.length !== 0) {
        let status = this.contacts[this.activeIndex].messages[index].status;
        if (status === 'sent') {
          return 'menu-s'
        }
        else {
          return 'menu-r'
        }
      }
    },
    menu(index) {
      this.rotateIcon = !this.rotateIcon
      if (this.clickedMessageID === index) {
        this.clickedMessageID = null;
      }
      else {
        this.clickedMessageID = index
        this.showMenu = true
      }
    },

    deleteMsg(index) {
      this.contacts[this.activeIndex].messages.splice(index, 1);
      this.clickedMessageID = null;
    },

    messageHour(index) {
      let dayAndHour = this.contacts[this.activeIndex].messages[index].date.split(' ');
      let hour = dayAndHour[dayAndHour.length - 1].split(':')
      return `${hour[0]}:${hour[1]}`
    },

    sendMsg() {
      if (this.newMessage.trim().length !== 0) {
        this.hours();
        let msg = {
          date: this.time,
          message: this.newMessage,
          status: 'sent'
        }
        this.newMessage = '';
        this.contacts[this.activeIndex].messages.push(msg);
        setTimeout(this.answer, 1000);
      }

    },
    answer() {
      this.hours();
      let msg = {
        date: this.time,
        message: 'ok',
        status: 'received'
      }
      this.contacts[this.activeIndex].messages.push(msg);
    },
    hours() {
      const d = new Date();
      let day = d.getDay();
      let mounth = d.getMonth();
      let year = d.getFullYear();
      let h = d.getHours();
      let m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      let s = d.getSeconds();
      let time = day + '/' + mounth + '/' + year + ' ' + h + ":" + m + ":" + s;
      this.time = time
    },
    filter(contact) {
      if (contact.visible) {
        return 'd-flex'
      }
      else {
        return 'd-none'
      }
    },
    chatOpt(){
      this.chatOptions=!this.chatOptions
    },
    deleteChat(){
      let msgIndex = this.contacts[this.activeIndex]
      msgIndex.messages.splice(0,msgIndex.messages.length);
    }

  },
  computed: {
    audioAndSend(){
      if (this.newMessage.trim().length !== 0) {
        this.audio = false;
      }
      else{
        this.audio = true;
      }
    },
    searchFilter() {
      this.contacts.forEach(element => {
        let convertFind = this.search.toUpperCase();
        let convertName = element.name.toUpperCase();
        if (convertName.startsWith(convertFind)) {
          element.visible = true;
        }
        else {
          element.visible = false;
        }
      });
    }
  }
}).mount('#app')