# Magic API

The Magic API allows you to interact with the magic book and spell casting within OSRS

## Cast
The Cast function has two ways of calling it

```java
cast(spell: org.powbot.api.rt4.Magic.MagicSpell)
```

And

```java
cast(spell: org.powbot.api.rt4.Magic.MagicSpell, action: kotlin.String?)
```

To cast a simple spell you can pass in a value from the Spell Enum like so

```java
Magic.cast(Magic.Spell.ENCHANT_LEVEL_1_JEWELLERY);
```

If the spell has multiple options such as the Camelot spell you can pass in the action you want it to perform

```java
Magic.cast(Magic.Spell.TELEOTHER_CAMELOT, "cast")
Magic.cast(Magic.Spell.TELEOTHER_CAMELOT, "animation")
```

## Checking if the spell is casting
You can check if the spell is casting by calling the `casting()` function which returns a boolean if a spell is casting

```java
Condition.wait(() -> Magic.casting(), 50, 100);
```

## Checking if a spell is ready
You can check whether a spell is ready to be casted by using the `ready()` function call and passing in the spell from the Spell enum like so

```java
boolean spellIsReady = Magic.ready(Magic.Spell.ENCHANT_LEVEL_1_JEWELLERY)
```

There are some caveats to this approach, a spell will only be ready if the spellbook is open. If the spellbook is not open it will always return false. You can wrap this in a conditional to ensure the Magic book is open when performing the check

```java
if (Condition.wait(() -> Game.tab(Game.Tab.MAGIC), 50, 10)) {
    boolean spellIsReady = Magic.ready(Magic.Spell.ENCHANT_LEVEL_1_JEWELLERY);
}
```