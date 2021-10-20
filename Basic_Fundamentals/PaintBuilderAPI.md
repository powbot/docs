# PaintBuilder API

The PaintBuilder API is a simple API that provides an easy way to display paint for your bit with in-built progress tracking various in game events such as levelling up.

### Creating the builder

The PaintBuilder is a fluent API meaning you can call numerous functions on the API before building it.

```java
PaintBuilder.newBuilder().build();
```

```java
PaintBuilder.newBuilder()
    .y(50)
    .x(55)
    .build();
```

### Positioning your paint
To position your paint you can set the paint on the `X` and `Y` axis of the emulator by calling the `x()` and `y()` functions like so

```java
PaintBuilder.newBuilder()
    .y(45)
    .x(55)
    .build()
```

### Tracking Skill

The PaintBuilder has in-built methods for tracking skills.
Without passing skill options, the paintbuilder will handle it all and display all the fields.

```java
PaintBuilder.newBuilder()
    .trackSkill(Skill.Fishing)
    .build();
```

#### Tracking Skill Options

If you wanted to only display for example the experience gained you can pass skill options to customise the paint to your liking as below.
```java
PaintBuilder.newBuilder()
    .trackSkill(Skill.Fishing, "This is a custom label", TrackSkillOption.Exp)
    .build()
```

The `TrackSkillOption` enum provides 4 options

```java
TrackSkillOption.Exp
TrackSkillOption.Level
TrackSkillOption.LevelProgressBar
TrackSkillOption.TimeToNextLevel
```

### Track Items

Along with tracking skills, we can also track items or inventory changes. For example someone looting molten glass would want to know how much glass they've looted.

Similarly to the above, you can pass the item to the call and let the builder do the rest, or your can pass options later.

```java
PaintBuilder.newBuilder()
		.trackInventoryItem(c.MOLTEN_GLASS_ID, "Molten Glass")
		.build()
```
To change the display on what details are shown, you can pass TrackInventoryOption with the following variables
```java
TrackInventoryOption.QuantityChange
TrackInventoryOption.valueOf()
TrackInventoryOption.values()
TrackInventoryOption.Price
```

### Custom Strings
Sometimes the paint builder doesn't offer the exact method you need to track what you need. In this case you can use custom strings to display information that you're tracking yourself.

To add a custom string to the output paint you can call the `addString()`. This takes a string and a callable, if you're new to callables, Intellij will practically write it for you however
they can be written like so.

```java
PaintBuilder.newBuilder()
		.addString("Method: ", new Callable<String>() {
                     @Override
                     public String call() throws Exception {
                     	return userMethod;
		            }
		})
    .build()
```
Shown here is me storing the user selected method to a variable 'useMethod' and displaying it on the paint.

### Remove Script Version
The paint builder automatically shows the script version from the `ScriptManifest` to remove this default behaviour you can call the `removeScriptNameVersion()` function.

```java
PaintBuilder.newBuilder()
    .removeScriptNameVersion()
    .build()
```

### Disabling Discord progress uploads
By default when calling the PaintBuilder progress reports will be sent to the progress-reports channel in the Powbot discord. If you want to disable this default functionality you need to call the `withoutDiscordWebhook()` as part of your builder.

```java
PaintBuilder.newBuilder()
    .withoutDiscordWebhook()
    .build()
```

### Adding paint
Once you have built your paint using the PaintBuilder API you need to call `addPaint` function which takes a type of `Paint` which your PaintBuilder returns

```java
@Override
public void onStart() {
    Paint paint = PaintBuilder.newBuilder()
        .x(40)
        .y(45)
        .trackSkill(Skill.Fishing)
        .build()
    addPaint(paint);
}
```