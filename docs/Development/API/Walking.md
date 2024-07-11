# Walking to Locations

Walking to locations can be used in all manner of scripts. Whether it be from a bank to the furnace or from Lumbridge to GE. Either way we need to be abl to navigate around the game.

## Simple Navigation

To begin, straight line navigation is the simplest. In this scenario we're going to walk from Edgeville bank to Edgeville furnace.

```java
Movement.step()
```
This is the method we'll use. Step will use the minimap to select the closest tile it can to the destination we provide. Meaning if there were no obstacles, we could run in a straight line anywhere on the map is we looped this method.

Step() also will try to mimic more realistic behaviour by tapping on the game screen rather than the minimap when you're close by. Rather than using the minimap to move 1 tile, it'll tap the actual in game tile instead.

As an example, the Edgeville furnace is close to and visible from the bank on the minimap, step() is the best method to use here to get closer to it.

```java
Tile furnace = new Tile(3108, 3498, 0);
Movement.step(furnace);
```

### Using Run
If you want your script to run between locations you can turn on and off run using some of the following methods.

```java
if(Movement.energyLevel()>20 && !Movement.running()){
    Movement.running(true);
}
```
This checks if you have over 20% run energy and run is turned off. If both of these conditions are met, we turn run on.

## Web Walking

Web walking, put simply, is an all-in-one solution to navigating the game. You provide the destination and then the method handles the rest.

To use it in a simple way, we'll use mining in south-west Varrock as our example.

The beauty of the web walker is you don't need to provide anything other than where you want to go, so it's as simple as:

```java
Tile bank = new Tile(3185, 3437, 0);
Movement.moveTo(bank);
```

It can even be simpler than that.

What if your script allows for multiple banks? You don't want to have to hardcode them all...
```java
Movement.moveToBank();
```
This will calculate the `cheapest` path to the bank. Every action has a cost, every area you walk through has a cost, and they all amalgamate into the cost of the path. This might mean it's actually cheaper (in calculatory cost, not GP cost)
 to use a ring of wealth charge from Varrock west bank to get to the GE than it is to walk there.

### What if it's not that simple though? 

Well if you want more control over the walking this can be done with the builder.

```java
Tile location = new Tile(3185, 3437, 0);
Movement.builder(location).setRunMin(45).setRunMax(75).setAutoRun(false).setUseTeleports(false).move();
```
This snippet here will walk to the tile provided however it will turn your run back on if it's between the 45 and 75. Here we also tell it not to use teleports, so if it would usually prioritise a teleport to get to the destination because of it's cost, we can just ask it to walk instead.

## Path Traversal
Web walking is great for getting you from A to B where A is unknown. Since it generates its own path and will get you to your destination. However, what if both A and B are both known? Running the same path repeatedly? A fairly simple path with little to no obstacle? I personally would suggest not using the web walker for this.

Lets take a recent example, running bloods through the true blood altar.

For anyone who's done this knows there's a bunch of caves to go through and then the last one is a much longer walk to the next cave object to interact with.

You _could_ use the webwalker to walk this path for you, and it would probably do the job. However I personally would make my own path and use a traverse() option on it, so I have full control over the how, the when and the where things activate.

Enough waffle, lets get into it. Either of the links below should work and be needed to follow along.

[https://nickert1337.github.io/](https://nickert1337.github.io/)

[https://explv.github.io/](https://explv.github.io/)

In the first image, there's no path just yet, however top right I have selected the path tool, 5th option down.
!["Map"](https://media.discordapp.net/attachments/902518108546289694/1261053068011638824/Screenshot_2024-07-11_211213.png?ex=66918eb0&is=66903d30&hm=cbb4f0f63a18c54c6a77aa13a3274bb361c0f363015f5362c62e5a852b36ac67&=&format=webp&quality=lossless&width=810&height=739)

In this second image, I've drawn the path by clicking at each point where I want the next tile to go.
!["PathMap"](https://media.discordapp.net/attachments/902518108546289694/1261053087020351580/Screenshot_2024-07-11_211246.png?ex=66918eb5&is=66903d35&hm=b519f4bdf117f570efad8d62a8d0a09009f2c97bb822ed9d347d80c1f70a73a8&=&format=webp&quality=lossless&width=810&height=754)

Before anyone points out that doing this method you actually don't start the walking path from way at the top since you come out the first cave on the left part way through the path, this is where traverse() is pretty nice.

The traverse() method will pick up the next walkable tile on the map to our end goal destination. Meaning we could join this path anywhere in the sequence and I'll head in the right direction.

So how do we use it? Firstly, we need to create an array of tiles that we created on the map earlier.

```java
 Tile[] path = {
        new Tile(3478, 9835, 0),
        new Tile(3481, 9829, 0),
        new Tile(3484, 9825, 0),
        new Tile(3485, 9823, 0),
        new Tile(3486, 9820, 0),
        new Tile(3487, 9818, 0),
        new Tile(3489, 9816, 0),
        new Tile(3492, 9814, 0),
        new Tile(3494, 9813, 0),
        new Tile(3496, 9811, 0),
        new Tile(3497, 9809, 0),
        new Tile(3498, 9807, 0),
        new Tile(3500, 9805, 0)
        };
```

Now we can make a TilePath object to traverse. Notice I also set a variable called targetLocation, this set by accessing the array of tiles and getting the last one.

To access the array you use square brackets and pass an index to it of which one in the list you want to get out of it. i.e. to get the first one it would be path[0].

However, by doing ``path.length-1`` we get the final tile in the array. Bare in mind, we have to do -1 because arrays are 0 indexed. Meaning the first item is index 0, the second is 1, so on and so forth. So if there were 10 tiles, it would be index 0-9 meaning length returns 10 so 10-1 is therefore pointing to the index 9 as our last tile.

I've also created a GameObject for the cave we want to go through next, you'll see why later, but I use the targetTile location in my within() to help filter it.
```java
 Tile[] path = {
        new Tile(3478, 9835, 0),
        new Tile(3481, 9829, 0),
        new Tile(3484, 9825, 0),
        new Tile(3485, 9823, 0),
        new Tile(3486, 9820, 0),
        new Tile(3487, 9818, 0),
        new Tile(3489, 9816, 0),
        new Tile(3492, 9814, 0),
        new Tile(3494, 9813, 0),
        new Tile(3496, 9811, 0),
        new Tile(3497, 9809, 0),
        new Tile(3498, 9807, 0),
        new Tile(3500, 9805, 0)
        };

        TilePath tilepath = new TilePath(path);
        Tile targetLocation = path[path.length-1]; 
        GameObject cave = Objects.stream(15).name("Probably called cave").within(targetLocation, 4).first();
```

Now to put it all together and actually do some walking. We loop an integer starting at 0 and ending at our length-1, so we have the option should we need to, walk every single tile.

However, that won't be necessary. We have a break clause in there, so we can exit nice and early. People don't tend to walk right up to the object they want before interacting with it, they will click it as soon as it's visible.

That's what we created the cave object for, each step we take, we check if the object is visible, if it is, we can click it. Much more human-like than the webwalker which will walk you to the exact same tile every time.

Then lastly, we just call traverse(). You can also do things like reverse().traverse() if you want the ability to walk the same path back and forth. i.e. from mine to bank, bank to mine.
```java
 Tile[] path = {
        new Tile(3478, 9835, 0),
        new Tile(3481, 9829, 0),
        new Tile(3484, 9825, 0),
        new Tile(3485, 9823, 0),
        new Tile(3486, 9820, 0),
        new Tile(3487, 9818, 0),
        new Tile(3489, 9816, 0),
        new Tile(3492, 9814, 0),
        new Tile(3494, 9813, 0),
        new Tile(3496, 9811, 0),
        new Tile(3497, 9809, 0),
        new Tile(3498, 9807, 0),
        new Tile(3500, 9805, 0)
        };

 TilePath tilepath = new TilePath(path);
 Tile targetLocation = path[path.length-1];
 GameObject cave = Objects.stream(15).name("Probably called cave").within(targetLocation, 4).first();
 
 for(int i = 0; i<path.length;i++){
    if(targetLocation.distance()<5 || cave.inViewport()){
        break;
    } else {
        tilepath.traverse();
    }
 }
```
