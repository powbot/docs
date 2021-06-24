# World Hopping

World hopping is something not many people include into scripts but others are a fundamental part, i.e. buying from shops.

This page's aim to guide you through a real example of how to use the API to include world hopping into your scripts.

for me personally, I like to store the worlds I want to hop to in an array. This means I get to choose the worlds which aren't pvp for example. For me, I feel safer having these pre-defined.

```java
public static final int[] f2p = {301, 326, 335, 371, 379, 380}; // I've shortened this list for example purposes, this is an array of f2p worlds
```

For those who don't know, java arrays are base 0, meaning item 1 has an index of 0, item 2 has an index of 1 and so on. Below is just a snip of how to return an item from an array at a specified index.

```java
system.out.println("First item = "+f2p[0]); // the [0] signifies i want the item with index of 0
system.out.println("Second item = "+f2p[1]); // the [1] signifies i want the item with index of 1, in this case the second item
```

If you wanted to hop in a random order or a random world you had listed you'd need to generate a random index to pull a world from.
 To generate a random number, the easiest way to do it is to use the api like so.
```java
int randomIndex = Random.nextInt(0,7);
int randomWorld = f2p[randomIndex];
```

Random.nextInt is inclusive exclusive, this means that it will generate a number including 0, but excluding 7 so 0 through to 6 as I have 6 worlds in my array

So now, you should be able to select which world you wish to hop to; mine is defined below.

```java
  int randomWorld = f2p[Random.nextInt(0, f2p.length-1)]; 
```
Rather than generate a random number first as I did above, I've done it in one line, I've also used f2p.length-1 meaning if I ever add more worlds, I don't need to increase the max random index to generate. We also -1 because it's base 0 meaning the first item is index 0 rather than 1 so each index is shifted back 1.

Now I create a world object and pass my randomWorld variable to it.
```java
World world = new World(ctx, randomWorld, 1, World.Type.FREE, World.Server.RUNE_SCAPE, World.Specialty.NONE);
```
Now all that's left is to actually hop to it!
```java
world.hop();
```
