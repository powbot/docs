# Installation - Bluestacks 5

## Pre-requisites
- Java 11 or above

## Step 1 - Download the files

Head back over to discord to the #📎l-downloads-l📎 channel and download the file named powbot-installer.jar.

For installation; this is all you need. If you want to develop with PowBot, you'll need the two other sdk's in that channel too.

## Step 2 - Download & install Bluestacks

I mean this is pretty simple stuff. Follow the link below and install Bluestacks 5

https://www.bluestacks.com/bluestacks-5.html

If you prefer LDPlayer9, download it here

https://en.ldplayer.net/versions

## Step 2.1 A - Create a new instance (Bluestacks)

Open your bluestacks multi-instance manager.

![Image!](https://imgur.com/zWHVrsP.png)

Press the "Instance" button along with "Fresh instance"

Select Android 11 from the Android Version drop down.

Now make sure you select the ARM option for the ABI setting then "Create" the instance.

![Image!](https://i.imgur.com/kr0B0yj.png)

## Step 2.1 B - Create a new instance (LDPlayer)

Open your LDMultiPlayer.

![Image!](https://i.imgur.com/KcHTyKF.png)

Press the "Add instance" button along with "New instance"

Now a new instance should be shown in the list. Before you start this instance, you'll need to change some settings!

Press on the three dots on the right side of your new instance and select "Setting". The following screen will show.

![Image!](https://i.imgur.com/fCSkrsD.png)

![Image!](https://i.imgur.com/TWjGNiz.png)

Change the CPU & RAM settings to 2 cores and 2048M.

Next, go to "Other settings".

![Image!](https://i.imgur.com/tBbqlIb.png)

Set Root permission to Enable and ADB debugging to Open local connection.


## Step 3 - Installing

First off; you need java 11. If you see something like the following error, you need to update your java.

![Image!](https://cdn.discordapp.com/attachments/341039694362050563/1016026416162283611/Screenshot_2022-09-04_124550.png)

Open the installer that you downloaded in Step 1. This has 3 tabs, ADB, Bluestacks and LDPlayer. Your instance may well show in the respective tab.

If it does, great. Click on the instance you wish to install to and then hit the install button.

However, the most reliable way to install is via ADB.

## Step 3.1 - ADB Connect

To install via ADB you'll need to first connect ADB to your instance. This is easy; follow these steps.

Click on the settings icon at the bottom right of your Bluestacks instance and head down to the "Advanced tab". If you followed the LDPlayer installation guide, ADB will already be enabled on your device and should show up in the installer in the ADB tab.

Here you should see the following information

![Image!](https://i.imgur.com/fU7i672.jpg)

127.0.0.1 is your local host and the 5645 in the screenshot is your port. This usually starts at 5555 and goes up by 10 for each instance.

Open up your command prompt (CMD) and paste the following commands one at a time, replacing the XXXX with the port you found from the above step.

```
cd "%userprofile%\.powbot\android\platform-tools\"
adb connect localhost:XXXX
```

## Step 4 - Install (Take 2)

Now head back to your installer; open the ADB tab and hit refresh. 

You should now see your device connected. Select it and hit install.

## Step 5 - IT'S STILL NOT WORKED?!?!?

Okay, so something is likely stopping or blocking the installation. The easiest way to work out what is to run the installer
via the CMD so we can catch the error log.

Find your installer file and copy it's path. For me, mine is in E:\Downloads\ so my path to file is E:\Downloads\powbot-installer.jar

Open CMD and paste in the following command, replacing PATHTOFILE with the path to your installer file from the above step.

```
java -jar "PATHTOFILE"
```

Now try to install again and the CMD window will record the installer steps and output any errors. Post these errors in the #❓l-help-l❓ channel and someone will try and help.
