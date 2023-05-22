# Store API
The store API provides functions that allow you to handle interactions with the store in OSRS. 

## Determine whether the store is open

```kotlin
if (!Store.opened()) {
    println("The store is not opened")
}
```

## Opening the store
The `open(npcName)` function opens the store. The parameter to the function is the NPCs name that you need to interact with to open the store.
```kotlin
if (!Store.opened()) {
    if (Store.open("Store owner")) {
        Condition.wait({Store.opened()}, 300, 10)
    }
}

## Closing the store
The `close()` function closes the store. 
```kotlin
if (Store.opened()) {
    if (Store.close()) {
        Condition.wait({!Store.opened()}, 300, 10)
    }
}


## Get a list of items in the store
The `items()` function returns a list of components for the items in the store.

```kotlin
if (Store.opened()) {
    Store.items().forEach { item -> println(item.name()) }
}
```

## Buying from the store.
The `buy(itemId, buyAmount)` function takes the itemId and the amount you wish to buy from the store as parameters.

```kotlin
if (Store.opened()) {
    val previousLobsterCount = Inventory.stream().id(Constants.LobsterId).count()
    if (Store.buy(Constants.LobsterId, 2)) {
        Condition.wait({Inventory.stream().id(Constants.LobsterId).count() > previousLobsterCount}, 300, 10)
    }
}
```

## Get the store name
```kotlin
if (Store.opened()) {
    val storeName = Store.shopName()
    println("Store name is $storeName")
}
```
