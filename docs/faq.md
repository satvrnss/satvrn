---
title: Frequently Asked Questions
description: Common questions and troubleshooting for software and plugins.
---
# Frequently Asked Questions
::: tip
Use **Ctrl+F** / **⌘+F** to easily navigate the page.
:::
## :star: General Questions
### 1. Is [X] plugin compatible with my After Effects version?
The majority of plugins available on our Rentry will work on any "common" version of After Effects (2018+). Most scripts will only work on 2020/21+.

### 2. How can I resolve "This unlicensed Adobe app will be disabled soon"?
This alert is fairly common and nothing you need to freak out over. [**Click here**](https://rentry.co/adobe-gcc) to learn how to remove it.

### 3. What will happen if I switch After Effects versions? (plugins, presets, etc..)
[**Click here**](https://rentry.co/saturn-aeswap) to learn how you can make a smooth transition when upgrading versions without losing anything. It's easier than you might think.

### 4. What are plugins and which ones should I download?
[**Click here**](https://discord.com/channels/1204538209057382493/1230370991985786911) for a recommendation list.

### 5. Which version of After Effects is the "best"?
The newest version (features) is always worth getting as long as you have enough RAM and a good CPU, unless you're on Mac or on a lower end PC. [**Click here**](https://discord.com/channels/1204538209057382493/1381227246106447942) for more information.

### 6. Can I download cracked plugins even though I have a legitimate copy of After Effects?
Yes.

### 7. There is a watermark / red x when I use a plugin?
A watermark means that whatever plugin you're using is unlicensed. This indicates you did not install it properly and that you should try again from scratch. Make sure to properly read the readme.txt if there is one, and to check our install tutorials.

### 8. My plugin/software says it can be updated. Should I click accept?
No. You never want to risk updating cracked software through official update alerts, as the crack will likely stop working. If you would like to upgrade any of your software, you'll need to uninstall and install a newer cracked version.

### 9. I have duplicate effects from a plugin. What do I do?
Choose and delete one of the paths shown in the popup. For example, during Sapphire duplicates you may have both:
-  `C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\Sapphire Plug-ins,`</br>
-  `C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\BorisFX\Sapphire Plug-ins`

You can either delete the first or the second. [**Click here**](https://streamable.com/9okqr8) for a video example.

### 10. I installed an extension (e.g: Flow) but nothing happens when I click on it in After Effects. What do I do?
Ensure that the CEP (Common Extensibility Platform) is enabled.

**Windows:**
- Close After Effects.
- Download [**this file**](https://www.mediafire.com/file/g6pdj9v5xdyjkax/keys.reg/file) and run it.
- Done!

**MacOS:**
- Close After Effects and open Terminal.
- Copy and paste the text below:

```
defaults write com.adobe.CSXS.10 PlayerDebugMode 1
defaults write com.adobe.CSXS.11 PlayerDebugMode 1
defaults write com.adobe.CSXS.12 PlayerDebugMode 1
defaults write com.adobe.CSXS.13 PlayerDebugMode 1
```
- Hit enter and you're done.

### 11. Generative AI is not working. Help!
AI Tools such as Generative Fill will not work on cracked Photoshop. Adobe made these tools credit based which requires a connection to Adobe servers in order to work, which leads to users getting banned soon after. If you want these tools you will have to pay. Any website promoting a cracked version of Generative Fill is likely malware.
<br>

### 12. Missing CEP folder.
Make sure your installation isn’t faulty, and that scripting and expressions are enabled in After Effects. 

- Open After Effects.
- Locate Scripting & Expressions and enable “Allow Scripts to Write Files and Access Network”.
    - Windows: `Edit > Preferences > Scripting & Expressions`
    - MacOS: `After Effects > Preferences > Scripting & Expressions`

<br>

**Create the CEP folder manually:**<br>
MacOS:
- Go to the location below and create a **CEP** folder.<br>
`/Library/Application Support/Adobe/`
- Inside that CEP folder, create another folder named **extensions**.
<br>

Windows:
- Go to each of these locations (one at a time):
> `C:\Program Files (x86)\Common Files\Adobe`<br>
> `C:\Program Files\Common Files\Adobe`
- In each location, create a **CEP** folder, if there isn't one.
- Inside each CEP folder, create a subfolder called **extensions**.

## :star: Windows Issues
### 1. "Windows cannot complete the extraction. The destination file could not be created"
The majority of our files are password encrypted which File Explorer doesn't support. In order to open our files without error, you’ll need to install a third party software, such as [**7-ZIP**](https://www.7-zip.org/download.html) to extract. 

### 2. "An unexpected error is keeping you from copying the file, Error 0x80004005"
This error usually occurs if a file hasn't been properly extracted.
- Right click the file you want to open > 7-Zip > Extract here > Enter Password > OK.

This will create an uncompressed version of the folder. Open it and proceed as normal.

### 3. "The application was unable to start correctly (Oxc0000142). Click OK to close the application."
Starting from version 24.1, **After Effects requires your processor to support Advanced Vector Extensions 2** or else the software will not launch.<br>

If your processor does not support AVX2, **you'll need to downgrade to AE 2023 or lower**.

### 4. "The system cannot find the path specified."
Move the folder to desktop and try again. If that does not work, remove the "/" symbol from the folder name.

### 5. Error Code: 24 (Adobe)
For some unknown reason, Defender marks the Set-up.exe file as suspicious for some users and stops it. Even so, the file is not deleted, and Defender does not send any warnings for it. 
- Extract the **iso** file (Right click > 7-Zip > Extract here)
- Temporarily turn off your internet.
- Open the extracted folder and run **Set-up.exe**.

### 6. "AfterFX.exe - System Error. The code execution cannot proceed because MSVCP110.dll was not found."
Your computer is missing necessary components.
Install Microsoft Visual C++ Redistributable 2012: https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist
& restart your computer.

### 7. DaVinci Resolve Studio not starting.
Rename OFX folder "Plugins" (`C:\Program Files\Common Files\OFX`) to "Plugins.origin".

### 8. "The installation cannot continue as the installer file may be damaged. Download the installer file again."
Extract the file correctly with 7-Zip or WinRAR:
1. Install and use [**7-ZIP**](<https://www.7-zip.org>) / Alternative: [WinRAR](<https://www.win-rar.com/start.html?&L=0>)
2. Right-click the .zip file > 7-ZIP (under “show more options” if on Windows 11) > Extract here > Enter password > OK.

This will create an uncompressed version of the folder (without a zipper). Open that version and proceed as normal.

::: info
If it is extracted, it means you have leftovers of a previous installation. Use the official [Adobe Creative Cloud Cleaner Tool](https://swupmf.adobe.com/webfeed/CleanerTool/win/AdobeCreativeCloudCleanerTool.exe) to get rid of previous installations.
:::

### 9. Error Code 127 (Adobe)
[Error code 127](https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html#error127) indicates that the installer isn't able to extract the zip file in the `adobeTemp` folder. This might happen due to a lack of disk space or if the necessary permissions are unavailable. Sometimes, even antivirus software can block the extraction process in the temp directory.

1. Navigate to the `adobetemp` folder located at `<Root Drive>\adobeTemp`. 
In the following example, the root drive is the C: drive.
::: info
If the folder doesn't exist, you can also create the folder.
:::
2. Right click anywhere on screen > **Properties**.
3. In the **Security** tab, ensure that permissions for **System** and **Administrators** have **Full Control**.
4. Turn off your antivirus temporarily or whitelist it.

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
