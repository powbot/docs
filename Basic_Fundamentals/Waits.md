# Waits

Waits are useful or many things from anti-pattern sleeps to delays between actions to confirming an action took place. You can find more on this under the Fundamentals In Practice section under waits.

### Standard Sleep

A standard sleep will sleep for the time you pass to it as an integer in milliseconds.

```java
Condition.sleep(500);
```
This snippet will sleep your script for 500ms and then continue.

This however is NOT recommended. Why? Well no human waits exactly on the dot 500ms perfectly every time they complete an action. Then there's so many unanswered questions with this
for example how do you know 500ms is long enough? what about any lag? what if it failed the first time and it's then waiting 500ms for no reason? What about the un-human like pattern it creates?

### Conditional Waiting

Conditional waiting allows for a boolean or series of to be passed to it to check something is true or not to either continue or not continue sleeping.
This of it as a reaction wait.

Example;
Mine rock -> wait until ore is in my inventory -> mine another rock

```java
Condition.wait(()->boolean, time ms, attempts);
```

Above is the call and the params you're required to pass to it. Lets break it down.

boolean; this is firstly what you want to be true or false, so if we use my above example about mining an ore; the boolean would be whether the ore was mine or not.

time ms; this is how often to check if the boolean is true so in our case, we might check if the ore was mined every 150ms.

attempts; this one is how many times do we want to check the boolean before moving on. In our case, mining an ore shouldn't take longer than 5 seconds so I'll set attempts to 33.

This builds out code like so;

```java
rock.interact("Mine"); // Interacting with the rock
Condition.wait(()->!rock.valid(), 150, 33); //!rock.valid means the ore was mined and the rock is no longer valid, either we or someone else mined the rock.
```

The above code has a maximum wait time of 4950ms and minimum of 150. If the boolean of !rock.valid() returns true at any of the 33 checks, it will early exit. 
For example if it returns true on attempt 10, it'll early exit meaning you waiting 1500ms.

There will be more examples on this in the Fundamentals In Practice section under waits.