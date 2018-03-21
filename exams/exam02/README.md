# Exam 2 Instructions

Follow these CAREFULLY to ensure full credit

## Exam rules

### 3rd Parties

You can and should discuss and inspire one another, including about material covered by the exam.  Your exam work, however, should be purely your work.  If someone has a particular function, for example, don't just paste it in.  Changing the names of the variables is not very effective.  Instead, understand how their version works, and create your own version using your understanding.

Do not use any external sources such as JS libraries or CSS templates in your code unless explicitly permitted.

This includes redux, react-router, Bootstrap, and other libraries.

### Due

The pull request and matching branch should be in github before the start of class on Mon Mar 26

### Format

Your code should be in this directory and the exam section subdirectories.  You may create additional subdirectories beneath those if you wish.


Your Pull Request should request to merge your "exam2" branch with master on your assignment repo.

The branch should include only the files needed (e.g. no node_modules, no IDE files)

Your files need to be accessible and human-legible (It shouldn't be in some dense format or weird filetype)

Some filenames have been specified

### Best Practices

Create your css, markup, and code by the best practices discussed in class

For this exam, pay particular attention to:
- separating structure (HTML/JSX), presentation (CSS), and behavior (JS) when possible.
- short, limited functions (10-15 lines or less)
- components of limited scope
- components that are not needlessly coupled to the application
- useful variable/function names
- consistent indenting
- avoiding unnecessary complexity
- HTML that not only displays correctly, but follows the element requirements
- Naming and cases.  JSX components are MixedCase, with the filename matching the component name. JS and HTML are camelCase, except that css class names and properties are kebab-case. 
- Following the JS idioms demonstrated so far (don't write code as if this were a different programming language)
- Using semantic structure in your markup and css class names
- Not throwing CSS at the rule until it works - understand what is actually happening and what each property does

### Worst Practices (for this exam) 

Definitely do NOT do these:
- (BAD) Use CSS classes that describe the appearance rather than the content/state
- (BAD) Use floats in your CSS (unless using it for the one valid reason)
- (BAD) Use tables for layout in your HTML
- (BAD) Read the DOM to determine application state
- (BAD) Use alert() in JS
- (BAD) Use inline JS or inline CSS in HTML (in JSX is okay)
- (BAD) Interact with the DOM outside of JSX construction
- (BAD) Have everything in one function/component
- (BAD) Unnecessary explicit heights/widths
- (BAD) Have JS for logic in your components
- (BAD) Log to the console
- (BAD) ignore fetch() related errors

### Meh

Except where explicitly said otherwise, you are free to be object oriented, functional, or any other style of coding so long as it is clear.  

You may use class-based or function-based components (which would involve both)

You may use separate CSS files or inline CSS in components (not outside of JSX), but you should be consistent.

If the question does not specify, you may use JSX, JS, CSS, or HTML to solve a problem, but you will be judged on the appropriateness.

## Exam Projects

Follow the instructions in the README.md files in both the part01/ and part02/ directories

