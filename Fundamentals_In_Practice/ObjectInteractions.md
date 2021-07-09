# Object Interactions

This page's aim is to walk you through different types of object interactions and how you can use them in real scenarios.

## Mining Ore

This one is a common scenario. Mining, woodcutting, and other gathering scripts are some of the most popular.
Previously in the Basic Fundamentals section, we talked through how to stream the objects in the area. For this case, I'm going to be using iron ore.

So, I've started off by declaring the ID's of the ore I want to mine. Objects change IDs usually depending on what state they're in. For example, a depleted ore is different then a ready to mine ore.
An open door has a different ID then a closed door etc etc.

```java
public static final int[] ironOre = {11364, 11365};
```

Now that I have them defined, I want to mine them.

```java
GameObject rock = ctx.objects.toStream().within(2).id(ironOre).nearest().first();
if (rock.inViewport()) {
	rock.interact("Mine", "Rocks");
	Condition.wait(() -> ctx.objects.toStream().at(rock.tile()).id(main.oreIDs).isEmpty(), 150, 50);
}
```
So, let's break down my filters.

Firstly, I have within(2). This means I want all of the objects within 2 tiles of my character. This stops me running all over the place for iron ore.

Secondly, I'm passing the iron ore as an entire array to the id() filter. This will filter the stream to any of the IDs in my array.

Lastly, I use nearest() to take the one closest to me. This again helps stop me running everywhere for iron ore.

So, now we've filtered our object stream for any object that we need, and then we took the first one using first().


## Using items on objects

This is a rather big section already covered in [Inventory Interactions](/Fundamentals_In_Practice/InventoryInteractions) so, rather than repeat myself, go check it out!