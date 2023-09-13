# Using Waits

This one can be controversial, some may do the same as I, some may not, but the aim is to show how you can use waits to your advantage.

## How Not to Wait!

```java
mineOre();
Condition.sleep(1500);
dropOre();
Condition.sleep(500);

```

So I've seen this more times than I care to count. But what's actually wrong with it?

Firstly, it creates a systematic pattern. No human will wait 1500ms every time after they've clicked an ore, nor 500ms after dropping an ore... Our knowledge of the ban detection system is that it uses patterns and profiling to help detect bots. STOP THIS.

Also, using this means you have no validation in your timings. You could try to drop the ore before you've finished mining it. You could try to mine again before you finished mining.
You could wait longer than needed because you mined in 1 tick and got lucky.

## How Then?

[Conditional.wait()](/Basic_Fundamentals/Waits)

These can be so much more useful than people think. I use mine as a reaction. It essentially allows me to react to the boolean dynamically rather than waiting for a fixed time.

### Selecting an Item
Take this snippet here, someone on discord asked how to slow down the script because it was clicking on the chicken and then on the range too quickly.

I first filter and select the raw chicken, then have a conditional wait which returns true if exited early, inside of an if-statement to then use it on the cooking pot.

```java
Item rawChicken = Inventory.stream().id(Constants.RAW_CHICKEN).first();
rawChicken.interact("Use");
if (Condition.wait(() -> Inventory.selectedItem().id() == Constants.RAW_CHICKEN, 150, 10)) {
	GameObject cookingPot = Objects.stream().id(Constants.COOKING_POT).nearest().first();
	cookingPot.interact("Use");
}
 ```

This wait has a maximum of 1500ms, which in this scenario is a little excessive but a minimum of 150ms however if there was any lag, for example which delayed the action, this is perfect for you.

### Cutting a Tree

So what happens after you click on a tree to cut it? 
* You run over to the tree
* Your animation changes
* Your inventory starts filling up
* Tree dies

So, here's how I handle all of that using waits as my best friend.

So, I'll first cache the tree and then interact with it

```java
GameObject tree = Objects.stream().within(10).name(main.treeName).nearest().first();
if (tree.inViewport()) {
	tree.interact("Chop down", main.treeName);
	Condition.wait(() -> Players.local().animation() != -1 && !Players.local().inMotion(), 100, 20);
}
```
So, here I've added a conditional wait to check if my animation is not -1, which is the idle animation, meaning I'm cutting the tree AND I'm not in motion, meaning my ID can't be that of someone running as they would be in motion.

So, I've handled the running over to the tree and waiting till I've started cutting the tree. So up until now, it won't spam the tree until I'm already cutting it.

However, this is where I change it up and add the second. I now need to know if the first wait returned true, i.e. exited early because the boolean is true. If it is I want to wait until the tree is gone or my inventory is full. 
If not, then I don't want to wait any longer as I may have misclicked and need to click on the tree again.

```java
GameObject tree = Objects.stream().within(10).name(main.treeName).nearest().first();
if (tree.inViewport()) {
	tree.interact("Chop down", main.treeName);
	if (Condition.wait(() -> Players.local().animation() != -1 && !Players.local().inMotion(), 100, 20)){
		Condition.wait(() -> Objects.stream().at(tree.tile()).id(tree.id()).isEmpty() || Inventory.stream().count() == 28, 250, 20);
	}
}
```

So, as you can see I'm checking that the tree is now empty OR my inventory count is 28 meaning it's full. If either of these return true, I need to either find a new tree, drop the logs, or bank my logs, so I no longer want to wait.

