const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  computed: {
    monsterHealthStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHealthStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    specialAttackAvailable() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = randomInRange(5, 12);
      this.addLogMessage("player", "attack", damage);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    specialAttackMonster() {
      this.currentRound++;
      const damage = randomInRange(10, 25);
      this.addLogMessage("player", "attack", damage);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = randomInRange(8, 15);
      this.addLogMessage("monster", "attack", damage);
      this.playerHealth -= damage;
    },
    healPlayer() {
      this.currentRound++;
      const healing = randomInRange(8, 20);
      if (this.playerHealth + healing > 100) {
        this.playerHealth = 100;
      } else this.playerHealth += healing;
      this.addLogMessage("player", "heal", healing);
      this.attackPlayer();
    },
    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.battleLog = [];
      this.winner = null;
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, amount) {
      this.battleLog.unshift({ who, what, amount });
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        console.log("monsterHealth else");
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
