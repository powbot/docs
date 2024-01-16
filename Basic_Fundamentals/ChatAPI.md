# Chat API
The Chat API allows you to navigate chatting with NPCs within OSRS.

## Check whether you're chatting
To check whether there is a chat window open you can call the `Chat.chatting()` function as shown below.

```kotlin
if (Chat.chatting()) {
    val npcName = Chatting.getChattingName()
    println("We are chatting to ${npcName}")
}
```

## Continuing a conversation
If you want to continue a conversation there are two ways of doing this depending on the situation whether you need to press 'Click to continue' or send an option response.

If you want to just continue the conversation use the `Chat.continueChat()` function as shown below.

```java
if (Chat.canContinue()) {
    if (Chat.continueChat()) {
        Condititon.wait(() -> !Chat.canContinue(), 300, 10)
    }
}
```

If you want to continue the conversation with a specific response you can do so as shown below.

```java
if (Chat.canContinue()) {
    if(Chat.continueChat("Yes I will do that.")) {
        Condition.wait(() -> !Chat.canContinue(), 300, 10)
    }
}
```

## Get the content of the current chat message
```java
if (Chat.chatting()) {
    String message = Chat.getChatMessage()
}
```

## Automating a conversation
The Powbot API has a handy method for automating the entire conversation with an NPC. You pass the responses you want to give to the NPC as a parameter and the `Chat.completeChat` method will handle all the input and necessary delays for you.

```java
if (Chat.chatting()) {
    if (Chat.completeChat(*arrayOf("Yes", "I can help you", "Yes I'm fiunished talking"))) {
        Condition.wait(() -> !Chat.chatting(), 500, 10)
    }
}
```
