# Conventions for SEA INFO6250

There are many conventions we will be using in this class: rules we will follow even though they aren't actually required by the software/operating system/language.  Some of these are nearly universally followed conventions in the industry or the relevant community within the industry, some of these are a specific choice between a few commonly used options, and some of these are my particular rules.  I will attempt to label these so you know which is which.

## My Messaging

I often use very terse language when making comments or giving instructions.  This is because I want you to focus on the important parts and/or because I have a lot of students and code to go through.  Please do not assume I am saying anything negative (See also "Code Reviews" document) instead I'm being efficient.  If you are worried I may be actually expressing a negative thought, feel free to ask.

At times I will precede a message with one of the below.  This should indicate my overall intention.
- SUGGEST - "You should do this thing I'm saying for this class, and based on my personal experiences it's a good idea overall, but many others do it differently"
- CONSIDER - "You do not need to do this thing I'm saying for this class, and you may have good reasons not to do it that I haven't thought of, but it's worth at least thinking about"
- IMPROVE - "You should do this thing I'm saying, not just for this class, but in your code outside of class because it's generally an industry best practice"
- AVOID - "You should NOT do this thing you did, not just for this class, but in your code outside of class because the industry considers it a bad practice"
- NICE - "You should keep doing this thing you did.  I may or may not have suggestions following, but this is already good."
- CONFUSED - "I was unable to follow your logic here so I can't give good suggestions, but you should make it less complicated/dense or more expressive."

## Git

- All commit messages should have some useful meaning by themselves, no context needed
- Some specific assignments will have required branch names.  This is REQUIRED so that your work gets credited.
- All branches should be in lower-kebab-case
- All branches names should hint at the purpose of the branch
- Do not reuse branches for unrelated code.  If your branch name can be for most any code, it's probably not specific enough

Ideally you try to keep 1 feature = 1 branch, and merge features in to the branch you will submit as they are usable.  This is not required for the class, but it's a practice most workplaces will expect you to be familiar with and it does require practice to learn how to organize that way while coding.

## Linting and Style

I will provide an eslint configuration file and your code is expected to pass it cleanly.  If you need to create an exception, make sure the reason it is required is explained.

It is your responsibility to ensure that your code passes - most editors have the ability to apply such rules but you have to ensure they are using the same rules as those I provide.  How to do so will vary greatly between each editor.

Opinions are strong about what is/is not a good style.  Two coders will each find the other's preferred style "ugly" and "hard to follow".  The standard I apply is not terribly picky about details, but may not match your personal preferences or those used in other classes.  I require that everyone follow the provided standard not only because I have so many different code bases to examine, but to have everyone build consistency and even follow rules that are not your first choice (rare is the workplace where everyone agrees on every styling decision).

## Slack

The vast majority of my communication to you will come through the class Slack workspace. (let me know if you need it again)  Likewise, Slack is likely the fastest way for you to reach me.  This is not just because I like Slack, but because some form of team/company online chat client is normal for the industry.  

In addition to the required channel(s), I have some optional channels where I discuss and/or link to topics like job hunting/interviews or helpful articles about some technology or practice. (#articles and #job-hunting)

## Outside Tooling

For assignments and exams, do not use any external libraries unless told to.  For Final Projects you can use outside libraries as long as the core technologies don't change.

Cloud/online resources likewise should not be added outside of explicit assignments and your Final Projects.  This includes online services and cloud-based resources.

If you want to have external processors, such as a CSS pre-processor or a JS prettyprinter, that is up to you, but doing can't add work to me/TAs, and you will be judged be the output of the products, so I don't recommend using such in assignments and exams.

## HTML Requirements

- You should have valid HTML (more than just rendering correctly, it must BE correct).  There may be a few exceptions that are not technically correct but are commonly accepted as valid, or when an assignment asks for that. 
- Your files should have a `.html` file extension
- You should indent if you go to a newline when inside a tag.
- Your nesting indents should line up. (i.e. don't have multiple opening tags each on different lines but then have their corresponding closing tags all on the same line)
- All tagnames should be lowercase (`<!DOCTYPE` is an exception because it is not actually HTML)
- When you declare a doctype, it should be `html`
- DO NOT USE TABLES (`<table>, <tr>, <td>, etc`)
  - Tables are fine if used to show spreadsheet-like data
  - Tables are NOT fine if abused to manage layout (use CSS to manage layout/appearance)
- You should not have inline JS on tags
  - Use `addEventListener()` in the JS code instead
- You should not have inline CSS on tags 
  - Give it a class and style the class instead
- You should not switch between single-quotes and double-quotes for no good reason
- You should strive to make your HTML semantic
    - Use tags that describe the kind of content they hold, and/or that group related material
    - Do not use the default styling of elements to manage layout/appearance. 

## CSS Requirements

- You should have well-formatted (for humans) and valid (for computers) CSS
- You should have your stylesheet in a separate .css file.
- Your class names should describe the content they apply to, not the style that is applied
   - Ask yourself "If I changed the appearance completely, would the class name still make sense?"
   - Ask yourself "If someone was writing their own CSS for my HTML, would they be able to relate the classnames to their content?"
- AVOID: inline styles.  Sometimes these are applied by JS in response to a user action, but if the styling relates to a particular state (such as 'the user selected this block') or if the styling is not super-simple then you should have pre-defined classnames and stylings that the JS can add/remove from the elements.
- AVOID: `float`.  Float is often used for layout, but these days float should only be used to wrap text around an image.  Other uses are now covered by `display: inline-block` or CSS Flexbox.  You want to avoid floats because if they are the only child node of an element the height of the floating block is not counted towards the necessary height for the parent which can in turn impact the height of ITS parent, and so forth.  
- AVOID: `clearfix`.  Clearfix is not a CSS property, it was a technique used to work-around the issues with floats.  You are avoiding float, so you can avoid clearfix
- AVOID: Setting explicit heights/widths on structural elements.  By 'structural elements' I mean those tags that form the outline structure of the document.  In general, you can tell you have done this if changing the explicit dimensions of one element forces you to manually change the explicit dimensions of other elements.  Internal elements like a logo or button can be sized, though you should still only do the minimum needed.  The entire body can also have an explicit width (people often prefer NOT to use the full width of their screens), but not height.  Explicit dimensions on structural elements is also acceptable if you are intending for it to hold material that scrolls - in that case increasing the height of the contained elements does not force a change in the parent elements.
- AVOID: Unnecessary specificity in your selectors.  Selectors that rely on multiple elements tend to be brittle, and they can cause specificity wars if you need an exception.

## JS Requirements

- Your JS should be in a separate .js file or files that have lower-kebab-case filenames
  - JS files that solely hold a class definition use MixedCase, including .jsx files (when we get to React)
- Your JS should use camelCase for most variables, but MixedCase for class definitions and UPPER_SNAKE_CASE for specifically constant values
- Your JS should pass the eslintrc file once provided
- Your JS should strive for very small functions - 10-15 lines each is the goal
- Your JS should make effective use of whitespace to improve clarity
- Your JS should use expressive names for variable, function, and files
- Your JS should strive towards an expressive structure that allows for easy skimability. 
- Your JS should avoid pointlessly abbreviating variable names.  (shortening 'manufacturer' to 'mfr' is an acceptable abbreviation.  Shortening 'name' to 'nme' is not)
- Your JS should minimize dependencies or knowledge between disparate items (Law of Demeter/Principle of Least Knowledge)
- Your JS should try to make functions, classes, and files reusable in unrelated projects
