# Adobe Ungenuine Popups Fix
All Adobe software includes a client called "Adobe Genuine Service" which periodically verifies whether installed Adobe apps are genuine or not, and if triggered, said software will be disabled after a 10 day grace period. **That said, there's no need to panic!**

## Windows
::: info BASICS
- Don't be on a virtual IP address (VPN/Proxy) - it will circumvent local settings such as hosts file or firewall rules.
- Make sure your firewall is enabled or else no rules will not be applied.
- Don't have Creative Cloud installed. m0nkrus installers block communications to Adobe servers, and you require no account to use m0nkrus. It will very often break if you have Creative Cloud. [Uninstall it here](https://swupmf.adobe.com/webfeed/CleanerTool/win/AdobeCreativeCloudCleanerTool.exe).
:::

### Method #1
Blocking the targeted software from connecting to the internet is effective as it prevents Adobe Genuine Service from being able to verify your licensing status.  
You can easily do this by setting up some firewall rules.  

1. Open "Windows Defender Firewall with Advanced Security".
2. Click “Outbound Rules” on the left side.
3. Click “New Rule..” on the right side.
![New Rule](https://b.thumbs.redditmedia.com/sbLzTKAiZnQqjK7IuJtm-TKzcMctIpjMEfaMzs6eiIA.png)
4. Select your Adobe application(s), for example, "AfterFX.exe" for After Effects which is normally located at:
```
C:\Program Files\Adobe\Adobe After Effects (version)\Support Files
```
5. Select “Block the Connection” and name the rule whatever you want.
6. If the alert still appears, repeat the same steps but this time set up an "Inbound" rule.
> **[**VIDEO TUTORIAL**](https://streamable.com/tim4rl)**

> [!IMPORTANT]
> - You must block the actual **exe**, not a shortcut in order for this to work. Shortcuts icons [have arrows](https://i.ibb.co/j4BkW0F/phonto.jpg) on them.
> - If you have a third party software managing your firewall [(how do I check?)](https://i.ibb.co/BBxN4z2/image.png), you'll have to block the app inside *that* software for this to work.
> - Don't be on a virtual IP address (VPN/Proxy) - it will dircumvent local settings such as hosts file or firewall rules.
> - Make sure your firewall is enabled else no rules will not be applied.  

Alternatively, you can automatically block **all** Adobe firewalls by running [**this script**](https://gist.github.com/ph33nx/0ed14724213c4cc467c85826c9dca908).  
This is not recommended if you're paying for any Adobe software or have a paid plugin/script.

1. Download the script (Download ZIP, top right)
2. Extract the zip folder
3. Open the folder and run the .bat as administrator.
4. Wait for it to complete, then you are done.

> [**VIDEO TUTORIAL**](https://streamable.com/9yk8d0)

### Method #2
This method consists of blocking individual IPs that are linked to GCC, rather than blocking the software's internet connection as a whole. This method may require occasional updating as Adobe goes under new IPs, but is very effective and only blocks what is necessary, allowing users to keep access to any online only tools.

1. Open PowerShell as Administrator and paste this command:  
```
Stop-Process -Name "Adobe Desktop Service" -force
```
If it says it cannot find the process, don't worry and continue to the next step.  

![PowerShell](https://b.thumbs.redditmedia.com/kbmRrE_CMsxMdZISJ1zQ-GsP2mY3gJlsrAHpWYs3QTk.png)  

2. Open Notepad as Administrator, click "file" in the top left hand corner, then "Open".
3. Head to the following location and make sure to select "All file types (*.*)", NOT "text (*.txt*)":  
```
C:\Windows\System32\drivers\etc
```
4. Select the file named "host" and click open.  

![hosts](https://b.thumbs.redditmedia.com/r06GUpx75wQ183VGlp0-NrsRQfOwETXrD1ib0yZdOwI.png)  
5. On a blank line below all existing text, copy and paste the following list of IPs found at https://a.dove.isdumb.one/list.txt and save, done!

> [**VIDEO TUTORIAL**](https://streamable.com/mnduve)

### Method #3
This method will uninstall Adobe Genuine Service, however it's one of the methods that rarely work, but is worth trying.

1. Open PowerShell as Admin and input:
```
[System.Diagnostics.Process]::Start("C:\Program Files (x86)\Common Files\Adobe\AdobeGCClient\AdobeCleanUpUtility.exe")
```
2. Follow the on-screen instructions. If that directory is absent, then the service won’t be installed. **If absent, skip this method.**

#### **Block AGS in firewall:**
Create Outbound rules on Adobe Genuine Service.

Path of AGS:
```
C:\Program Files (x86)\Common Files\Adobe\Adobe Desktop Common\AdobeGenuineClient\AGSService.exe
```
```
C:\Program Files\Adobe\Acrobat DC\Acrobat\GC\AGSService.exe
```
:warning: If the issue persists, you can create the same rules for "Inbound".

## MacOS
::: info BASICS
- Don't be on a virtual IP address (VPN/Proxy) - it will circumvent local settings such as hosts file or firewall rules.
- Make sure your firewall is enabled or else no rules will not be applied.
:::
### Method #1
Download [Adobe Genuine Pop-up Blocker](https://pixeldrain.com/u/4wz7kv7W) and run it.

This is a script that updates the hosts file with the [Adobe blocklist](https://a.dove.isdumb.one/list.txt) periodically.  
It runs in the background, and updates upon startup, and then every 30 minutes.  
*(If the blocklist url or internet isn't available, the hosts file is left untouched.)*

::: info 
If you are doing this method, you do not need to do Method #3.
:::

### Method #2
Since blocking outgoing connections unfortunately isn't a feature available on MacOS yet, you will need to download a third party software in order to achieve this. **Radio Silence** is one of the best and easiest firewall apps for MacOS.

[**Radio Silence**](https://objective-see.org/products/lulu.html) cost $9.00 if you'd like to support the company, you can also download a cr4cked (free) version [**here**](https://www.mediafire.com/file_premium/0kv657im9crdwnj/Radio_Silence_3_3.dmg/file). 100% safe and working. Follow the setup instructions.

#### **Instructions (Radio Silence)**:
1. Open Radio Silence, make sure "on" is toggled on.
2. Click "block application" and select your adobe app(s).
3. Click open, and you're done! You can close the app.
> [**VIDEO TUTORIAL**](https://streamable.com/fsxsap)  

#### If the alert still shows after using Radio Silence:
1. Open Security & Privacy in Mac settings
2. Under Firewall select "Firewall Options"
3. Click the plus icon and select your Adobe software
4. Select "block incoming connections" and click OK

### Method #3
1. Open Terminal and paste this command:
```
sudo nano /etc/hosts
```
Enter your password when requested.  

2. On a blank line under all existing text, copy and paste the following list of IPs found at https://a.dove.isdumb.one/list.txt.
3. In a new terminal window, paste this command and click enter:
```
sudo killall -HUP mDNSResponder
```
4. Restart your computer and the alert should be gone.

> [**VIDEO TUTORIAL**](https://youtu.be/kspZLTtc_XU?si=cE9WjRV0XfO5kbgJ)

> [!IMPORTANT]
> As stated previously, Adobe may switch to to new IP addresses meaning that your "disabled" alert may re-appear later. Just repeat the same steps to include any new IPs in your host, as the list above is frequently updated.
