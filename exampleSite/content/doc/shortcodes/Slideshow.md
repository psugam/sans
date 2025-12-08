+++
title = "Slideshow Shortcode"
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

The **slideshow shortcode** allows you to create an interactive image slider with optional captions.  
It supports multiple images, custom width, and navigation buttons. Images can come from **page resources** (i.e. same folder as the markdown file) or the **assets folder**.

---

## Usage

{{< codeblock lang="go" >}}
{{</* slideshow
    slidewidth="90%"
    caption="Journey through the Alps"
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
*/>}}
{{< /codeblock >}}

---

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Slideshow Shortcode Parameters" >}}
slidewidth|No|100%|Width of the slideshow container (supports %, px, or rem)  
caption|No|-|Optional main caption displayed below the slideshow  
image1..image20|No|-|Paths to images to include in the slideshow  
caption1..caption20|No|-|Optional captions for each corresponding image  
{{< /table >}}

> **Note:** You can include up to 20 images by default. The slideshow automatically skips any empty image parameters.

> To increase the number of images that can be included in a slideshow.Go to **config/params.toml** and edit this:
{{<codeblock lang="toml">}}
    
 [slideshow]
  maxSize=20 
{{</codeblock>}} 

---

## Examples

### Basic Slideshow
{{< slideshow
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
>}}



---

### Slideshow With Custom Width and Main Caption

{{< slideshow
    slidewidth="90%"
    caption="Journey through the Alps"
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
>}}


---

### Slideshow Without Captions

{{< slideshow
    slidewidth="90%"
    image1="/images/img_mountains.jpg" caption1="Sunrise over the peaks"
    image2="/images/img_forest.jpg" caption2="Morning mist"
    image3="/images/img_lights.jpg" caption3="Reflections on the lake"
    image4="/images/avatar.png" caption4="Avatar"
>}}

---
