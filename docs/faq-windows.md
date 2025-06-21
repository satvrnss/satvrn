---
title: Windows Issues
description: Common questions and troubleshooting for issues on Windows
---
# **Frequently Asked Questions**
::: tip
Use **Ctrl+F** / **⌘+F** to easily navigate the page.
:::
## :star: **Windows Issues**
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