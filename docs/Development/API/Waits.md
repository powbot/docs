# Waits

Waits are useful for many things from anti-pattern sleeps to delays between actions to confirming an action took place. You can find more on this under the Fundamentals In Practice section under waits.

### Standard Sleep

A standard sleep will sleep for the time you pass to it as an integer in milliseconds.

```java
Condition.sleep(500);
```
This snippet will sleep your script for 500ms and then continue.

This however is NOT recommended. Why? Well, no human waits exactly on the dot 500ms perfectly every time they complete an action. Then, there are so many unanswered questions with this.
For example how do you know 500ms is long enough? What about any lag? What if it failed the first time and it's then waiting 500ms for no reason? What about the un-human like pattern it creates?

### Conditional Waiting

Conditional waiting allows for a boolean or series of booleans to be passed to it to check if something is true or not to either continue or to not continue sleeping.
Think of it as a reaction wait.

Example;
Mine rock -> wait until ore is in my inventory -> mine another rock

```java
Condition.wait(() -> boolean, time ms, attempts);
```

Above is the call and the parameters you're required to pass to it. Lets break it down.

Boolean: this is what you want to be true or false, so if we use my above example about mining an ore the boolean would be whether the ore was mined or not.

Time ms: this is how often to check if the boolean is true. So, in our case we might check if the ore was mined every 150ms.

Attempts: this is how many times we want to check the boolean before moving on. In our case, mining an ore shouldn't take longer than 5 seconds, so I'll set attempts to 33.

This builds our code like so;

```java
rock.interact("Mine"); // Interacting with the rock
Condition.wait(() -> !rock.valid(), 150, 33); // !rock.valid means the ore was mined and the rock is no longer valid. Either we or someone else mined the rock.
```

The above code has a maximum wait time of 4950ms and minimum of 150. If the boolean of !rock.valid() returns true at any of the 33 checks it will exit early.
For example if it returns true on attempt 10 it'll exit early meaning you waiting 1500ms.

There will be more examples on this in the Fundamentals In Practice section under waits.