# Logging

We as developers and script writers are pretty much flying blind when users report issues. 99% of the time, logs help us determine what and where a script or client had an issue.

## Step 1 - Connecting to the instance

Click on the settings icon at the bottom right of your Bluestacks instance and head down to the "Advanced tab".

Here you should see the following information
![Image!](https://i.imgur.com/fU7i672.jpg)

127.0.0.1 is your local host and the 5645 in the screenshot is your port. This usually starts at 5555 and goes up by 10 for each instance.

Open up your command prompt (CMD) and paste the following commands one at a time, replacing the XXXX with the port you found from the above step.

```
cd "%userprofile%\.powbot\android\platform-tools\"
adb connect localhost:XXXX
```

## Step 2 - Get the RIGHT logs

With the recent change to the native client, there's a lot more junk output into the logs that we don't need. 
Using the right commands, you can strip that out and get the pertinent information only.

Since you've already cd (changed directory) to the platform tools folder AND connected to your instance, you can just paste the following command into the same CMD window.

```
adb.exe logcat PowBot:* *:I -t 1000 > dump.txt && notepad dump.txt
```

This will pop open notepad for you to save the file and send to the script writer or client dev to investigate the issue.