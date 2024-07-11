---
title: Varpbits
---

Varbits are one of the most complex aspects of the API. Unfortunately, there's no pretty way around dealing with them either. I'll try and keep things simple along the way.

## Overview
Varplayers (often called varps) are used to store values unique to a player. For example, game settings, prayers, runepouch data, quests etc.
Often confused with these are then varpbits. Varpbits are individual bits of a varplayer.

## Breakdown
### General Knowledge
#### Decimal
Decimal is base 10. The digits are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.

Notice that there are 10 digits in base 10 0-9.

#### Hex
Hex is base 16. The digits are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.

Similarly, there are 16 digits in base 16.

#### Binary
Binary is base 2. You can probably guess which digits are used here.. 0 and 1. Binary numbers can also be used as booleans in which case 0 is false and 1 is true.

### Notation
Hex values are prefixed with 0x.

Binary values are prefixed with 0b.

In java, 100 in binary is written 0b100 and 100 in hex is written 0x100.

### Bit Shifting
Here we get into the bitwise manipulation.

For example, lets say we have a binary number. As we know from the notation section, binary is prefixed with 0b so our number could be something like this below.
```java
0b1011010000
```
However, in this  example, we actually don't want all of those 0's at the end, we just want ``0b101101``. In order to do this, we have to shift to the right. Imagine a trash can after the last 0 of the original binary number and each time you shift by 1, 1 more digit goes into the trash can. In our example, we want to shift to the right by 4 to remove all 4 spare 0's.

To do a bit shift to the right, the operator is ``>>``.

```java
0b1011010000>>1 //this would be 0b101101000
0b1011010000>>2 //this would be 0b10110100
0b1011010000>>3 //this would be 0b1011010
0b1011010000>>4 //this would be 0b101101
```
Hopefully you can see that depending on how many shifts to the right, we get a different output. However, our 4 shift leaves us then with ``0b101101``.

### Bit Masking
So we've shifted off the unwanted 0's at the end of our binary number, now we need to pull out the parts we actually want from what's left. To do this, we create a mask, similar to a mask layer in photoshop if you've ever used that. Whereby you tell it which parts you want and which parts you don't. 

In our use case, bit masking uses a 0 to signify the digits you don't want, and a 1 for the digits you do want.

From our binary value post bit shift, we only want the 101 value at the very end. _~~0b101~~_**101**. Bit masks are implemented with the & operator like below.

```java
0b101101 & 0b000111
```

This can most likely be tidied up further but for now, it'll do. 

Let's put it all together in an example.

```java
int originalValue = Varpbits.varpbit(exampleIndex);// the output of this is 0b1011010000
int bitShiftedValue = Varpbits.varpbit(exampleIndex) >> 4;// the output of this is 0b101101
int bitMaskedValue = bitShiftedValue & 0b000111; 

//Alternatively, you could write it out like this
int value = Varpbits.varpbit(exampleIndex) >> 4 & 0b000111;
```

## Dan's Real Working Example
I recently dove head first into vaprbits while trying to find the values of certain game settings such as roofs hidden or hiding the store & activity advisor button on the minimap etc.

I'm going to walk through how to find out if your activity advisor is turned on or off.

I started off by turning on the varpbit change event debug option and changed my setting from on to off repeatedly, till I found the index of the varpbit I wanted along with the on value and off value. However, I found that the index is ``3190``.

!["ActivityAdvisorPng"](https://media.discordapp.net/attachments/902518108546289694/1261022139796951132/image.png?ex=669171e2&is=66902062&hm=906e6ed7e6e94fbde4870cff6979a12ae12bc3b6b715cdb0eea75a3cb3011be9&=&format=webp&quality=lossless&width=810&height=506)

```java
 public int ADVISOR_INDEX = 3190;
 public int ON_DECIMAL = 148;
 public int OFF_DECIMAL = 156;
```

You'll notice how I've written the decimal values, this is what the varpbit event returns. So we'll want to convert this to binary. I use this converter tool linked but use whatever you prefer.
[Decimal To Binary Converter](https://www.rapidtables.com/convert/number/decimal-to-binary.html)

On this page, depending on the decimal values you have for on/off you'll need to look at whichever option has the same number of digits for both values. In this case below, they both do, so I'll use the 8 digit box.

Open 2 tabs, one for the on value and one for the off value, I like to flick between them to see which `bits` of the binary are changing so I know how I need to manipulate it to get the value I want.

![GIF](https://media.discordapp.net/attachments/902518108546289694/1261024708455960738/chrome_w4oUEVqHBU.gif?ex=66917447&is=669022c7&hm=d1b75ef4220e2c001631b51d0131e5b9f760ddd134560a4ef6012efa2488c83d&=)

As you can see hopefully, it's the 4th last digit that is changing. I can now use this to determine my shift and mask.

I know that I don't want the last 3 digits, so I can simply shift this off by 3.

```java
 public int ADVISOR_INDEX = 3190;
 public int SHIFTED_VALUE = Varpbits.varpbit(ADVISOR_INDEX) >> 3;
 // this leaves me with an OFF value of 0b10011 and an ON value of 0b10010
```

All that's left is to mask it to get only the value we want.

```java
 public int ADVISOR_INDEX = 3190;
 public int SHIFTED_VALUE = Varpbits.varpbit(ADVISOR_INDEX) >> 3;
 public int MASKED_VALUE = SHIFTED_VALUE & 0b00001;
 // this leaves me with an OFF value of 0b00001 and an ON value of 0b00000
 // in otherwords, OFF is 1 and ON is 0
```

So we can wrap this in a nice function like below. Since we know our ON value is 0, if it IS 0, we want to turn it off.
```java
 public boolean shouldTurnOffActivityAdvisor(){
        return (Varpbits.varpbit(ADVISOR_INDEX) >> 3 & 0b00001) == 0;
 }
```

A little long-winded but we got there in the end.

## Varpbits.varpbit() vs Varpbits.value()
Back in 2022 .value() was added to the API which handles the bitwise manipulation required as defined by the cache. Where the varpbit() value will be the raw un-manipulated value.

## Quest Example
As mentioned, quests are one of the many things that use these to track your progress through the quest. In our Quest API these are handled for us, but as example we can see below how they might get used.
```java
int questVarpbit = Quests.Quest.SHEEP_SHEARER.getVarbit();
int currentStep = Varpbits.varpbit(questVarpbit);
```

You'll also notice, the RuneLite quest helper uses these to determine what step you're on in order to guide you on what to do.


