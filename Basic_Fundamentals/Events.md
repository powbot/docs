# Events

Events are dispatched both as a result of in game event changes and client event changes. The list of events currently supported are:

- BreakEvent
  - Called 5 seconds before a break is about to start, you can delay a break by calling `event.delay(millis)`.
  - Called whenever you perform an ingame action
- InventoryChangeEvent
  - Called whenever your players inventory changes
- KeyEvent
  - Called whenever a key is pressed/released on the keyboard
- MessageEvent
  - Called whenever an ingame message is received
- RenderEvent
  - Called during the client rendering loop, you can do custom drawing on the screen here
- SkillExpGainedEvent
  - Called whenever you gain exp in any skill  
- SkillLevelUpEvent
  - Called whenever you gain a level in any skill 
- TickEvent
  - Called every game tick (roughly 600ms)
- TouchEvent
  - Called whenever a touch press/drag/release occurs
- VarpbitChangedEvent 
  - Called whenever a varpbit changes in game
- PaintCheckboxChangedEvent
  - Called whenever someone toggles a checkbox in a paint, has the current checked value.

You can also click [here](https://docs.powbot.org/jdocs/app/org.powbot.api.event/index.html) to see the relevant java docs.

**It is very important that any methods you have which subscribe to events don't have any blocking logic and execute fast. Having code like `Condition.wait { !Players.local().isIdle() }` will cause the client to not function correctly, methods which handle events should just be used to update state rather than perform any interactions/sleeps.**

## Subscribing to an event

Subscribing to an event is simple, you just need to annotate a method which takes the event you wish to subscribe to with the `@Subscribe` annotation, for example:

```kotlin
    var returned = 0
    
    @com.google.common.eventbus.Subscribe
    fun onInventoryChange(change: InventoryChangeEvent) {
        if (change.quantityChange > 0 && change.itemName == "Book of arcane knowledge") {
            returned++
        }
    }
```

Placing this method inside the body of your main script class will work, however if you wish to place it in a different class you will need to register the instance of that class to the event bus by using `Events.register(obj)`. For example:

```kotlin
class SomeTask: Task {
    var returned = 0
    
    @com.google.common.eventbus.Subscribe
    fun onInventoryChange(change: InventoryChangeEvent) {
        if (change.quantityChange > 0 && change.itemName == "Book of arcane knowledge") {
            returned++
        }
    }
}

class MyScript: AbstractScript() {
    val tasks = mutableListOf<Task>()
    
    override fun onStart() {
        val someTask = SomeTask()
        tasks.add(someTask)
        Events.register(someTask)
    }
}
```
