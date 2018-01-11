# CSS Best Practices

Best Practices depend on what style of CSS you are using:

## Conventional CSS Best Practices

* use lowercase-kebab-case class and id  names
* do not use class names that describe the styling directly (AVOID: 'inverse-colors', 'blue', 'indented'
* do use class names that describe the content (e.g. 'main-menu' instead of 'inverse-colors')
* do not use the !important modifier
* place one property setting/line
* Always include a semicolon after each property setting
* try to make styling rules reusable 

Two additional popular conventions I dislike are below.  
* Use shorthand properties where you can
  * I dislike this because the longer form is more explanatory
* Do not apply units to dimensions of 0
  * I dislike this because it hides your normal units, and because I can consider units that aren't 0 at the same time (such as temperature) 

## BEM CSS Best Practices

BEM - Block-Element-Modifer - is one of a few different CSS naming/use methodologies.  Specifically, it attempts to create a structure that is not based on cascading styles, but instead collecting HTML content into blocks of internally consistent CSS labels and styles.  

I will not be using BEM in my class examples, but outside of assignments that specifically request certain styling conventions, I have no objection to students using BEM.  

BEM or not, you ARE required to have a CSS style that is consistent throughout that assignment code.

## Alternative CSS Best Practices

Numerous other approaches exist, each trying to find the balance point between 'specific enough to be practical, generic enough to be usable after changes, and able to not have cascading cause unexpected problems'.  You can adopt one of these or simply build your own understanding through experience and attempting to find the balance on your own.  Each assignment, however, must be internally consistent in the usage.
