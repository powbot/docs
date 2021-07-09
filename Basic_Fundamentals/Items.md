# Items

An item is classified as anything in your inventory. These items are filterable to return the specific item(s) that you want/need.

Items have properties associated with them, some of them are listed below. There are many others so feel free to take a look into what other properties are involved with items.
* ID (Integer) - This is the ID of the item, this is created by Jagex and is universal throughout all clients. For example, the ID for gold is 995.


* Name (String) - This is the name of the item.


* InventoryIndex (Integer) - This is the position in which the item sits in the inventory, for example, the first item in your inventory will be 0; this index runs from base 0 meaning it can be 0-27.


* Stacksize (Integer) - This is for stackable items, for example gold. If you withdraw 10 gold pieces, it sits in 1 inventory slot and stacksize will return 10.


To filter an item you first need to return the stream, see the StreamAPI section for more info on this.

```java
int GP_ID = 995;
Item gp = ctx.inventory.toStream().id(GP_ID).first();
```
In this scenario, we have cached the item in our inventory.