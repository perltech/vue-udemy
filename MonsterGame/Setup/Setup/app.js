new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        healthObject: {
            player: [],
            monster: []
        },
        attackObject: {
            player: [],
            monster: []
        },
        healthbar: {
            width: '0px',
            backgroundColor: 'red'
        },
        playerAttackVal: 0,
        monsterAttackVal: 0
    },
    methods: {
        randPlayer() {
            this.playerAttackVal = Math.floor(Math.random() * 10);
            this.attackObject.player.push(this.playerAttackVal);
            return this.playerAttackVal;
        },
        randMonster() {
            this.monsterAttackVal = Math.floor(Math.random() * 15);
            this.attackObject.monster.push(this.monsterAttackVal);
            return this.monsterAttackVal;
        },
        randSpecial() {
            return Math.floor(Math.random() * 25);
        },
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackObject.player = [];
            this.attackObject.monster = [];

            // this.healthObject.player.push(this.playerHealth);
            // this.healthObject.monster.push(this.monsterHealth);
        },
        checkWinner() {
            console.log('this ran');
            if (this.playerHealth <= 0) {
                alert("You died!");
            }
            if (this.monsterHealth <= 0) {
                alert("You are brave and victotious. Have a cookie.🍪");
            }
        },
        yourAttack() {
            this.monsterHealth -= this.randPlayer();

            // this.healthObject.monster.push(this.monsterHealth);
            // this.healthBar();
            this.monsterAttack();
            this.checkWinner();

        },
        monsterAttack() {
            this.playerHealth -= this.randMonster();
            // this.healthObject.player.push(this.playerHealth);
            // this.healthBar();

        },
        specialAttack() {
            let playerAttack = this.randSpecial();
            let monsterAttack = this.randSpecial();

            this.playerHealth -= playerAttack;
            this.attackObject.player.push(playerAttack);

            this.monsterHealth -= monsterAttack;
            this.attackObject.monster.push(monsterAttack);
            this.checkWinner();
        },
        heal() {
            this.playerHealth += 5 + this.randPlayer();
            this.monsterAttack();
            // this.healthObject.player.push(this.playerHealth);

        },
        giveUp() {
            alert("That lazy huh?");
            this.startGame();
        },
        healthBar() {
            var width = 0;
            width -= 10;
            this.healthbar.width = width + 'px';
        }
    }
});