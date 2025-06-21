---
title: MacOS Issues
description: Common questions and troubleshooting for issues on MacOS.
---
# Frequently Asked Questions
::: tip
Use **Ctrl+F** / **⌘+F** to easily navigate the page.
:::
## :star: MacOS Issues
### 1. "After Effects can't continue: unexpected failure during application startup."
After Effects 2021 and below are not compatible with Sonoma.
You won’t be able to launch these versions of After Effects. Your only option is to install After Effects 2022 or higher.

::: info If this appears on version 2022+:
> https://community.adobe.com/t5/after-effects-bugs/after-effects-23-6-and-24-0-not-starting-on-macos-14-sonoma/idi-p/14139194#comments
:::

### 2. "The following plugins are installed but are not yet compatible with this version".
This issue occurs when a user installs a plugin only supporting Intel Macs (older version or crack) on After Effects that is running native to Apple Silicon (M1+ chip on 2022 and higher).

[**Click here**](https://rentry.co/rosetta-adobe) for an in-depth explanation, as well as possible fixes and workarounds.

### 3. "[X] is damaged and cannot be opened, you should eject the disk image / you should move it to the trash."
#### **If the error occurs when installing software/plugins:**
- Drag the installer to your desktop, open Terminal and execute:
```
sudo xattr -cr
```
- Drag the installer next to it.
    
    **There must be a space between the command and the file**.<br> 
- Hit enter and submit your Mac password. Passwords are not displayed when typed into Terminal.

[**Click here**](https://youtu.be/-7YCWM2Xvc0?si=8nCYp7vv4L6sZDIk) for a visual guide.

::: tip IMPORTANT NOTE
If your damaged file is inside of a .dmg, you will have to move it outside of it for it to work!
:::

#### **If a plugin shows this error inside After Effects:**<br>
- Open Terminal and execute `sudo xattr -rd com.apple.quarantine` and drag the .plugin file next to the command, **there must be a space between the command and the file**.<br>
Press enter and submit your password.<br>

[**Click here**](https://monter.is/posts/mac-guide) for a visual guide.

### 4. "The installation cannot continue as the installer file may be damaged. Download the installer file again."
- Right Click > Show Package Contents > Contents > MacOS > Install.

[**Click here**](https://youtu.be/xYzHPySXdo4?si=FdmZjhIo_r5rt2Mj) for an example video.

### 5. "You don't have XCode Command Line tools" 
- Monters "23.6 fix.pkg" is unsupported on Sonoma, causing this error. You won't be able to run it.

You can Download & run this alternative [**patcher**](https://www.mediafire.com/file/uzy5d89ufktmw9c/ADOBE+23.6+FIX.zip/file) instead, 100% working. Instructions are included.

### 6. "Error: couldn't find main entry point"
*This typically means the app and/or plugin you're trying to run is missing a key file it needs to start, or it’s not installed correctly.*
::: info NOTE
**If seeing this on latest Sequoia with Twixtor 8, use RE:Vision 2024 Bundle from the [archive](<https://rentry.co/satvrn-archived>)!**
:::

1. Make sure it's installed correctly. Refer to text instructions and/or visual guides.
2. Try reinstalling the plugin/software you are experiencing issues with.
<br><br>

#### **Disable gatekeeper (not recommended, last resort):**
1. Open Terminal.
2. Input `sudo spctl --master-disable` & press enter.
3. Enter your Mac password when prompted & press enter.
4. Go to System Preferences > Security & Privacy > General
5. You should see an "Anywhere" option under "Allow apps downloaded from", select "Anywhere".

*If the option is greyed out, click the lock in the bottom left and enter your password to unlock settings.*
::: tip
You can also disable Gatekeeper by using **[Sentinel](https://itsalin.com/appInfo/?id=sentinel%3E).**
:::

### 7. Failed with error code 133 (Adobe)
Error 133 indicates insufficient disk space to download and install the applications. Free up some space or select another location for your app and try again.

### 8. "[X] cannot be opened because it is from an unidentified developer" / "because Apple cannot check it for malicious software" / "cannot verify that this app is free from malware".
*By default, macOS blocks most apps that aren’t from the App Store, even if they’re completely safe.*

#### **If the error occurs when attempting to run any sort of dmg or pkg file:**
1. Right-click the file *(hold the ctrl key and click the file to bring up the menu)*
2. Select Open
3. It will show a warning, but this time it will give you an “Open Anyway” button.
Click it to continue.

::: info READ
If the step above doesn't work, do the step below as well.
:::

#### **If the error occurs for a plugin (example: Deep Glow):**
1. Click the Apple logo in the top left corner.
2. Go to System Preferences (or System Settings).
3. Open Security & Privacy.
4. At the bottom of the window, look for a message saying the app/plugin was blocked.
5. Click **Allow Anyway**.
*You might need to unlock settings by clicking the lock icon in the bottom left corner, and then entering your password.*

### 9. "Unable to expand [X] into " ". (Error 79)"
- Install [**Keka**](https://d.keka.io/).
- Right click the file you want to open > Open with > Keka > Extract > Enter our password > OK.
This will create an uncompressed version of the folder. Open it and proceed as normal.

### 10. "Can't find/Error loading Sapphire bundle"
Make sure to fully uninstall Sapphire.

1. Run the uninstaller located in `Applications/GenArtsSapphire/Uninstall Sapphire`
2. Next, disable gatekeeper by executing the following command in Terminal: 
```
sudo spctl --master-disable
````

> Alternatively you can use [Sentinel](https://itsalin.com/appInfo/?id=sentinel) which is easier for new Mac users.

3. Click the Apple menu > System Preferences > Security & Privacy > General.  Scroll to the bottom and select "anywhere" under "Allow apps downloaded from".

Restart your Mac and reinstall the plugin.

### 11. "There was a problem installing CCXProcess"
- Press Command+Spacebar and type Terminal, open terminal.
- Copy & paste the following:
```
sudo softwareupdate --install-rosetta --agree-to-license
```

- Press enter. After Rosetta is installed, run the Adobe installer again.

### 12. "The file “Patch.command” could not be executed because you do not have appropriate access privileges." 
- Open Terminal.
- Copy & paste the following:
```
chmod +x
```
- Insert a space.
- Drop the file into Terminal.
- Click on the Terminal window, and then press return.

### 13. Error creating directory / \*\*\*unknown variable asesupportfilepath 1*\*\*
*This error can appear when attempting to install Maxon plugins.*
- Click Abort
- Open Terminal
-  Copy & paste this in:
```
sudo sh /Volumes/Red\ Giant\ Installer/Red\ Giant\ Installer.app/Contents/MacOS/installbuilder.sh --mode text
```
-  Enter you password when prompted, and then hit Y if prompted.

### 14. Error Code 127 (Adobe)
[Error code 127](https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html#error127) indicates that the installer isn't able to extract the zip file in the `adobeTemp` folder. This might happen due to a lack of disk space or if the necessary permissions are unavailable. Sometimes, even antivirus software can block the extraction process in the temp directory.
> Note: Open the folder where you want to see the hidden files, and select "Command"+"Shift"+"." keys simultaneously.

1. Navigate to the `adobetemp` folder located at:</br>

    `/System/Volumes/<Root Drive>/.adobeTemp`
2. Go to **File > Get Info**, then select **Sharing & Permissions**.
3. Select system from the **Name** column. Ensure that is has **Read & Write** privileges.
4. Turn off your antivirus temporarily or whitelist it.
You can also free up some space and retry.
