# Prayer API

The prayer API provides a way to manage prayer functionalities, including checking prayer status, getting prayer points, handling quick prayers and active prayers.

## Checking if any prayers are active
The `prayersActive()` function returns `true` if any prayers are currently active and `false` otherwise.

Example: 
```kotlin
val prayersAreActive = Prayer.prayersActive()
println("Are prayers active? ${prayersAreActive}")
```

## Check if a specific prayer is activer


## Check whether a prayer is in the quick prayer slot

```kotlin
val prayer = Effect.PROTECT_FROM_MISSILES
val isQuickPrayer = Prayer.prayerQuick(prayer)
println("${prayer} is in quick prayer slot: ${isQuickPrayer}")
```

## Toggling quick prayer
Toggle the status of quick prayer based on the provied parameter

Example:
```kotlin
Prayer.quickPrayer(true); // Activate quick prayer
Prayer.quickPrayer(false); // Disable quick prayer
```

## Check whether quick prayer is active
Returns `true` if quick prayers are currently active and `false` otherwise.

Example:
```kotlin
val isQuickPrayerActive = Prayer.quickPrayer()
println("Quick prayer active: ${isQuickPrayerActive}")
```

## Obtaining the remaining prayer points

```kotlin
val currentPrayerPoints = Prayer.prayerPoints()
println("You have ${currentPrayerPoints} prayer points remaining")
```

