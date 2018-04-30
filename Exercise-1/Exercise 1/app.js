new Vue({
    el:"#exercise",
    data: {
        name: 'noah',
        age: 28,
        link: 'https://i.redd.it/v53przfht6n01.png'
    },
    methods: {
        displayNameAndAge() {
            return `My name is ${this.name} and I'm ${this.age} years old!`
        },
        randFloat: function() {
            return Math.random();
        }
    }
})