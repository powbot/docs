# Magic API

The Magic API allows you to interact with the magic book and spell casting within OSRS

## Cast
Firstly, find your spell from the relevant spellbook.

```java
Magic.spell.X;
ArceuusSpell.spell.X;
LunarSpell.spell.X;
AncientSpell.spell.X;
```

To cast, simply call the .cast() method from your spell. Something to note, if the spell has multiple options such as the Camelot spell you can pass in the action you want it to perform
```java
Magic.Spell.HIGH_ALCHEMY.cast();
Magic.Spell.CAMELOT_TELEPORT.cast("Cast"); // this confirms what option you want to select
Magic.Spell.CAMELOT_TELEPORT.cast("Seers'"); // this confirms what option you want to select
```

## Checking if the spell is casting
You can check if the spell is casting by calling the `casting()` function which returns a boolean if a spell is casting

```java
Condition.wait(() -> Magic.HIGH_ALCHEMY.casting(), 50, 100);
```

## Checking if a spell is castable
You can check whether a spell is can be cast by using the `canCast()` function call.

```java
boolean canCast = Magic.Spell.Magic.Spell.ENCHANT_LEVEL_1_JEWELLERY.canCast();
```
There are some other methods available too for you to explore and use at your own pace.