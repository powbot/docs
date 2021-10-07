# Npc Interactions

This page's aim is to walk you through different types of npc interactions and how you can use them in real scenarios.

## Attacking Npcs

A very common scenario for early game bots is combat scripts.
Previously, in the Basic Fundamentals section, we talked through how to stream the npcs in the area. For this case, I'm going to be using a goblin.

Most Npcs will have a different ID depending on their model. You can have multiple IDs for all the different goblin models out there. So, when it comes to filtering npcs I like to use names rather than IDs.

```java
public String npcName = "Goblin";
```

Now I've have the name declared, lets filter them and attack the pesky goblins.

```java
public String npcName = "Goblin";
Npc goblin = Objects.stream().name(npcName).nearest().first();
if (goblin.inViewport()) {
	goblin.interact("Attack", npcName);
	Condition.wait(() -> !Players.local().interacting().healthBarVisible(), 150, 10);
}
```

So, let's break down my filters.

Firstly I have my npcName which filters to all goblins in the loaded area.

Secondly, I use nearest() to take the one closest to me. This helps stop me running everywhere for goblins to kill.

So, now we've filtered our npc stream for any npc that we need, and then we took the first one using first().
