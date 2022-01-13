# Drawing On Screen

This page's aim is to walk you through using the render event to draw on screen.

## Render Event

Firstly, to be able to draw on screen we have to subscribe to the RenderEvent.

```java
@Subscribe
	public void onRender(RenderEvent r){
		
        }
```

So you create a public void and subscribe to the RenderEvent passed as the param.

## Basics

After this you need to define a graphics object to access the api to draw which is Graphics g = r.getGraphics();
From here you then need to set the scale so the points on screen that are being drawn, align to the games visuals. 

```java
@Subscribe
public void onRender(RenderEvent r){
	Graphics g = r.getGraphics();
	g.setScale(1.0f);
}
```

Now that I have them defined, I want to draw!

## Drawing!

```java
@Subscribe
public void onRender(RenderEvent r){
	Graphics g = r.getGraphics();
	g.setScale(1.0f);
	
	g.setColor(Color.getCYAN());
	g.drawString("Hello!", 50, 50);
}
```

So the graphics in the API now, is not what it used to be if you're familiar with the desktop API. Simply put, there's no AWT for android. All of the
methods you have access to were recreated using android alternatives and put into the API we have now. 

Therefore, you'll notice g.setColor() doesn't use the AWT colors that it used to, and in turn uses the API methods to return a color. You can also use Color.argb()
and rgb() if you want to pass a custom rgb color code.

## Do Not Query!

The render event thread runs on an extremely quick loop, because of this, people try to do quick calculations and queries for faster results. This is a big no no. 
If you start to query in this method you'll begin to notice huge drops in fps.

Calculate in the poll() thread and pass the object/tile/npc/area whatever to your method.

## Examples

Some commonly drawn things and how to do them below. For reference, any objects passed to be drawn are streamed and cached in poll() and passed to the onRender.

```java
Tile tile = Players.local().tile();
...
...
...
@Subscribe
public void onRender(RenderEvent r){
	Graphics g = r.getGraphics();
	g.setScale(1.0f);
	
	g.setColor(Color.getCYAN());
	tile.matrix().draw(g); // matrix has it's own draw method
	g.drawPolygon(tile.matrix().bounds()); // alternatively, you can draw the polygon (this requires the scale to be set above)
}
```

```java
GameObject object = Objects.stream().name("Chest").nearest().first();
GameObject objectNotShrunk = Objects.stream().name("Chest").nearest().first().downscale(false);
...
...
...
@Subscribe
public void onRender(RenderEvent r){
	Graphics g = r.getGraphics();
	g.setScale(1.0f);
	
	g.setColor(Color.getCYAN());
	
	//by default the models are shrunk to help with click accuracy
	object.model().draw(object.localX(), object.localY(), g); // draws the model
	g.drawPolygon(object.model().quickHull(object.localX(), object.localY())); // draws the hull of the model
        
    // as per defined by the objectNotShrunk setting downscale to false, you can also then draw the same thing full size    
    object.model().draw(object.localX(), object.localY(), g);
	g.drawPolygon(object.model().quickHull(object.localX(), object.localY()));
}
```
```java
// This may well cause some drop in fps depending on how many tiles you have in your area.

Area drawArea = new Area(new Tile(0,0,0), new Tile(9,9,0));
...
...
...
	@Subscribe
	public void onRender(RenderEvent r) {
		Graphics g = r.getGraphics();
		g.setScale(1.0f);

		for(Tile tile:drawArea.get_tiles()){
			tile.matrix().draw(g);
		}
	}
```
