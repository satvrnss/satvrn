# **After Effects Installation Paths**

If using another version of After Effects, **replace any mention of "2024" to match your version**.
## Windows
### Presets
#### **User Presets:**
```
%USERPROFILE%\Documents\Adobe\After Effects 2024\User Presets
```
All user presets (presets that you made or downloaded from others) should be saved to and imported here.
**Files that end in `.ffx` go here.**

#### **Default Presets:**
```
C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\Presets
```
This location is reserved for default presets. Altering this location is not recommended unless for a specific reason.

### Plugins
#### **Local:**
```
C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\Plug-ins
``` 
Unique to that particular version of After Effects.  
- Some plugins may also be installed to `\Effects`

#### **Common:**
```
C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
``` 
Typically reserved for plugins that are compatible with both After Effects and Premiere, visible in all versions.  
**Files that end in `.aex` go here.**

### **Extensions**
#### **System:**
```
C:\Program Files\Common Files\Adobe\CEP\extensions
```
```
C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
```

#### **User:**
```
C:\Users\%USERNAME%\AppData\Roaming\Adobe\CEP\extensions
```
(if you don't have administrator).

**Folders that consist of multiple folders and files (CSXS, META-INF, etc.) go here.**


### **Scripts**
**For dockable scripts:**
```
C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\Scripts\ScriptUI Panels
```  
**For non-dockable scripts:**
```
C:\Program Files\Adobe\Adobe After Effects 2024\Support Files\Scripts
```

*Most scripts are dockable, it's unlikely that you'll ever use an undockable script unless you're a developer.*  
**Single files that end in `.jsx` or `.jsxbin` go here.**

## MacOS
### **Presets**
**User Presets:**
```
~/Documents/Adobe/After Effects 2024/User Presets
``` 
All user presets (presets made by you or downloaded from others) should be saved to and imported here.
**Files that end in `.ffx` go here.**

**Default Presets:**
```
/Applications/Adobe After Effects 2024/Presets
```
This location is reserved for default presets. Altering this location is not recommended unless for a specific reason.


### **Plugins**
**Local:**
```
/Applications/Adobe After Effects 2024/Plug-ins/
```
Unique to that particular version of After Effects. 
- Some plugins may also be installed to `/Effects`

Common:
```
/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
```
Typically reserved for plugins that are compatible with both After Effects and Premiere, visible in all versions.
**Files that end in `.plugin` go here.**

### Extensions 

**System:**
```
/Library/Application Support/Adobe/CEP/extensions
```

**User:**
```
/Users/<user>/Library/Application Support/Adobe/CEP/extensions
```
```
~/Library/Application Support/Adobe/CEP/extensions
```
**Folders that consist of multiple folders and files (CSXS, META-INF, etc..) go here.**

### Scripts
**For dockable scripts:**
```
/Applications/Adobe After Effects 2024/Scripts/ScriptUI Panels
```
**For non-dockable scripts:**
```
/Applications/Adobe After Effects 2024/Scripts
```
*Most scripts are dockable, it's unlikely that you'll ever install an undockable script unless you're a developer.*  
**Single files that end in `.jsx` or `.jsxbin` go here.**