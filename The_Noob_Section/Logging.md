# Logging

We as developers and script writers are pretty much flying blind when users report issues. 99% of the time, logs help us determine what and where a script or client had an issue.

## The easy way; Step 1

Firstly; if you're trying to get the logs, I'm making the assumption you already have bluestacks open / your phone connected and running the app.

Select the instance you want the logs for; in the screenshot below, I've selected the bottom instance.

![Image!](https://i.imgur.com/AjMYNKq.jpg)

## The easy way; Step 2

Select the logs button

![Image!](https://i.imgur.com/s8zl52T.jpg)
![Image!](https://i.imgur.com/pjXwiZM.jpg)

## The easy way; Step 3

Copy and send to whoever's asked for the logs. These logs by default will attempt to strip out any unecessary lines of junk from the below methods so might be a little more useful.

## The manual way; Step 1 - Connecting to the instance

Click on the settings icon at the bottom right of your Bluestacks instance and head down to the "Advanced tab".

Here you should see the following information

![Image!](https://i.imgur.com/fU7i672.jpg)

127.0.0.1 is your local host and the 5645 in the screenshot is your port. This usually starts at 5555 and goes up by 10 for each instance.

Open up your command prompt (CMD) and paste the following commands one at a time, replacing the XXXX with the port you found from the above step.

```
cd "%userprofile%\.powbot\android\platform-tools\"
adb connect localhost:XXXX logcat
```

## Step 2 - Get the RIGHT logs

With the recent change to the native client, there's a lot more junk output into the logs that we don't need. 
Using the right commands, you can strip that out and get the pertinent information only.

Since you've already cd (changed directory) to the platform tools folder AND connected to your instance, you can just paste the following command into the same CMD window. Don't forget to swap the XXXX with your port number.

```
adb.exe -s localhost:XXXX
```

Ctrl+a to select it all then send it over to whoever's asked for the logs.
