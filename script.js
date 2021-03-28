var app = new Vue({
    el: '#root',
    data: {
      contacts: [
      	{
      		name: 'Gigi',
      		avatar: 'https://www.nazionalecantanti.it/wp-content/uploads/2017/05/giocatore-gigi-dalessio.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Tiziano',
      		avatar: 'https://www.occhionotizie.it/wp-content/uploads/2020/05/Schermata-2019-02-21-alle-12.38.17.png',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
      	},
      	{
      		name: 'Madonna',
			avatar: 'https://www.teleclubitalia.it/wp-content/uploads/2020/01/Madonna.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Elettra',
      		avatar: 'https://img2.liberoquotidiano.it/images/2020/06/04/055156871-875d79ef-0e00-4fd4-8031-c26f46a3b9f6.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
      ],
      activeContactIndex: 0,
      newMessage:'',
      searchText:''
    },

    methods: {
      setActiveContactIndex: function(newIndex) {
        this.activeContactIndex = newIndex;
      },
      funzioneAggiungi: function() {
        var newObj = {
            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
            text: this.newMessage,
            status: 'sent'
          };

        this.contacts[this.activeContactIndex].messages.push(newObj);
        this.newMessage = ''


        // autoRisposta
        setTimeout(function() {
          var autoNewObj = {
            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
            text: 'ok',
            status: 'received'
          };
          app.contacts[app.activeContactIndex].messages.push(autoNewObj);
        },1000 )
      },
      filterContacts: function () {
        this.contacts.forEach(
          (element, index) => {
            if(element.name.toLowerCase().includes(this.searchText.toLowerCase())) {
              element.visible = true;
            } else {
              element.visible = false;
            }
          }
        );
      }


    }



});
