new Vue({
    el: "#app",
    data: {
        yourHealth: 100,
        monsterHealth: 100,
        healthObject: {
            player: [],
            monster: []
        }
    },
    methods: {
        startGame() {
            this.yourHealth = 100;
            this.monsterHealth = 100;
            // console.log(this.yourHealth, this.monsterHealth);
            this.healthObject.player.push(this.yourHealth);
            this.healthObject.monster.push(this.monsterHealth);
            console.log(this.healthObject);
        },
        yourAttack() {
            this.monsterHealth -= Math.floor(Math.random() * 10);
            // console.log("monster health: ", this.monsterHealth);
            this.healthObject.monster.push(this.monsterHealth);
            // this.healthBar();
            this.monsterAttack();

        },
        monsterAttack() {
            this.yourHealth -= Math.floor(Math.random() * 15);
            this.healthObject.player.push(this.yourHealth);
            this.healthBar();
            // console.log("Your health: ", this.yourHealth);
        },
        heal() {
            this.yourHealth += Math.floor(Math.random() * 10);
            this.monsterAttack();
            this.healthObject.player.push(this.yourHealth);
            // console.log("monster health: ", this.monsterHealth);
            // console.log("Your health: ", this.yourHealth);
        },
        healthBar() {
            var width = 0;
            width -= 10;
            this.healthbar.width = width + 'px';
        }
    }
});