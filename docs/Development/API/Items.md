# Items

An item is classified as anything in your inventory. These items are filterable to return the specific item(s) that you want/need.

Items have properties associated with them, some of them are listed below. There are many others so feel free to take a look into what other properties are involved with items.
* ID (Integer) - This is the ID of the item, this is created by Jagex and is universal throughout all clients. For example, the ID for gold is 995.


* Name (String) - This is the name of the item.


* InventoryIndex (Integer) - This is the position in which the item sits in the inventory, for example, the first item in your inventory will be 0; this index runs from base 0 meaning it can be 0-27.


* Stacksize (Integer) - This is for stackable items, for example gold. If you withdraw 10 gold pieces, it sits in 1 inventory slot and stacksize will return 10.


To find items in your inventory, you need to stream them. The item stream is split up into the following segments
1. The where you want to look for the item (Bank, Equipment, Inventory). In our example, we're going to use an item in our inventory.
2. Any filters you want to narrow down your search for the item, for example, name() or id()
3. Get a single item result from your stream with first(). There are other options, for example firstOrNull(). first() is null safe and firstOrNull() as per the name isn't. Unless you're explicitly wanting to handle null values, stick with first().

```java
int GP_ID = 995;
Item gp = Inventory.stream().id(GP_ID).first();
```
In the above example, we used Inventory.stream() to access the items in our inventory, used id(GP_ID) as our filter to narrow down our search and then used .first() to give us the first result in that stream of items matching our criteria.

Below are some examples of what you can do with or use an 'Item' for.

## Eating food

This is one of the most common when it comes to scripts needing the use of items.
```java
String foodName = "Lobster";
Item lobster = Inventory.stream().name(foodName).first();
```
So we've filtered our inventory stream for any item with the name "Lobster" and then taken the first one.

We then have to check that our stream did in fact find a valid item to interact with using .valid().

```java
String foodName = "Lobster";
Item lobster = Inventory.stream().name(foodName).first();
if(lobster.valid()){
   lobster.interact("Eat");
}
```
Now we've added the .interact("Eat") which will look for the action you passed, in this case "Eat", and if not the first option, will look for it in the right click menu to select it.

## Combining items

To combine items, for example knife on logs, you need to stream for both items you wish to combine.

The first 2 lines below are just the same as we have done above, filter the stream for the item you want and return it with first().
After that, we again need to check if both items are valid and they actually exist before trying to interact with them.
```java
Item knife = Inventory.stream().name("Knife").first();
Item log = Inventory.stream().name("Logs").first();

if(knife.valid() && log.valid()){
    knife.useOn(log);    
}
```

## Using items on objects

This is very similar to the combining items section above, whereby you can stream both of your entities, an Item and a GameObject and use the useOn() method.
```java
Item lobster = Inventory.stream().name("Raw lobster").first();
GameObject range = Objects.stream().name("Range").first();
if(lobster.valid() && range.valid()){
        lobster.useOn(range);
}
```

## Dropping items

As you can probably imagine, there's a whole bunch of different ways to drop items, simply put you can stream the item, interact with it and drop it.
However, something quite useful if dropping multiple items is the drop() functionality as shown in the snippet below.

```java
List<Item> droppableItems = Inventory.stream().name("Vial", "Bones", "Burnt lobster", "Crushed gem", "Twisted bow").list();
Inventory.drop(droppableItems);
```
And as simple as that, it'll loop all items in your inventory that match any of the names provided and drop them all.
