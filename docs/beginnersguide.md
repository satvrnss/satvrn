# Beginner's Guide

## **Which version of After Effects should I get?**
Depending on where or who you ask this question, you’ll hear many different answers, and while they may not necessarily be wrong, they are often very biased. The "best" version of Adobe After Effects ultimately depends on your need for the latest features, preferences, as well as hardware compatibility.

#### The latest version of After Effects will have the newest features and bug fixes.
- After Effects 2022 introduced **multi-frame rendering** and the ability to **natively import 3D models**.
- After Effects 2023 added **native H.264 rendering** and a new **properties panel**.
- After Effects 2024 featured new and improved AI tools such as **Rotobrush 3** and **reverse keyframe pasting**.
- After Effects 2025 brought a refreshed 3D workspace UI, and **high performance preview playback** which greatly improves cache management for more efficient usage **which lower specs benefit from**.

::: info
For more details regarding each update, you can browse through Adobe’s release notes online.
:::

Most new features will not affect the result of your work but the editing experience itself — you can think of them as “quality of life” updates. They may make certain things easier, but you don’t need them in order to make a “good” edit, and in some situations upgrading may not be ideal.  

### **Specifications**
After Effects primarily relies on your CPU and RAM, but certain tasks and effects may utilize your GPU. For a balanced system, investing in both a decent CPU and GPU is recommended, along with 16GB or more RAM. Free storage for cache is also required — 512 GB is the minimum suggested for editing.
> You can read [here](<https://helpx.adobe.com/after-effects/system-requirements.html>) regarding After Effects system requirements.

Newer versions of After Effects tend to be slightly more demanding compared to older versions, so if you’re on a lower-end PC or budget laptop, you may have smoother performance with an older version such as 2020 or 2021.
However, if your system meets Adobe’s minimum requirements, you should consider taking advantage of that and installing a more up-to-date version such as 2024 or 2025.

Do keep in mind that After Effects projects are not backwards compatible. You won’t be able to open project files or import presets originally made with a version of After Effects newer than yours.  
- You can downgrade project files by going to **File > Save As > Save a Copy As (version).**

If you’re on macOS, [**read this**](<https://rentry.co/rosetta-adobe>) to learn about Apple Silicon and Sonoma compatibility issues. Mac users have different factors to consider compared to Windows users.

## **Saving and importing presets (.ffx, .mblook & .rgx)**
Presets allow users to save any adjustments they’ve made into a tiny file. Presets can help you save time by allowing you to easily re create transitions or effects in just one click. After Effects editors often share presets with one another, rather this be between friends, free online resources, or paid / premium content.

### **.ffx** presets
.ffx presets, unique to After Effects, are the most common type of preset you’ll find yourself working with. With FFX files you’re able to save keyframes and effects.

In order to save a preset, highlight what you’d like to be saved, such as any keyframes or effect controls by clicking and/or dragging your cursor over them or holding shift.  
Next, click “animation” at the top and select “save animation preset”. Name your preset whatever you’d like to remember it by. Presets should be saved in:  
- Windows / MacOS: `Documents\Adobe\After Effects (version)\User Presets`  

::: tip
For better organization, users can choose to create sub-folders in User Presets.  
For example, one folder for color corrections and another for shakes. You can organize and name your folders however you’d like, as long as they’re located under “User Presets” it doesn’t matter. You’ll be able to drop down these folders, ultimately resulting in a clean list inside After Effects.
:::

#### Incorrect guides online may use:
```
Program Files (“Applications” on Mac)\Adobe\Adobe After Effects (version)\Support Files\Presets
```
While this location may work, it is not recommended as it is reserved for default presets. If used, your personal presets will appear next to default ones, rather than being in their own category. After Effects is also unable to save in this location, meaning presets you make yourself and presets you download from others will be in separate locations, neither of which are ideal.

### **.mblook/.rgx** presets
.mblook and .rgx presets are unique to Magic Bullet looks, a plugin used to create colorings. While some editors may choose to save all their MBL settings as .ffx, which is perfectly fine, others may prefer .mblook or .rgx as you can easily preview them inside the Looks Builder, rather than having to apply them one by one.

To save a custom preset inside Looks on any version, simply click the downwards arrow on the bottom left of your screen after you’ve created your coloring.

The way you import presets depends on your Magic Bullet Looks version as Red Giant switched their extension from .mböook to .rgx in version 14 and higher.

#### **Version 13**
To import .mblook files on MBL 13 or older, simply paste them (as a folder) in the following location:
- Windows: `C:\Program Files (x86)\LooksBuilder\Looks`  
- MacOS: `/Library/Application Support/LooksBuilder/Looks/`  

Older versions of MBL (13-) do not support .rgx files, nor is there any way to convert them. You won’t be able to use these types of presets unless you upgrade.

#### **Version 14+**
To import .rgx files on MBL 14 or newer, simply paste them (as a folder) in the following location:  
```
Documents\Red Giant\Magic Bullet Looks\Presets
```
To import .mblook files, you’ll have to directly import them inside of Looks Builder, which will automatically convert them to .rgx for you.  
To do this, select the folder you want them to save to, click the ➜ symbol on the top left, then select the files you wish to import.

## What are plugins and which ones should I get?
Plugins are effects which aren’t native to After Effects, meaning you download them separately (third party). By installing plugins you’re able to use hundreds of effects which you wouldn’t have otherwise. What plugins you install depends on your needs and wants, nor are all plugins used in every editing style. Hoarding plugins is also not ideal for storage or performance.

#### **Below is a list of what the most “popular” plugins are, and what they do.**  
- **RSMB**: short for Reel Smart Motion Blur, applies a type of motion blur to your footage
- **MBL**: short for Magic Bullet Looks, an advanced color correction builder with plenty of tools to play with 
- **Twitch**: used to create twitch shakes, more specifically jerky like movements
- **Twixtor**: famous for making “smooth” slow motion, by warping pre existing frames together.
- **Universe**: comes with a handful of different effects, but is most popular for VHS.
- **Sapphire**: contains over 100+ visual effects, such as glows, glitches, warps, etc.
- **BCC**: short for BorisFX Complete Continuum, comes with over 100+ unique visual effects and transitions.
- **Trapcode**: used for creating overlays and backgrounds such as particles, swirls, and burst.
- **Element 3D**: used to create all sorts of 3d text, models and shapes. 
- **Saber**: used to create outlines and glows that look identical to light sabers, inspired by Star Wars. 
- **Deep Glow**: provides a beautiful glow effect, which looks better than any built in glow effect on text and pngs. 
- **Optical Flares**: used to create all sorts of flare transitions, highly customizable.
- **Signal**: adds an analog type glitch appearance to your footage.
- **Influx**: Supports more and new formats & codecs, allowing you to import more filetypes.
- **AfterCodecs**: Easy to use, allows you to render in higher quality natively in After Effects, no need for Quicktime. Supports mp4 and mov.

Some great plugins for glitch editing include: **Pixel Sorter, Omino, Glitchify, TV Distortion Bundle** and **Datamosh**.  
The majority of plugin developers have promotion videos on YouTube which you can watch to get a visual idea of what they can do.

## Composition Settings
### Resolution
![Composition Settings](./B703F7F1-65EB-4EA9-8544-233C19E2824A.jpg)  
__Resolution__ refers to the amount of pixels that exist inside an image. The first number represents the amount of pixels horizontally while the second number represent vertical. On the other hand, an __aspect ratio__ refers to the proportional relationship between an images width and height. 

::: info NOTE
Editing in higher resolutions will require a __powerful CPU__, __a good amount of RAM__ and __plenty of storage__. It’s also worth noting that the majority of social apps don’t support 4K and will automatically compress. 1080p is plenty good for casual work.
:::

### FPS Settings
The most common FPS in video editing. FPS represents the amount of frames per second.

- `30FPS`: Standard fps & can be used for most things. Editing pictures, animations, sports etc.  
- `60FPS`: Best when editing video games or making an edit that revolves around time interpolation.  
- `23.976FPS`: Best for cinema, real life footage and AMV’s. Most TV shows are shot in this fps.  
- `15FPS`: Used for an intentional “laggy” look, you can also experiment with any nearby numbers.

::: tip
Want to edit in a fps lower than 30?  
Instead of adjusting your FPS in comp settings, consider using posterize time (an effect in After Effects) to avoid potential playback glitches. By using this effect you’ll also have the ability to lower the frame rate of specific layers rather than having your whole project affected, plus, set keyframes.
:::

### Start & Duration
There are little situations where you’d need to change the __start__ number, you should leave it at 0.

Set your __duration__ to the length you want your edit to be. If you plan to edit to an audio that is 30 seconds long, you’d enter 0:00:30:00, additionally, your workspace will end at 30s.  
If you were to import a video which is longer than your set duration, you won’t be able to preview all of it as it’ll get blocked off. You can always adjust your comp settings and workspace at anytime.

### Other Settings
For a stronger motion blur, you can go into the “advanced” tab and increase your shutter angle and samples per frame. Intense motion blur is not recommended while also using RSMB.

Your background color represents the color that will be visible when no other media is on the timeline. If you plan to do fades or flashes, you should set this color to black for convenience.  
Make sure __to name your comps__ something recognizable, otherwise you may end up overwhelmed.

## After Effects Shortcuts
::: info note
The Mac equivalent of Ctrl is Cmd
:::

Spacebar = play/pause your preview  
0 Numpad = RAM preview 

I = go to first frame of the selected layer  
O = go to last frame of the selected layer  

B = set the beginning of your workspace  
N = set the end of your workspace   
(Your workspace is the area that plays when previewing)  

Ctrl + Shift + D = split your layer  
Alt/option + [ = trims your layer (beginning)  
Alt/option + ] = trims your layer (end)  

Ctrl + A = Selects all layers in your composition  
Ctrl + shift + C = precompose  

Ctrl + Z = undo your last action  
Ctrl+ Shift + D = Redo last action undone  

V = Select  
H = Hand  
S = Scale  
T = Opacity  
R = Rotation  
P = Position  
G = Pen Tool  
Y / A = Anchor Point  

U = View all Keyframe(s)  
L = Audio Level(s)  
M = View Mask(s)  
L 2x = View Waveform(s)  

Alt + Shift + S = Creates Scale Keyframe  
Alt + Shift + T = Creates Opacity Keyframe  
Alt + Shift + R = Creates Rotation Keyframe  
Alt + Shift + P = Creates Position Keyframe  

Ctrl + C = Copy  
Ctrl + V = Paste   
(You can copy and paste keyframes, effect settings, layers and more.)

Ctrl + S = Save  
Ctrl + I = Import  
Ctrl + O = Open  
Ctrl + Y = New Solid  
Ctrl + D = Duplicate Layer  
Ctrl + T = New Text Layer  
Ctrl + Alt + T = Enable Time Remap  
Ctrl  + K = Composition Settings  
F9 / FN + F9 = Easy Ease Keyframes  
F3 / FN + F3 = View Effects Panel  
F4 / FN + F4 = Show/Hide Layer Switches & Modes columns  
Ctrl + Alt + M = Adobe Media Encoder  
Ctrl + Alt + N = New Project  
Ctrl + Alt + Y = New Adjustment Layer  
Ctrl + Alt + Shift + Y = New Null Layer  
Ctrl + Alt + Home = Center Anchor Point  

Ctrl + Down Arrow = Select Next Layer in Stacking Order  
Ctrl + Up Arrow = Select Previous Layer in Stacking Order  