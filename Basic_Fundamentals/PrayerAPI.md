# Prayer API

The prayer API provides a way to manage prayer functionalities, including checking prayer status, getting prayer points, handling quick prayers and active prayers.

## Checking if any prayers are active
The `prayersActive()` function returns `true` if any prayers are currently active and `false` otherwise.

Example: 
```java
boolean prayersAreActive = Prayer.prayersActive();
System.out.println("Are prayers active? " + prayersAreActive);
```

## Check if a specific prayer is active
```java
boolean isActive = Prayer.prayerActive(Prayer.Effect.PROTECT_FROM_MELEE)
System.out.println("Is my prayer active? " + isActive);
```

## Check whether a prayer is in the quick prayer slot

```java
Effect prayer = Effect.PROTECT_FROM_MISSILES;
boolean isQuickPrayer = Prayer.prayerQuick(prayer);
System.out.println(prayer + " is in quick prayer slot: " + isQuickPrayer);
```

## Toggling quick prayer
Toggle the status of quick prayer based on the provied parameter

Example:
```java
Prayer.quickPrayer(true); // Activate quick prayer
Prayer.quickPrayer(false); // Disable quick prayer
```

## Check whether quick prayer is active
Returns `true` if quick prayers are currently active and `false` otherwise.

Example:
```java
boolean isQuickPrayerActive = Prayer.quickPrayer();
System.out.println("Quick prayer active: " + isQuickPrayerActive);
```

## Obtaining the remaining prayer points

```java
int currentPrayerPoints = Prayer.prayerPoints();
System.out.println("You have " + currentPrayerPoints + " prayer points remaining");
```

