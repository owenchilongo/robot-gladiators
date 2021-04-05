// var playName= 'Snake Doc';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// // You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

// var enemyName = "Roborto", "Amy Android", "Robo Trumble"
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames[3]);
console.log(enemyNames.length);

// Example of using the "for" loop
// for(var i = 0; i < 3; i++) {
//     console.log("apple" + i);
// }
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     }

// for (var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }

// Fight Function
var fight = function (enemyName) {
  // repeat and execute the "while" statement as long as the enemy-robot is alive
  // for the "while" statement to operate place and nest the fight function code block in the curly brackets of the "while" statement/loop
  while (enemyHealth > 0 && enemyHealth > 0) {
    // This prompt will ask the player if the player would like to FIGHT or SKIP
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

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

      // if player choses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
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
          window.alert(
            enemyName + " still has " + enemyHealth + " health left."
          );
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
          window.alert(
            playerName + " still has " + playerHealth + " health left."
          );
        }
        //   // if player choses to skip
        // } else if (promptFight === "skip" || promptFight === "SKIP") {
        //   // confirm the player wants to skip
        //   var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //   // if yes (true), leave the fight
        //   if (confirmSkip) {
        //     window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //     // subtract money from playerMoney for skipping
        //     playerMoney = playerMoney - 10;
        //     console.log("playerMoney", playerMoney);
        //     break;

        //     // subtract money from playerMoney for skipping
        //     // playerMoney = playerMoney - 2;
      }
      // if no (false), then ask the question again by running fight () again
      //   else {
      //     fight();
      //   }
      //   window.alert(playerName + " has chosen to skip the fight!");
      // } else {
      //   window.alert("You need to choose a valid option. Try again!");
      // }
    }
  }

  // The "for" loop has to be after the fight () function expression becuase we're calling the fight () function within the loop. IF the function isn't declared before the function call, it will error.
  for (var i = 0; i < enemyNames.length; i++) {
    // debugger;
    // this calls the fight function with enemy-robot
    // fight(enemyNames[i]);
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    // console.log(enemyNames[i]);
    // console.log(i);
    // console.log(enemyNames[i] + " is at " + i + " index");
  }
};

// The fun fight function starts the game
fight();
