# PaintBuilder API

The PaintBuilder API is a simple API that provides an easy way to display paint for your bit with in-built progress tracking various in game events such as levelling up.

### Creating the builder

The PaintBuilder is a fluent API meaning you can call numerous functions on the API before building it.

```java
PaintBuilder.newBuilder().build();
```

```java
PaintBuilder.newBuilder()
    .addString("Hi Docs!")
    .y(50)
    .x(55)
    .build();
```

### Custom Strings
To add a custom string to the output paint you can call the `addString()` function like so

```java
PaintBuilder.newBuilder()
    .addString("Current Task: doing something")
    .build()
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

```java
PaintBuilder.newBuilder()
    .trackSkill(Skill.Fishing)
    .build();
```

#### Tracking Skill Options

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