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
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackObject.player = [];
            this.attackObject.monster = [];
            // this.healthObject.player.push(this.playerHealth);
            // this.healthObject.monster.push(this.monsterHealth);
        },
        yourAttack() {
            this.monsterHealth -= this.randPlayer();

            // this.healthObject.monster.push(this.monsterHealth);
            // this.healthBar();
            this.monsterAttack();

        },
        monsterAttack() {
            this.playerHealth -= this.randMonster();
            // this.healthObject.player.push(this.playerHealth);
            // this.healthBar();

        },
        heal() {
            this.playerHealth += this.randPlayer();
            this.monsterAttack();
            // this.healthObject.player.push(this.playerHealth);

        },
        healthBar() {
            var width = 0;
            width -= 10;
            this.healthbar.width = width + 'px';
        }
    }
});