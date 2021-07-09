# GroundItem Interactions

This page's aim is to walk you through different types of GroundItem interactions and how you can use them in real scenarios. Although, there's only really one scenario for ground items, and that's picking them up..

## Looting Specific Items

Previously in the Basic Fundamentals section, we talked through how to stream the GroundItems in the area.

I've started off by declaring the items I want to loot.

```java
public String[] wantedItems = {"Cowhide", "Bones", "Raw beef"};
```
Now I've have them defined, I want to loot them.

```java
GroundItem groundItem = ctx.groundItems.toStream().within(15).name(wantedItems).nearest().first();
if (groundItem.inViewport()){
	groundItem.interact("Take", groundItem.name());
}
```
So, let's break down my filters.

Firstly, I have within(15). This means I want all of the GroundItems within 15 tiles of my character. 
This stops me from running all over the place for loot or going too far away.

Secondly, I'm passing the names I declared earlier as an entire array to the name() filter. 
This will filter the stream to any of the names in my array.

Lastly, I use nearest() to take the one closest to me. This again helps stop me from running everywhere for loot.

### Spamming?
Don't forget to set a wait otherwise you'll spam like mad.

Here I firstly check the count of the item on the floor. There could be 4 sets of cowhides so by checking if cowhide is empty it will get stuck waiting.

```java
GroundItem groundItem = ctx.groundItems.toStream().within(15).name(wantedItems).nearest().first();
if (groundItem.inViewport()) {
	int invCount = ctx.groundItems.toStream().id(groundItem.id()).at(groundItem.Tile()).count();	
	groundItem.interact("Take", groundItem.name());
	Condition.wait(() -> ctx.groundItems.toStream().id(groundItem.id()).at(groundItem.Tile()).count() < invCount, 50, 150);
}
```

The wait I do here checks that the number of GroundItems at the tile, with the id of the item we want, is now less after I've tried to pick it up than before. This way, if the item despawns or I've looted it, it'll exit early.


## I'm struggling to interact with the ground items??!?!

Sometimes the bounds and models used in the client can often leave you struggling to accurately pick things up. I've seen many people struggling with writing something to pick up marks of grace.
With them being flat on the tile I've suggested to interact with the tile itself.

This is a little bit of a hacky work around but it works wonders some times and we start off the exact same way. We still need to find and cache our mark of grace and check that it's in the viewport.

```java
GroundItem groundItem = ctx.groundItems.toStream().within(10).name("Mark of grace").nearest().first();
if (groundItem.inViewport()){
	
}
```

However, there are 2 things here which will change. Firstly, we're not interacting with the item but instead we want to interact with the tile/floor like it's an object. 

The second is the wait. As marks of grace only spawn 1 at a time you can just check if it's empty.

```java
groundItem.tile().matrix(ctx).interact("Take", "Mark of grace");
Condition.wait(() -> ctx.groundItems.toStream().id(groundItem.id()).at(groundItem.tile()).isEmpty(), 150, 50);
```

So that makes the whole snippet:

```java
GroundItem groundItem = ctx.groundItems.toStream().within(10).name("Mark of grace").nearest().first();
if (groundItem.inViewport()) {
	groundItem.tile().matrix(ctx).interact("Take", "Mark of grace");
	Condition.wait(() -> ctx.groundItems.toStream().id(groundItem.id()).at(groundItem.tile()).isEmpty(), 150, 50);
}
```

Again, this is a work around and can often work with objects too, especially agility ones.