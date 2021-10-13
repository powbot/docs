# Grand Exchange API

The Grand Exchange API is a new API that lets you interact with the Grand Exchange.


## Retrieving item prices
Retrieving item prices can be called from anywhere you do not need to be at the GrandExchange to retrieve an items price.

Typically this would be called on the `onStart` function however if you need it to be updated at multiple times during the script run this may be better placed elsewhere.

```java
@Override
public void onStart() {
    int RING_OF_RECOIL_ID = 2550;
    int ringOfRecoilPrice = GrandExchange.getItemPrice(RING_OF_RECOIL_ID);
}
```

## Opening and closing the Grand Exchange
To open you need to call the `open()` function.

```java
if (GrandExchange.open()) {
    //Do something here
}
```

and to check if the GrandExchange is open you can call the `opened()` function like so

```java
Boolean grandExchangeOpened = GrandExchange.opened();
```

to close the GrandExchange it is as simple as calling the `close()` function

```java
GrandExchange.close();
```

## Buying & selling items on the grand exchange
Buying and selling items on the Grand Exchange is relatively simple and can be handled through the `createOffer` function. You can use the same function to buy or sell by passing a true or false respectively as the last parameter.


```java
int quantity = 15;
int price= 999;
Boolean shouldBuy = false;

GrandExchangeItem geItem = GrandExchangeItem.Companion.fromName("Bronze arrow");
GrandExchange.createOffer(geItem, quantity, price, shouldBuy);
```

## Getting your Grand Exchange slots and checking the state of them
The Grand Exchange API offers a `allSlots()` function that returns an `ArrayList` of `GeSlot` you can then iterate through each slot and check the state of them as shown below

```java
ArrayList<GeSlot> slots = GrandExchange.allSlots();
slots.forEach(slot -> {
    if (slot.isAvailable()) {
        System.out.println("Slot is available");
    }
});
```

## Collecting offers
To collect an offer you need to call the `collectOffer` function which requires the Grand Exchange slot it is collection from. You can obtain the slot by iterating through the `allSlots()` return as shown below.

```java
ArrayList<GeSlot> slots = GrandExchange.allSlots();
slots.forEach(slot -> {
    if (slot.isFinished()) {
        GrandExchange.collectOffer(slot, GrandExchange.CollectMode.Noted)
    }
});
```

## Aborting offers
Similary to collecting offers you require the Grand Exchange slot to be passed to `abortOffer` you can do this by iterating the result of the `allSlots()` function as shown below. 

```java
ArrayList<GeSlot> slots = GrandExchange.allSlots();
slots.forEach(slot -> {
    if (!slot.isFinished() && !slot.isAborted()) {
        GrandExchange.abortOffer(slot)
    }
});
```

You should ensure you are not trying to abort an already aborted offer by checking `!slot.isAborted()` before attempting to abort.

