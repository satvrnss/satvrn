# **Maxon Troubleshooting Guide**
**Please pay attention while reading this guide and it's descriptions!**

## **You installed the plugins but it wont show in After Effects:**
::: info
- If you are running After Effects on a version older than 2024, Maxon installers (Red Giant and Universe) will not register correctly. <-
- Only do this method if you are on a **version below 2024**!
:::
### **Windows - Automatic Method**
1. Open PowerShell and copy paste this:
```
Get-ChildItem -Path "HKLM:\SOFTWARE\Adobe\After Effects"
```  

2. Under "Name", you will see your version.  

![Version](https://i.imgur.com/4SYtF5y.png)
::: danger
**Swap "XX.X" in the next step to this number.**
:::

3. Open PowerShell as Administrator and paste this in:
```
Copy-Item -Path "HKLM:\SOFTWARE\Adobe\After Effects\XX.X" -Destination "HKLM:\SOFTWARE\Adobe\After Effects\28.0" -Recurse
```
*Remember to swap XX.X to your own After Effects version, else this will not work!*

4. Now run the plugin installers (Red Giant & Universe).  
Once done, check if all installed in After Effects, then run:
```
Remove-Item -Path "HKLM:\SOFTWARE\Adobe\After Effects\28.0" -Recurse
```
5. Close After Effects & run the patch (service unlocker).

### **Windows - Manual Method**
1. Download and install After Effects 2024.
2. Run Red Giant installer and Universe installers.
3. Patch the plugins through the Service Unlocker.
4. Open your main After Effects version and verify that it works.
5. You can now delete After Effects 2024 if you wish.

::: tip
You can have two After Effects versions simultaneously, it will not interfere.
:::
***
### **MacOS - Automatic Method**
1. Download maxoninstallerfix: https://pixeldrain.com/u/YLwyGEPK
2. **Mount** your installers (double click the .dmg files for the Maxon plugins (Red Giant/Universe) you wish to install).
> *Note: Do not install the plugins, ONLY mount them.*
3. Open Terminal
4. Type `sudo sh ` (space after sh), then drag and drop the `maxoninstallerfix.sh` file into Terminal and press enter.

### **MacOS - Manual Method**
1. Download and install After Effects 2024.
2. Run Red Giant installer and Universe installers.
3. Patch the plugins through `RLM_MaxonApp2025.sh`
4. Open your main After Effects version and verify that it works.
5. You can now delete After Effects 2024 if you wish.
::: tip
You can have two After Effects versions simultaneously, it will not interfere.
:::

## **Your plugins are unlicensed:**
![Unlicensed](https://i.imgur.com/4TSUdss.png) 
*Your plugins will be unlicensed if it shows a grey box on screen when effect is applied.*

- Open Maxon App and send a screenshot of it *uncropped*. Look in the top right corner — are you logged in (do you see your email?).  

If you are logged in, log out and **stay in RLM mode**, then run patcher again. RLM mode = logged out.  

::: info CORRECT VERSIONS
- Mac: Your Maxon App should be **2025.2.1**  
- Windows: Your Maxon App should be **2025.5.0**
:::

**Mac:** Show your terminal output. What does it say when patching? Did it give any errors?  

If it shows a gray unlicensed box in your software & you know it’s patched, have you cleared your cache?

## **Only some plugins are unlicensed:**
*This typically happens for Trapcode plugins, like Particular.*

**Is your After Effects installed on any other drive than your main one?**  
If so, the patcher isn't locating the files correctly and aren't patching them. 

Download the patched files below, and replace them manually:  
- Windows: https://pixeldrain.com/u/9mFyfSGc
- MacOS: https://pixeldrain.com/u/FWKRdS6B

## **Service Unavailable / Security Alert:**
 ![Maxon App](https://i.imgur.com/oZ9Hpjw.jpeg)  

 Run the Maxon App installer again (.exe / .dmg), then run the patcher and then send a new screenshot of Maxon App.
 - Is your antivirus quarantining "Red Giant Service"? - If so, remove the quarantine.
	- You can check manually if you have Red Giant Service here:  
    **Windows:**
    ```
    C:\Program Files\Red Giant\Services
    ```

    **MacOS:**
    ```
    ~/Library/Application Support/Red Giant/Services/
    ```
    *Thank you to Doug for providing the scripts.* 