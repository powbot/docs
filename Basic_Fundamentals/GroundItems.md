# Ground Items

A GroundIem is classified as anything that can be picked up from the floor into your inventory. These items are filterable to return the specific grounditem(s) that you want/need.

GroundItems have properties associated with them, some of them are listed below. There are many others so feel free to take a look into what other properties are involved with grounditems.
* ID (Integer) - This is the ID of the item, this is created by Jagex and is universal throughout all clients. For example, the ID for gold is 995.
* Name (String) - This is the name of the item.
* Tile (Tile) - This is the location in the game world in which the item sits on the floor, please see Locations.md for more information on tiles.
* Stacksize (Integer) - This is for stackable items, for example gold. If you withdraw 10 gold pieces, it sits in 1 inventory slot and stacksize will return 10.

To filter a grounditem you first need to return the stream, see the StreamAPI section for more info on this.
```java
int GP_ID = 995;
GroundItem gp = ctx.groundItems.toStream().id(GP_ID).first();
```
In this scenario, we have cached the grounditem of coins from the floor.