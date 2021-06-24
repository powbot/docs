# Objects

An object is classified as a something you can't pick up into your inventory and/or is a part of the game like a door or portal.
These items are filterable to return the specific object(s) that you want/need.

Objects have properties associated with them, some of them are listed below. There are many others so feel free to take a look into what other properties are involved with objects.
* ID (Integer) - This is the ID of the item, this is created by Jagex and is universal throughout all clients. For example, the ID for gold is 995.
* Name (String) - This is the name of the item.
* Tile (Tile) - This is the location in the game world in which the item sits on the floor, please see Locations.md for more information on tiles.
* Actions - Actions are the options you have when interacting with the object. For example a door if open would have a "Close" action and if closed and "Open action".

To filter objects you first need to return the stream, see the StreamAPI section for more info on this.
```java
int DOOR_ID = 1509;
GameObject door = ctx.objects.toStream().id(DOOR_ID).first();
```
In this scenario, we have cached the gameobject of a door.