# Combat API

## Enabling Autoretaliate
The autoRetaliate method is used to enable or disable the auto retaliate feature in combat. It accepts a boolean parameter, where true turns on auto retaliate and false turns it off. It returns a boolean indicating whether the operation was successful. The autoretaliate function will handle the tab selection for you.

```java
boolean setAutoRetaliate = Combat.autoRetaliate(true);
if(setAutoRetaliate){
    System.out.println("Auto retaliate set successfully");
}else{
    System.out.println("Failed to set auto retaliate");
}
```

## Retrieving the wilderness level
The wildernessLevel method returns the wilderness level of the player, which is -1 if the player is not in the wilderness.

```java
int wildernessLevel = Combat.wildernessLevel();
if(wildernessLevel != -1){
    System.out.println("The player is in the Wilderness at level " + wildernessLevel);
} else {
    System.out.println("The player is not in the Wilderness.");
}
```

## Getting the current combat style
The Style enum is used to represent different combat styles. Options include ACCURATE, AGGRESSIVE, CONTROLLED, and DEFENSIVE.

```java
Combat.Style currentStyle = Combat.style();
System.out.println("Current combat style: " + currentStyle);
```


## Setting your Combat style
The `style()` function takes a Combat.Style enum as a parameter the available options are

- DEFENSIVE
- AGGRESSIVE
- ACCURATE
- CONTROLLED

```java
boolean setStyle = Combat.style(Combat.Style.ACCURATE);
if(setStyle){
    System.out.println("Combat style set successfully");
}else{
    System.out.println("Failed to set combat style");
}
```

## Getting your health percentage

```java
int healthPercent = Combat.healthPercent();
System.out.println("Player health percent: "+ healthPercent);
```

## Get the players max HP
The maxHealth method returns the maximum health level of the player. Here is how you can use it:

```java
int maxHealth = Combat.maxHealth();
System.out.println("Player max health: " + maxHealth);
```

## Checking and using special attacks

```java
boolean hasSpecialAttack = Combat.specialAttack();
if (hasSpecialAttack) {
    boolean setSpecialAttack = Combat.specialAttack(true);
    if (setSpecialAttack){
        System.out.println("Special attack set successfully");
    }else{
        System.out.println("Failed to set special attack");
    }
}
```

## Checking special percentage
The specialPercentage method returns the current percentage of the player's special attack energy.

```java
int specialPercentage = Combat.specialPercentage();
System.out.println("Special attack energy percentage: " + specialPercentage + "%");
```


## Check if you're in a multi-combat zone
The inMultiCombat method returns true if the player is in a multi-combat zone, and false otherwise. 

```java
boolean inMultiCombat = Combat.inMultiCombat();
if (inMultiCombat){
    System.out.println("Player is in multi-combat zone");
}else{
    System.out.println("Player is not in multi-combat zone");
}
```

