# Locations

Locations are split into many different terminologies however we'll cover the most used and basics.

## Tiles

Every single square in game is a tile. some you can stand on, some have objects on so you can't, however the entire map is split into tiles.

These tiles have an X, Y and Z and look like so;

```java
Tile tile = new Tile(3264, 2123, 0);
```
The z axis is referred to as floor() meaning if you're on z = 1, you're likely upstairs somewhere.

## Standard Areas

Areas are just collections of tiles to form an area. standard areas are square or rectangular in shape and take 2 tiles as the parameters to form the area as opposite diagonal corners.
i.e. top left and bottom right and again, look like so.

```java
Tile topLeft = new Tile(3264, 2123, 0);
Tile bottomRight = new Tile(3267, 2118, 0);
Area area = new Area(topLeft, bottomRight);
```

These areas are useful for checking if you or something is in them. For example you might set an area where something spawns, like black chins. You could then check the area to see if it contains any black chins.

```java
Boolean areaContainsBlackChins = area.contains(blackChins);
```

Here I used containsOrIntersects as if it's on the border, it's not technically contained inside the area, it's intersecting, so this method checks both.

## Polygonal Areas

Polygonal areas work exactly the same, except it takes multiple tiles passed to it to create the polygon.
Take this polygonal area of the Arceuus essence mine;

```java
public Area MINE_AREA = new Area(
new Tile(1766, 3872, 0),
new Tile(1774, 3868, 0),
new Tile(1779, 3862, 0),
new Tile(1779, 3853, 0),
new Tile(1779, 3843, 0),
new Tile(1778, 3838, 0),
new Tile(1770, 3833, 0),
new Tile(1749, 3841, 0),
new Tile(1743, 3848, 0),
new Tile(1743, 3857, 0),
new Tile(1746, 3864, 0),
new Tile(1753, 3870, 0),
new Tile(1760, 3871, 0));
```
Here you see the setup of the area has no difference except it takes more tiles to create the polygon.