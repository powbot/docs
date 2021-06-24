# Inventory Interacting

This page's aim is to walk you through different types of inventory interactions and how you can use them in real scenarios.

On this page we'll have


## Eating food

This is one of the most common when it comes to scripts needing the use of items.
Previously in the Basic Fundamentals section, we talked through how to stream the items in the inventory. For this case, I'm going to be using lobsters.

```java
String foodName = "Lobster";
if(ctx.game.tab(INVENTORY)){
	
        }
```
This is simply opening the inventory tab, I wrap it in an if statement as it returns true if it's already open and also true when it's finished opening it.

So now we know the inventory is open, we need to stream our food item.
```java
String foodName = "Lobster";
if(ctx.game.tab(INVENTORY)){
	    Item lobster = ctx.inventory.toStream().name(foodName).first();
        }
```

So now we've filtered our inventory stream for any item with the name Lobster, then taken the first one.

```java
String foodName = "Lobster";
		if(ctx.game.tab(INVENTORY)){
		    Item lobster = ctx.inventory.toStream().name(foodName).first();
		    lobster.interact("Eat");
		}
```

Now we've added the interact("Eat") which will look for the action you passed, in this case "Eat", and if not the first option, will look for it in the right click menu to select it.


## Selecting item

This uses the same first step, always check your inventory is open and THEN interact.
```java
String itemName = "Knife";
if(ctx.game.tab(INVENTORY)){
	Item knife = ctx.inventory.toStream().name(itemName).first();
	knife.interact("Use");
        }
```


## Combining items

To combine items, for example knife on logs, you have to go through the Selecting Items steps first. However, you'll want to make sure the knife is selected before using it on the logs, so we can split into 2 sections.

Your inventory has a selectedItem() property which you can access like so;
```java
Item selectedItem = ctx.inventory.selectedItem();
```
With this, you can check things like it's index, name, id etc. So now we can get this, we need to see if we have anything selected before we try to select the knife.

To do so, you'll have to check the selectedItem() properties for the id() to see if it's null (-1 in this case being an integer).

```java
Item selectedItem = ctx.inventory.selectedItem();
		if(ctx.inventory.selectedItem().id()==-1){
			system.out.println("Nothing selected");
		} else {
			system.out.println("Item selected: "+selectedItem.name());
        }
```
In the above snippet, if there is nothing selected, it'll print out "Nothing selected" otherwise it'll print out the items name. Now to bring all of these together.

```java
String itemName = "Knife";
String itemName2 = "Oak Logs";
if(ctx.game.tab(INVENTORY)){
	Item knife = ctx.inventory.toStream().name(itemName).first();
	Item log = ctx.inventory.toStream().name(itemName2).first();
	if(ctx.inventory.selectedItem().id()==-1){
		knife.interact("Use");
        } else if(ctx.inventory.selectedItem().id()==knife.id()){
		log.interact("Use");
	}
}
```

## Using items on objects

This again uses all of the steps above so I'll just touch on the changes from the combining items section.

Rather than a knife and log, I'll use raw lobster on a range. The only main difference is we need to use an object as our second part rather than an object.

```java
String itemName = "Raw lobster";
String objectName = "Range";
if(ctx.game.tab(INVENTORY)){
	Item lobster = ctx.inventory.toStream().name(itemName).first();
	GameObject range = ctx.objects.toStream().name(objectName).first();
	if(ctx.inventory.selectedItem().id()==-1){
		knife.interact("Use");
        } else if(ctx.inventory.selectedItem().id()==knife.id()){
		range.interact("Use");
	}
}
```

