# Npcs

A NPC is classified as a non-player character. These items are filterable to return the specific npc(s) that you want/need.

Npcs have properties associated with them, some of them are listed below. There are many others so feel free to take a look into what other properties are involved with npcs.

* ID (Integer) - This is the ID of the npc, this is created by Jagex and is universal throughout all clients. For example, the ID for gold is 995. Some npcs have multiple


* Name (String) - This is the name of the npc.


* Tile (Tile) - This is the location in the game world in which the item sits on the floor, please see Locations.md for more information on tiles.


* Combat Level (Integer) - This returns the combat level of the npc, for example a Rat, it could be level 3.

To filter a npcs you first need to return the stream, see the StreamAPI section for more info on this.

```java
int HANS_ID = 3105;
Npc hans = ctx.npcs.toStream().id(HANS_ID).first();
```
In this scenario, we have cached the npc hans.