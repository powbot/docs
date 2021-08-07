# Walking to Locations

Walking to locations can be used in all manner of scripts. Whether it be from a bank to the furnace or from Lumbridge to GE. Either way we need to be abl to navigate around the game.

## Simple Navigation

To begin, straight line navigation is the simplest. In this scenario we're going to walk from Edgeville bank to Edgeville furnace.

```java
ctx.movement.step()
```
This is the method we'll use. Step will use the minimap to select the closest tile it can to the destination we provide. Meaning if there were no obstacles, we could run in a straight line anywhere on the map is we looped this method.

However, with the furnace being close by and visible from the bank on the minimap, step() is the best method to use here.

```java
Tile furnace = new Tile(3108, 3498, 0);
ctx.movement.step(furnace);
```
This will then walk to the furnace. However, you may notice some spamming. let's add in a few conditional waits while we're at it.

```java
Tile furnace = new Tile(3108, 3498, 0);
ctx.movement.step(furnace);
if(Condition.wait(()->ctx.players.local().inMotion(),50, 15)){
		Condition.wait(()->!ctx.players.local().inMotion(),150, 25);
        }
```
Here I use 2 waits, I use the first one, wrapped in an if statement as it returns true if it early exits, false if it times out, we can then confirm that we successfully started moving before we wait longer. 
The first wait is shorter so if it fails, it'll loop again and try to walk to the furnace. The second wait is longer to give us change to get to the furnace
and move on to the next task without spam clicking the map.

## Web Walking

Web walking, put simply, is an all-in-one solution to navigating the game. You provide the destination and then the method handles the rest.

To use it in a simple way, we'll use mining in south-west Varrock as our example.

The beauty of the web walker is you don't need to provide anything other than where you want to go, so it's as simple as:

```java
Tile bank = new Tile(3185, 3437, 0);
ctx.movement.moveTo(bank);
```
This may take a second or two to calculate the path and requirements etc but will then walk you up to the bank.

It's really as simple as that.

### What if it's not that simple though? 

Well if you want more control over the walking, or you want to use a bank that you don't know the tile of, i.e, it's a multi-purpose woodcutter that can be used anywhere,
rather than asking the user for their bank location, we can just use the web to find one.

This is done with the builder.

```java
Tile bank = new Tile(3185, 3437, 0);
ctx.movement.builder(bank).setRunMin(45).setRunMax(75);
```
This snippet here will walk to the tile provided however it will turn your run back on if it's between the 45 and 75 as the normal moveTo() method
turns it on >0.

So great, now we can control when run gets turned back on. However if we want to navigate to the nearest bank but the user could be anywhere, we can't pre-programme which bank to use.

```java
Tile bank = new Tile(3185, 3437, 0);
ctx.movement.builder(null).setToBank(true).setRunMin(45).setRunMax(75);
```
Keeping the setRunMin and setRunMax at the same values and passing a null value as our locatable allows us to then add in the setToBank() method to the builder to search the web and find the nearest bank.
