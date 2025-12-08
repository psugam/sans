+++
title = 'Color Scheme Configuration'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++

This guide explains how to customize the visual appearance of your site through theme color configuration and optional feature toggles.

---

## Theme Features

The Sans theme provides several optional features that can be enabled or disabled based on your preferences. Configure these settings in your `hugo.toml` file:

{{<codeblock lang="toml">}}
[theme]
  showDarkModeToggle = true
  showSearchIcon = true
  showGoToTop = true
{{</codeblock>}}

{{<table headers="Feature|Parameter|Description" caption="Available Theme Features" >}}
Dark Mode Toggle|showDarkModeToggle|Displays a toggle button for switching between light and dark themes
Search Icon|showSearchIcon|Shows the search functionality icon in the navigation
Go to Top Button|showGoToTop|Displays a button to scroll back to the top of the page
{{</table >}}

---

## Color Scheme Configuration

### Theme Mode Behavior

The theme supports two distinct color modes: light and dark. The configuration requirements depend on whether the dark mode toggle is enabled:

- **When `showDarkModeToggle = false`**: Only light mode color values are required
- **When `showDarkModeToggle = true`**: Both light and dark mode color values must be configured for proper functionality

### Color Value Formats

Color values can be specified using any CSS-compatible format:

### Configuration Parameters

Add the following parameters to your `hugo.toml` file under the `[theme]` section:

{{<codeblock lang="toml">}}
[theme]
  # Background Colors
  darkModeColor = '#333333' 
  lightModeColor = 'white'
  
  # Link Colors
  darkModeLinkColor = '#CCCCCC'  
  lightModeLinkColor = '#00e'
  
  # Hero Section Colors
  heroSectionColor = 'white'  
  darkHeroSectionColor = 'black'
  
  # Primary Button Styles
  lightModeButton = '#007bff'
  lightModeButtonText = '#ffffff'
  darkModeButton = '#0d6efd'
  darkModeButtonText = '#ffffff'
  
  # Secondary Button Styles
  lightModeButtonAlt = 'transparent'
  lightModeButtonAltText = '#007bff'
  darkModeButtonAlt = 'transparent'
  darkModeButtonAltText = '#4d9aff'
{{</codeblock>}}

---

## Default Configuration

The theme includes a carefully designed default color scheme. If you wish to maintain the original appearance, no modifications to the color configuration are necessary. The default values provide optimal contrast and readability for both light and dark modes.

To preserve default styling, simply retain the existing configuration without modification.

---
