// // var playName= 'Snake Doc';
// var playerInfo.name = window.prompt("What is your robot's name?");
// var playerInfo.health = 100;
// var playerInfo.attack = 10;
// var playerInfo.money = 10;



// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// Fight Function
var fight = function (enemy) {
  // repeat and execute the "while" statement as long as the enemy-robot is alive
  // for the "while" statement to operate place and nest the fight function code block in the curly brackets of the "while" statement/loop
  while (playerInfo.health > 0 && enemy.health > 0) {
    // This prompt will ask the player if the player would like to FIGHT or SKIP
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm the player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave the fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerInfo.money for skipping
        //playerInfo.money = playerInfo.money - 10;
        playerInfo.money = Math.max(0, playMoney - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name +
      " attacked " +
      enemy.names +
      ". " +
      enemy.names +
      " now has " +
      enemy.health +
      " health remaining."
    );
    
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

    // award player money for winning
    playerInfo.money = playerInfo.money + 20;

    // to exit the enemy from the fight loop i.e. "while ()" loop, use the "break" statement/command, as this prevents it from fighting after it's defeat/death
    break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemy.attack variable
  
    // generate random damage value based on player's attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    palyerHealth = Math.max(0, playerInfo.health - damage);
    
    console.log(
      enemy.names +
      " attacked " +
      playerInfo.name +
      ". " +
      playerInfo.name +
      " now has " +
      playerInfo.health +
      " health remaining."
      );

    // check player's health
    if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
    
    // to exit the player from the fight loop i.e. "while ()" loop, use the "break" statement/command, as this prevents it from fighting after it's defeat/death
    break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};


// function to start a new game
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time. The "for" loop has to be after the fight () function expression becuase we're calling the fight () function within the loop. IF the function isn't declared before the function call, it will error.
  for (var i = 0; i < enemyInfo.length; i++) {
      
    // if player is still alive, then keep fighting
    if (playerInfo.health > 0) {
      
      // let the player know what round they are in, also note that arrays start at 0 so it needs to have a 1 addeed to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      
      // pick a new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset the enemyHeath before starting a new fight
      // enemy.health = 50;
      // enemy.health = Math.floor(Math.random() * 21) + 40;
      // enemy.health = randomNumber(40, 60);
      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemy.name parameter
      // fight(pickedEnemyName);
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if the player isn't alive, break out of the loop and le the end Game function run
    else {
      window.alert('You have lost your robot in the battle! game Over!');
        break;
    }
  }

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of"  +  playerInfo.money +  ".");
  } else {
    window.alert("you've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL": 
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE": 
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }

};

// player information
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.")
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!")
    }

  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
};
// // var enemy.name = "Roborto", "Amy Android", "Robo Trumble"
// var enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemy.health = 50;
// var enemy.attack = 12;

// Enemy Information 
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

// console.log(enemy.names);
// console.log(enemy.names.length);
// console.log(enemy.names[0]);
// console.log(enemy.names[3]);

// start the first game when page loads
startGame();