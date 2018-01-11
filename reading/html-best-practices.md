# HTML Best Practices

## What is 'Best'?

Here I'm listing the practices that are generally desired across the industry.  Any subfield, company, or project may have different practices for good reasons or poor reasons. While many of the entries here have an objective basis, whether the result is desirable is ultimately subjective.

## The List of Best Practices
Each practice is explained in more detail below

* use valid HTML
* move styling and JS out of the html file
* avoid JS or styles inside the tag
* use lowercase tags
* use HTML5
* do not use presentational HTML
* use basic semantic HTML
* use kebab-case class names
* use meaningful id or class names

### Use valid HTML

You should never rely on browsers interpreting invalid HTML correctly, because that could change at any time and/or your HTML may be consumed by something else (another browser, a program, ...) that applies different interpretations.  

This does not mean that every technical violations must be removed - there are some small rules that may be violated to be compatible with older browsers, to enable some dynamic features, or because the de facto standard is different than the technical rule.  Nonetheless, any exception should be a standard exception.  Otherwise, use valid HTML.

### Move styling and JS out of the html file

Have separate CSS and JS files rather than embedding style or script tags in the page.  There are limited exceptions to this.

### Avoid JS or styles inside the tag

Do not use the style attribute or any onNNNN attribute.  Styling is best attached via selectors from an outside file, and scripting is best attached to events from JS loaded from an external file.

### Use lowercase tags

Fairly self-explanatory.  Even though browsers may accept tags in any particular case, ALL HTML (including properties, attributes, and tags) should be in lowercase.

### Indent 2 or 4 spaces (or by tab)

These are the standard indention level, either 2 characters per indentation or 4 characters per indentation.  There is a long-running debate about whether to use spaces or tabs (1 tab = 1 level of indentation).  The most common case is to use spaces, and you should match whatever your workplace follows.  

You _must_ be consistent in which you use within any file, however, or people will hate you.

### Use HTML5

This means having an HTML doctype, and following the general rules of the HTML5 spec(s) to the extent that browsers support it.

### Do not use presentational HTML

There are certain tags and attributes that have the purpose of providing a particular appearance.  Do not use them, rely on your CSS for styling. 

This includes using tags purely for how the default browser rendering modifies your result.  (Example: Don't have multiple empty paragragh or break tags to create space).

This does NOT mean that you can't use tags that do have useful default styling, such as lists and b and i tags.  So long as the tag has meaning outside of the appearance, it is fine to use.

This also does NOT mean that you can't insert some tags around content just so that you can target that content with CSS.  Unfortunately, we often have to do this, though you should minimize it.

### Use basic semantic HTML

Try to use tags that describe your document.  It's possible to use entirely div tags...but don't.  Make use of tags for their structural meaning whenever you can.

This often has limitations.  That's fine.  Make the most of it you can, because it usually ends up making things easier later.

### Use kebab-case class names

Though this convention is not as strictly followed anymore, I'll still ask you to follow it: any classes listed in the "class" attribute should be all lowercase words separated by hyphen (-) characters.  (known as kebab-case)  This can feel odd, as JS variables will have a different standard, but that's the convention.

### Do not create your own properties or attributes on existing tags

Browsers can let you get away with doing so, but it is almost always a bad idea.  If you need to associate some data with a tag, use the dataset attributes, which let you use "data-NNNN" as an attribute, where NNNN can be any kebab-case word or words.  This should occur rarely - associating to much data to an element in the attribute means that it is not easily reachable - better to put that data in the page as content.

### Use meaningful id or class names

Your id and class names should reflect the structural effect or higher-level summary of the content.

