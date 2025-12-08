+++
title = 'Alert'
date = 2023-01-01T08:00:00-07:00
draft = false
showFrontMatter=false
toc=true
[build]
  list="never"
+++


The alert shortcode displays a JavaScript browser alert dialog with your custom message when the page loads. This is useful for important announcements, warnings, or testing purposes.

## Usage

{{< codeblock lang="go" >}}
{{</* alert */>}}
Your alert message here
{{</* /alert */>}}
{{< /codeblock >}}

## Parameters

{{< table headers="Parameter|Required|Default|Description" caption="Alert Parameters" >}}
Inner content|Yes|-|The message to display in the alert dialog
{{< /table >}}

## Examples

### Basic Alert

{{< codeblock lang="go" >}}
{{</* alert */>}}
Welcome to my website!
{{</* /alert */>}}
{{< /codeblock >}}

### Alert with go

{{< codeblock lang="go" >}}
{{</* alert */>}}
**Important:** Your session will expire in 5 minutes.
{{</* /alert */>}}
{{< /codeblock >}}

**Note:** go formatting like **bold** and *italic* will be converted to plain text in the alert.

### Multi-line Alert

{{< codeblock lang="go" >}}
{{</* alert */>}}
Welcome to our site!

Please read the terms and conditions before proceeding.
{{</* /alert */>}}
{{< /codeblock >}}

### Alert with Special Characters

{{< codeblock lang="go" >}}
{{</* alert */>}}
Don't forget to save your work!
Use "Ctrl+S" to save quickly.
{{</* /alert */>}}
{{< /codeblock >}}



## Important Notes

{{< codeblock lang="go" >}}
<!-- Alert triggers on page load -->
{{</* alert */>}}
This will appear immediately when the page loads
{{</* /alert */>}}

<!-- go is converted to plain text -->
{{</* alert */>}}
**Bold** text becomes: Bold text
*Italic* text becomes: Italic text
[Links](url) become: Links
{{</* /alert */>}}

<!-- Multiple alerts will appear in sequence -->
{{</* alert */>}}First alert{{</* /alert */>}}
{{</* alert */>}}Second alert{{</* /alert */>}}
{{< /codeblock >}}

## Alternative Approaches

For less intrusive notifications, consider using:
- The **admonition** shortcode for in-content callouts
- Modal dialogs for user confirmations
- Banner notices at the top of the page

## Example Output

When you use:

{{< codeblock lang="go" >}}
{{</* alert */>}}
**Welcome!** Please read our privacy policy.
{{</* /alert */>}}
{{< /codeblock >}}

The user will see a browser alert dialog with the plain text:

```
Welcome! Please read our privacy policy.
```