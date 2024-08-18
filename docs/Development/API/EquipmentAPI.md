# Equipment API

## Check if the equipment tab is open

```java
boolean equipmentOpened = Equipment.opened();
System.out.println("Equipment open? " + equipmentOpened);
```

## Open the equipment tab
The `open()` function attempts to open the equipment tab. If successful it will return `true` else `false`

```java
if (!Equipment.opened()) {
    if (Equipment.open()) {
        Condition.wait(() -> Equipment.opened(), 300, 10)
    }
}
```

## Getting an item at a specific slot
The `itemAt(Slot)` function returns an instance of Item. If there is no item a the slot it will return a Nil instance of the Item object. 

```kotlin
Item item = Equipment.itemAt(Equipment.Slot.HEAD);
if (item != Item.Nil) {
    System.out.println("Item found was " + item.name());
}
```


# Available equipment slots
- `HEAD`
- `CAPE`
- `NECK`
- `TORSO`
- `LEGS`
- `HANDS`
- `FEET`
- `RING`
- `QUIVER`