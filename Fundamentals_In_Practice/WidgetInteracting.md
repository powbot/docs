# Widget Interactions

This page's aim is to walk you through different types of widget interactions and how you can use them in real scenarios. 

What you might not know, is a lot of the API is an interface to dealing with widgets. For example your inventory and banking API is all done by using widgets.

## Static Widgets

### Getting Values

Previously in the Basic Fundamentals section, we talked through static widgets and how to briefly use one.

Static widgets have their benefits, including the speed of directly using a widget rather than having the client filter for it.

In my MLM script I use a static widget to return the number of pay-dirt in the sack as shown in the top left corner of the screen.

That widget is defined in my script as so;
```java
public Component SACK_COUNT = ctx.widgets.widget(382).component(3).component(2);
```
I can then in my tasks refer to the value of the text by using the following:
```java
Integer.parseInt(main.c.SACK_COUNT.text())>10;
```

Again in the basic fundamentals, I spoke about some of the drawbacks to using static widgets. The main one being the fact that these component values can change.
Meaning the 382, 3, 2 may in the future be 382, 4, 3. This would require me to update my script with future updates.

### Interacting

Interacting with the widgets is very much the same as interacting with the rest of the games entities as the API keeps it nice and simple.

I've defined 2 components, one is the main widget for the spell book. The second is the high alch component
```Java
public int spellBookWidget = 218;
public int highAlchComponent = 38;
```

This means I can do the following, 

A: Check it's visible

B: Click it

C: Wait till the inventory is open

### Disclaimer, there's an entire magic API, this is just an example.

```Java
if(ctx.widgets.widget(spellBookWidget).component(highAlchComponent).visible()){
	ctx.widgets.widget(spellBookWidget).component(highAlchComponent).click();
	Condition.wait(()->ctx.game.tab()==Game.Tab.INVENTORY, 150, 10);
}
```

## Component Stream / Dynamic Filtering

Here we can now use variables to return a component dynamically. This is great for future proofing your script against component changes.

You can do this just like querying in any of the other API streams.

```Java
public int spellBookWidget = 218;
public int varrockSpellTexture = 27;
if(ctx.components.toStream().widget(spellBookWidget).texture(varrockSpellTexture).viewable().isNotEmpty()){
	ctx.components.toStream().widget(spellBookWidget).texture(varrockSpellTexture).viewable().first().click();
}
```

Here I've checked the stream is currently not empty for a widget under 218 with the texture 27. Then we filter the stream and bring the first() forward and click it.

### Disclaimer, there's an entire magic API, this is just an example.