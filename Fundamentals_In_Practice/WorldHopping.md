# World Hopping

World hopping is something not many people include into scripts, but for others it's a fundamental part, i.e. buying from shops.

This page's aim to guide you through a real example of how to use the API to include world hopping into your scripts.

Worlds can be streamed like almost every other aspect of this API. They follow the same structure as to make them familar.
Like other streams, you can action directly from the stream and/or cache a reference to your stream result and action on that.

Some examples below.
```java
World world = Worlds.stream().id(302).first();
...
...
World world = Worlds.stream().filtered(w->!w.getSpecialty().equals(World.Specialty.HIGH_RISK)).first();
...
...
World world = Worlds.stream().filtered(w->w.getPopulation()<1000).first();
```

Now all that's left is to actually hop to it!

```java
world.hop();
```
