// var playName= 'Snake Doc';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// var enemyName = "Roborto", "Amy Android", "Robo Trumble"
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// Fight Function
var fight = function (enemyName) {
  // repeat and execute the "while" statement as long as the enemy-robot is alive
  // for the "while" statement to operate place and nest the fight function code block in the curly brackets of the "while" statement/loop
  while (playerHealth > 0 && enemyHealth > 0) {
    // This prompt will ask the player if the player would like to FIGHT or SKIP
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm the player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave the fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
      " attacked " +
      enemyNames +
      ". " +
      enemyNames +
      " now has " +
      enemyHealth +
      " health remaining."
      );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;

    // to exit the enemy from the fight loop i.e. "while ()" loop, use the "break" statement/command, as this prevents it from fighting after it's defeat/death
    break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
      );

    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    
    // to exit the player from the fight loop i.e. "while ()" loop, use the "break" statement/command, as this prevents it from fighting after it's defeat/death
    break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};


// function to start a new game
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // fight each enemy robot by looping over them and fighting them one at a time. The "for" loop has to be after the fight () function expression becuase we're calling the fight () function within the loop. IF the function isn't declared before the function call, it will error.
  for (var i = 0; i < enemyNames.length; i++) {
      
    // if player is still alive, then keep fighting
    if (playerHealth > 0) {
      
      // let the player know what round they are in, also note that arrays start at 0 so it needs to have a 1 addeed to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      
      // pick a new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset the enemyHeath before starting a new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at that moment in the code
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
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

  // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
  } else {
    window.alert("you've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  // var playerAgainConfirm = window.confirm("Would you like to play again?");
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// go to shop between battles function

// start the first game when page loads
startGame();