
# Setting up your development environment

## Step 0 - Pre-requisites

* Basic knowledge of Git, PowBot API, and Intellij IDEA  
* Basic knowledge of the Gradle build system (https://www.tutorialspoint.com/gradle/index.htm)

## Step 1 - Creating a new project

Create a new project in Intellij IDEA. Make sure to select the options outlined below. 

![image](https://user-images.githubusercontent.com/64224090/222971733-884d8f60-0871-415e-aa9e-fcefa1b8f836.png)

After clicking on 'Create', wait until all background tasks are finished in the bottom right corner.

![image](https://user-images.githubusercontent.com/64224090/219946899-c4e0fdd2-8c8a-46e2-b0b0-5ba97d397005.png)


## Step 2 - Modifying the gradle build configs

To auto import all needed libraries, overwrite everything in the `gradle.build.kts` with the text below


```gradle
plugins {
    id 'java' // Alternative id("java")
    id "org.jetbrains.kotlin.jvm" version "1.7.10" // Alternative id("org.jetbrains.kotlin.jvm") version "1.7.10"
}

group 'org.proto' // If failing, alternatively use ""
version '1.0-SNAPSHOT'

repositories {
    mavenCentral()
    google()
    maven {
        url = uri("https://repo.powbot.org/releases")
    }
}

// If failing, alternatively use ""
dependencies {
    implementation('org.powbot:client-sdk:1.+') // + means gradle will pull the latest libs on refresh of project
    implementation('org.powbot:client-sdk-loader:1.+') 
    implementation('com.google.guava:guava:31.1-jre') // needed for @Subscribe annotations / event bus  
    implementation('com.fasterxml.jackson.core:jackson-core:2.13.0')
}
```

Make sure to refresh the gradle configs by either clicking on the little button that comes up on the top right of your screen, or by going to the gradle tab and clicking on the icon.

![image](https://user-images.githubusercontent.com/64224090/219947190-7602be9f-13ef-4773-8586-8d505485f7f2.png)
![image](https://user-images.githubusercontent.com/64224090/219947265-76d82b7e-fc60-4043-884d-1769834e3823.png)



## Step 3 - Start making your script!

You can now start working on your script, everything should be held in the `src/main/java/org/example/` path.

![image](https://user-images.githubusercontent.com/64224090/219947446-0d484448-bfcc-4f8e-82fb-7affab12bf1f.png)


## Example repo

https://github.com/Protoprize/PowBot-Base-Gradle-Project
