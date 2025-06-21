---
title: Frequently Asked Questions
description: Common questions and troubleshooting for software and plugins.
---
# **Frequently Asked Questions**
::: tip
Use **Ctrl+F** / **⌘+F** to easily navigate the page.
:::
## :star: **General Questions**
### 1. Is [X] plugin compatible with my After Effects version?
The majority of plugins available on will work on any "common" version of After Effects (2018+). Most scripts will only work on 2020/21+.

### 2. How can I resolve "This unlicensed Adobe app will be disabled soon"?
This alert is fairly common and nothing you need to freak out over.  
[**Click here**](gcc.md) to learn how to remove it.

### 3. What will happen if I switch After Effects versions? (plugins, presets, etc..)
[**Click here**](versionswapguide.md) to learn how you can make a smooth transition when upgrading versions without losing anything. It's easier than you might think.

### 4. What are plugins and which ones should I download?
[**Click here**](beginnersguide.md#what-are-plugins-and-which-ones-should-i-get) for a recommendation list.

### 5. Which version of After Effects is the "best"?
The newest version (features) is always worth getting as long as you have enough RAM and a good CPU, unless you're on Mac or on a lower end PC.  
[**Click here**](beginnersguide.md#which-version-of-after-effects-should-i-get) for more information.

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