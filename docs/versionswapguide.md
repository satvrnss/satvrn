# **After Effects Version Swap Guide**

::: info
This is a quick, comprehensive guide on how to swap After Effects versions efficiently. This guide includes how to transfer your workspaces, plugins and scripts, along with your User Presets.  

Note that if you are simply updating the same version (e.g 25.1 → 25.2), it will automatically override your settings and transfer everything by itself.  

**This guide only applies if you are swapping years (e.g 2024 → 2025)**.
:::
::: tip
You can always have two versions of After Effects installed at the same time. There’s no need for you to uninstall one then install the other nor is this recommended in case something goes wrong. Instead, install the version you’d like to switch to, open it and make sure everything is working perfectly, and if everything checks out then you can uninstall your previous version.
:::
***
Plugins such as **Sapphire, BCC, Twixtor and RSMB** will automatically transfer.
These plugins are called *global plugins* and will be located in your MediaCore folder.

#### Now, let’s get started.  
**I will use 2024 → 2025 as an example in this guide, but change it to your versions if you aren’t doing the same.**  
::: warning
⚠️ If any paths don’t appear, make sure hidden folders are visible ⚠️
- AppData on Windows
- ~/Library on MacOS
:::

## **Windows**
*Install your new version of After Effects. You can have 2+ versions installed simultaneously.*

1. Create a new folder anywhere on your computer. **This will be your backup folder.** I recommend placing it on your Desktop for easy access.

2. Navigate to the folder below and find the "**Plug-ins**" folder.
```
C:\Program Files\Adobe\Adobe After Effects 2024\Support Files
``` 
   - Copy everything **except** these folders inside of **Plug-ins**:  
     	- (AdobePSL)  
     	- Cineware by Maxon  
     	- Effects  
     	- Extensions  
     	- Format  
     	- Keyframe  
   - In your backup folder, create a subfolder called "Plug-ins" and paste the copied files there.

3. Locate the “**Scripts**” folder in:
```
C:\Program Files\Adobe\Adobe After Effects 2024\Support Files
```
   - Copy the entire **Scripts** folder and paste it into your backup folder.

4. Go to 
```
Documents\Adobe\After Effects 2024
```  
   - Copy the **User Presets** folder and paste it into your backup folder.  

5. Finally, go to:
```
C:\Users\%username%\AppData\Roaming\Adobe\After Effects\24.4
```
   - Copy the folders:  
     `ModifiedWorkspaces`  
     `OriginalUserWorkspaces`  
   - Paste both into your backup folder.

#### **Transferring to new version:**
1. Copy the contents of your backup "**Plug-ins**" folder and paste them into:  
```
C:\Program Files\Adobe\Adobe After Effects 2025\Support Files\Plug-ins
```  
- **Do not replace** any existing files or folders if prompted.

2. Copy your "**User Presets**" folder from your backup and paste it into:  
```
Documents\Adobe\After Effects 2025
```
- **Do not hit replace** if prompted.


3. Copy "**ModifiedWorkspaces**" and "**OriginalUserWorkspaces**" from your backup folder and paste them into:  
```
C:\Users\%username%\AppData\Roaming\Adobe\After Effects\25.2
```
- **Hit replace** if prompted.

## **MacOS**
*Install your new version of After Effects. You can have 2+ versions installed simultaneously.*

1. Create a new folder anywhere on your computer. **This will be your backup folder.** I recommend placing it on your Desktop for easy access.

2. Navigate to the folder below and find the "**Plug-ins**" folder.
```
/Applications/Adobe After Effects 2024/Plug-ins
``` 
   - Copy everything **except** these folders inside of **Plug-ins**:  
     	- (AdobePSL)  
     	- Cineware by Maxon  
     	- Effects  
     	- Extensions  
     	- Format  
     	- Keyframe  
   - In your backup folder, create a subfolder called "Plug-ins" and paste the copied files there.

3. Locate the “**Scripts**” folder in:
```
/Applications/Adobe After Effects 2024
```
   - Copy the entire **Scripts** folder and paste it into your backup folder.

4. Go to 
```
~/Documents/Adobe/After Effects 2024
```  
   - Copy the **User Presets** folder and paste it into your backup folder.  

5. Finally, go to:
```
~/Library/Preferences/Adobe/After Effects/24.4
```
   - Copy the folders:  
     `ModifiedWorkspaces`  
     `OriginalUserWorkspaces`  
   - Paste both into your backup folder.

#### **Transferring to new version:**
1. Copy the contents of your backup "**Plug-ins**" folder and paste them into:  
```
/Applications/Adobe After Effects 2025/Plug-ins
```  
- **Do not replace** any existing files or folders if prompted.

2. Copy your "**User Presets**" folder from your backup and paste it into:  
```
~/Documents/Adobe/After Effects 2025
```
- **Do not hit replace** if prompted.


3. Copy "**ModifiedWorkspaces**" and "**OriginalUserWorkspaces**" from your backup folder and paste them into:  
```
~/Library/Preferences/Adobe/After Effects/25.2
```
- **Hit replace** if prompted.