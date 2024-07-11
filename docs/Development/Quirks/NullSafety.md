# Null Safety

The majority of the PowBot API is considered NullSafe. This means that when streaming for objects within the game you should not expect to receive a `null` value the API will instead return a special object to signify the absence of a value.

## Using the API

Example usage:
```java
Npc goblin = Npcs.stream().name("Goblin").within(10).nearest().first()
```

Here we're streaming all `Npcs` and filtering them within 10 tiles where the Npcs name is `Goblin` choosing the nearest and then getting the first result. In other APIs if there were no goblins found within those conditions the variable `goblin` would be `null` but in the Powbot API this is not the case.

When you callk first on a stream if no matches are found, the API will return an instance of `Npc.Nil` instead of `null`. The `Npc.Nil` is effectively a blank NPC object and is completely safe to call methods on, calling the methods on the class would simply return default values.

## Handling Nil

Here is how you can check against `Nil` values

```java
Npc goblin = Npcs.stream().name("Goblin").within(10).nearest().first()

if (goblin == Npc.Nil) {
    System.out.println("We couldn't find a goblin")
    return
}
```

In the above snippet the code returns early if there are no goblins found. This ensures your script does not throw a `NullPointerException` if you try to call a method on a Nil goblin.



