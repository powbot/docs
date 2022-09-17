
# Proxy setup

## Step 0 - Pre-requisites

As with everything in the world, there are always requirements before you start working on something. The main ones for achieving proxy support on PowBot are as follows:

* A correctly setup bluestacks instance - [Click here](https://docs.powbot.org/#/The_Noob_Section/Installation)
* Working and stable **SOCKS5** proxies. 
** NOTE: We do not provide or recommend any specific proxy providers. Please make sure to do your research before buying. We do not recommend using any 'Free' proxies. You will face issues if your proxy is not stable.

## Step 1 - Download the files

* ProxyDroid APK - You can find this by googling `ProxyDroid APK`

## Step 2 - Enable root support for your Bluestacks instance

You will need to find your `bluestacks.conf` file. By default, it is located in
```
C:\ProgramData\BlueStacks_nxt
```

Right click the file, and click 'Open with'

![image](https://user-images.githubusercontent.com/64224090/190851600-5bc2bb20-7f64-4ea3-bb9b-d068bb61cc71.png)

Choose your favourite text editor, or notepad.


![image](https://user-images.githubusercontent.com/64224090/190851651-22560239-b087-4a30-b97f-801b88c2cb79.png)

You should now see a wall of text. Don't worry, we only need to change a couple of small things.

Go to the `Edit` tab, and click on `Find`
Afterwards, search for `enable_root_access`
This should show you a couple of same looking lines such as below:
![image](https://user-images.githubusercontent.com/64224090/190851761-c46a7239-27fd-4dd5-a388-626033879000.png)

Change the `0` to a `1`

![image](https://user-images.githubusercontent.com/64224090/190851788-f6dce22e-408b-432f-bec8-359fcf78d73d.png)
NOTE: You will need to do this for all instances one by one. Click the arrows to find the next instance of this setting.

After you're done. You can save the file and close it. Congratulations, you've now enabled root on your instance(s).


## Step 3 - Install ProxyDroid

This step as is as simple as dragging and dropping the APK you have downloaded previously onto the instance you want to proxy.
Once installation is complete, you should see this icon:
![image](https://user-images.githubusercontent.com/64224090/190851898-1d2d5056-c576-46cf-88fe-2874a551d3de.png)


## Step 4 - Setup ProxyDroid

Open up ProxyDroid, and fill it out as follows:

Host: The IP address of your proxy
Port: The port of your proxy
Proxy type: SOCKS5

![image](https://user-images.githubusercontent.com/64224090/190852005-ffb278e8-4802-4479-825c-4ea79946314e.png)

Under the 'Account information' section, you want to put in your proxy Username and Password (This step is not needed if you are using IP authorisation)

![image](https://user-images.githubusercontent.com/64224090/190852051-7f750513-bf14-48ce-8120-ef808a40b474.png)

This last step is to make sure that ProxyDroid does not break keyboard input on your bluestacks instance.
Under `Feature Settings` make sure to turn off `Global proxy`

![image](https://user-images.githubusercontent.com/64224090/190852116-12cb613d-aacd-4d27-b6ac-806bce38793c.png)

Tap on `Individual proxy` and select make sure to select `OldSchool Runescape` as seen below:

![image](https://user-images.githubusercontent.com/64224090/190852192-f7dc8abd-c4ae-4cbc-b4ff-e9653a9d32ea.png)

You can now go back, and connect to your proxy!
![image](https://user-images.githubusercontent.com/64224090/190852228-2976d5af-3e38-4a2a-a658-cd22059f0b67.png)

Congratulations, if you've reached this step and ProxyDroid was able to connect, you can now open the game! 

NOTE: Remember that you will need to open ProxyDroid every time you restart your bluestacks instance. The AutoConnect feature of ProxyDroid does not work on Bluestacks.



## Step HELP - I'm still having issues

There could be a couple of reasons why you may be having issues. These are listed below:
* Cannot connect to game - This is caused by your proxy not working correctly. Please confirm it is a working proxy and try again. Replace your proxy if your provider allows you to.
* Powbot bar does not appear - This is caused because you logged into powbot before setting up the proxy. Simply remove the game from your instance, and re-install using the latest installer (this can be found on our discord under #downloads). Make sure your proxy is on before logging into powbot/the game.
* I am lost - Please join our discord and describe your issue in as much detail as you can. This will help us with helping you to troubleshoot your issue.
