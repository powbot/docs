# Widgets

Widgets are on screen components/interfaces such as the chat box, game tabs, world map, etc etc.

Widgets are the main umbrella parent to components. For example the widget 218 is the magic spell book. Inside this widget are all of the spell on screen components.

Widgets can be returned one of two ways currently. 

* Filtering the stream
* Static Widgets/Components

### Filtering the Widget Stream
Filtering the stream is the same as any other topic under the Stream API.

```java
Component component = Components.stream().widget(162).text("Click here to continue").viewable().first();
```

You'll notice I'm accessing the widget stream, then filtering on the text "Click here to continue", then filtering again on viewable, meaning it's currently present on screen, then returning the first one which meets this criteria.

### Static Widgets

In both desktop and mobile, the client contains a widget viewer which will show you a folder like structure of all the widgets and their components.
This can be filtered on the text to help locate the one you need.

Once you have your widget and component, you can refer to it in a static manner like so;

```java
Component component = Widgets.widget(162).component(5);
```

While the code seems simpler, in the long run, it's better to use the stream as you can dynamically return the component you need. OSRS often changes internal component ID's so 162, 5, in a months time, might be 162, 8.