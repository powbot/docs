# Bank API

The Bank API allows you to interact with the Bank within OSRS, it handles everything from opening the bank to interacting with items within the bank.

## Bank Tab
To retrieve the current tab of the bank you can use the `currentTab` function which will return an integer value of the current tab open in the bank.

```java
int currentOpenTab = Bank.currentTab();
```

To open a specific tab in the bank you can pass the index of the tab to the `currentTab` function like so

```java
if (Bank.currentTab(4)) {

}
```

## Depositing
There are multiple functions to provide support for depositing items into the bank.

### Using Item Ids

```java
int itemId = 1;
int amountToDeposit = 12;
Bank.deposit(itemId, amountToDeposit);
```

```java
int itemId = 1;
Bank.deposit(itemId, Bank.Amount.ALL)
```

### Using Item Strings
```java
String itemName = "Ring of recoil";
int amountToDeposit = 12;
Bank.deposit(itemName, amountToDeposit);
```

```java
String itemName = "Ring of recoil";
int amountToDeposit = 12;
Bank.deposit(itemName, Bank.Amount.ALL);
```

## Depositing with exceptions
Sometimes you may want to deposit all items except for a specific item e.g a pickaxe when you're mining. The Bank API offers a function called `depositAllExcept()` that does exactly this.

```java
Bank.depositAllExcept("item1", "item2", "item3");
```
```java
int id1 = 122;
int id2 = 145;
int id3 = 198;

Bank.depositAllExcept(id1, id2, id3);
```


## Checking if the bank is in the viewport
Before interacting with the bank you check if the bank is in the current viewport you can do this by calling the `inViewport` function.

```java
if (Bank.inViewport()) {
    //Do something with the viewport
}
```

## Opening the bank
To open a bank you need to check if the Bank is in the viewport and then call `Bank.open()` to open the bank.

```java
if (Bank.inViewport()) {
    Condition.wait(() -> Bank.open(), 50, 10);
}
```

## Retrieving the nearest bank
To get the nearest bank you can call `Bank.nearest()` however the bank must be loaded for this to work, so if you're in a cave `Bank.nearest()` will return null. `Bank.nearest()` returns a Locatable type if a bank can be found.

```java
Locatable nearestBank = Bank.nearest();
```

## Checking if the bank is open
Before interacting with the items in your bank you will want to check if the bank is open you can do this by calling `Bank.opened()`

```java
Boolean bankIsOpen = Bank.opened();
```

## Withdrawing from the bank
Withdrawing from the bank is a similar process to depositing to the bank

### Using Item Ids

```java
int itemId = 1;
int amountToDeposit = 12;
Bank.withdraw(itemId, amountToDeposit);
```

```java
int itemId = 1;
Bank.withdraw(itemId, Bank.Amount.ALL)
```

### Using Item Strings
```java
String itemName = "Ring of recoil";
int amountToDeposit = 12;
Bank.withdraw(itemName, amountToDeposit);
```

```java
String itemName = "Ring of recoil";
int amountToDeposit = 12;
Bank.withdraw(itemName, Bank.Amount.ALL);
```