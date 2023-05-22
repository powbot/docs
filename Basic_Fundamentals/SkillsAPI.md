# Skills API

The Skills API provides a set of functions related to OSRS skills, experience and levels.

## Get the current level(Includes boosted)

Returns the level of the skill passed as the parameter. This includes boosted/depleted levels.

For example if your prayer was 30/70 the below example would return 30.

```kotlin
val prayerLevel = Skills.level(Skill.Prayer)
// returns 30
```

## Get the current real level(Non boosted)
The `realLevel()` function returns the core non boosted/depleted level for the skill.

For example if your prayer was 30/70 the below example would return 70.

```kotlin
val prayerLevel = Skills.realLevel(Skill.prayer)
// returns 70
```

## Get the time since experience was gained for a specific skill
The `timeSinceExpGained()` function returns the time in ms since experience was gained for a specific skill.

Example:
```java
long timeSinceLastExp = Skills.timeSinceExpGained(Skill.MAGIC);
System.out.println("Time since last experience in Magic: " + timeSinceLastExp + " ms");
```

## Obtaining the current experience for a skill
The `experience(Skill)` function will return the experience points for a given skill.
```java
long currentExp = Skills.experience(Skill.MAGIC);
```


## Obtaining the experience required until the next level
Returns the experience required to reach the next level for the skill passed as the parameter.

```kotlin
long expForNextLevel = Skills.experienceAtNextLevel(Skill.MAGIC);
System.out.println("Experience required for next level in Magic: " + expForNextLevel + " XP");
```