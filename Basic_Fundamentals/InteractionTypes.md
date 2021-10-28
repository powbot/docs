# Interaction Type

Most of the time you don't need to worry about changing interactiont types however if you notice a lot of misclicks it may be worth trying each type. Using `Model` is least preferred.

Interaction types determine the method to calculate the bounds for an entity, the bounds is used when calculating click points. Interaction types apply to any entity which has a model:

- Npc
- Player
- Ground Item
- Game Object

There are three different interaction types which can be used:

- HullQuick
  - This uses a [convex hull](https://en.wikipedia.org/wiki/Convex_hull) of the model to calculate the bounds. 
  - It is the **default** interaction type.
  - It is very fast to calcluate.
  - It can be inaccurate.
  - Because it's fast to calculate we can calculate it right before the click is invokved, this improves clicks for interacting while moving or interacting with moving entities.
- HullAccurate
  - This uses a [concave hull](https://www.youtube.com/watch?v=0Dom4EglbjE) of the model to calculate the bounds.
  - It can be slow to calculate especially on larger models
  - It is very accurate
  - Because it's slow to calculate we can't calcuate it at click time, this means accuracy is lower when interacting while moving or interacting with moving entities.
- Model
  - This uses the RS model of the entity directly (is composed of many triangles) to calcualte the bounds
  - It is very fast to calculate.
  - It generates click points which could be argued are less human like.
  - It is usually accurate but camera position, distance etc can impact it.
  - Because it's fast to calculate we can calculate it right before the click is invokved, this improves clicks for interacting while moving or interacting with moving entities.

You can control which interaction type to use in two different places:

1. When interacting with an entity
  - `goblin.interactionType(ModelInteractionType.HullAccurate).interact("Attack")`
  - This will use `HullAccurate` only when interacting with the goblin at that line of code.
2. Via the InteractionManager
  - `InteractionManager.setNpcInteractionType("Goblin", ModelInteractionType.HullAccurate)`
  - This will use `HullAccurate` whenever interacting with a Goblin in your script unless you override the `interactionType` like in place **1.**
