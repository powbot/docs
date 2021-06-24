# Npc Interactions

This page's aim is to walk you through different types of npc interactions and how you can use them in real scenarios.

## Attacking Npc's

A very common scenario for early game bots is combat scripts.
Previously in the Basic Fundamentals section, we talked through how to stream the npcs in the area. For this case, I'm going to be using a goblin.

Most Npc's will have a different ID depending on their model, you can have multiple ID's for all the different goblin ID's out there. So when it comes to filtering Npc's I like to use names rather than ID's.
```java
    public String npcName = "Goblin";
```
Now I've have the name declared, lets filter them and attack the pesky goblins.

```java
public String npcName = "Goblin";
 Npc goblin = ctx.objects.toStream().name(npcName).nearest().first();
		if (goblin.inViewport()){
		    goblin.interact("Attack", npcName);
		    Condition.wait(()->!ctx.players.local().interacting().healthBarVisible(),150,10);
		}
```
So lets break down my filters.

Firstly I have my npcName which filters to all goblins in the loaded area.

Secondly, I use nearest() to take the one closest to me. This helps stop me running everywhere for goblins to kill.

So now we've filtered our npc stream for any we then need to take the first one using first().
