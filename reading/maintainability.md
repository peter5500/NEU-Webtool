# Maintainability

## What is Maintainability?

Maintainability is a rough approximation of how well code will:
- have other devs (including your future self) intuit or recognize the larger structural abstractions
- allow for inevitable changes with minimal effort (including by other devs)
- likely not become a tangled mess after a few such rounds of changes

## Duh, I've been told this over and over again

Great, you will be well-prepared to handle many of the tasks of this class

## Actually, unlike that person, this is all new to me.  Why?

The majority of programming classes primarily focus on a few fundamental concepts:
- How to break a logical problem down into solvable parts
- Different data structure concepts and abstraction
- Common algorithms and code/data interactions

Missing from this list is explicitly teaching maintainability, though many software design patterns exist precisely to try and improve maintainability.  The topic is not ignored, just rarely explicit.  Most devs learn the nuance and practical aspects of maintainability by taking two steps, almost always after they have finished schooling and are on the job:
1. They are asked to make changes to an existing code base...and find it klunky, non-intuitive, and mildly frustrating
2. They author a sufficiently large program and have to later make changes to it...and find it klunky, non-intuitive, and mildly frustrating

It is difficult to arrange for these steps in a class without the entire semester being about that specific codebase or problem

## Why is Maintainability important?

1. Almost all coders spend much more time modify or extending existing code rather than writing new and separate code
2. Because of this repeated cycle of changes, complexities have a multiplicative effect but we mere mortals remain stuck with the same brains.

## Why is Maintainability difficult?

There are many reasons, but here are few big ones:

* All programs contain assumptions - it is unavoidable, deciding and using those assumptions is what programming is.  This is not a problem until changes violate those assumptions.  Changes are new complexity, but changes that violate assumptions often involve adding a larger complexity to add this in.  See example below.
* Good design is partially about minimizing and isolating assumptions so that the increase in complexity is limited.  However, even with great design and discipline, complexity will still rise and threaten the limitations of our mind to understand the entire system.  We battle complexity with abstraction, but abstraction itself is still a new level of complexity.  
* Code is for programmers, not computers.  Code is an expression of instructions to take under different conditions, but the computer does not read and run that code directly.  Code is communication, for whomever is looking at the code.  And like all forms of communication, we humans have different views, approaches, and understanding.  Consider translating a book into a different language...every translator comes to a slightly different conclusion as to the proper translation.  Communication is something we do, but not perfectly, and this applies to code.
* Even if we have a codebase that avoids all of the above problems, everything around it changes.  This industry is still very young.  Both incremental and dramatic changes happen on a short time scale.  

### Example of how Maintainability collapses

Imagine that you are asked to write a program to maintain the inventory of books at a library.  Books (tracked by ISBN) can be on loan or not, and if on loan there's a due date and who has it.  Your create code that works well and follows best practices.

Over time, changes come in, each one coming in only after you've fulfilled the last request.
- Books were tracked by ISBN, but that caused problems when they had multiple copies of a book, so now they need to track each book distinctly in addition to the ISBN.  The assumption that a book was identified by ISBN is false, and some places that reference ISBN need to change while others still use ISBN.  The assumption that getting a book record by ISBN would only find 1 book max is now false. 
- Books in stock might be in long term storage, returned but not yet re-shelved, or on-the-shelf.  The boolean assumption that a book is either 'in' or 'on loan' is no longer a boolean. 
- Books NOT in stock might be on loan to another library, merely requested, or bought but not yet received.  These each can have different dates associated with them. The assumption that there was a single date that would reliably be there if the book was on loan has been broken.  The assumption 
- At some point they used the list of users with books checked out to generate mail, but they don't want to send such mail to other libraries now that we can loan to them, so the assumption that the "who has it" field was a library patron is broken.
- Then they decide that if a book is overdue long enough, they'll order a replacement, but still keep the original record until the replacement arrives, so now one book entry needs to be able to reference another (and behave appropriately if/when the record referenced no longer exists). 
- They want to track non-book items they loan out, such as movies and records.  The assumption that a record was a book and every record had an ISBN is now false.  These other items shouldn't be made visible to other libraries, but the books still should.
- The library wants to find out how long it has been since each item was checked out and automatically inform the librarian if an item has gone too long.  The assumption that a user would initiate every transaction (check out, return, order, etc) is now false.  The system has to check on books that are not being checked out, and do so daily automatically.
- They want to loan out ebooks, which auto-expire and do not need to be returned, though they can be returned early.  The digital books cannot be stamped with the unique identifier labels used on physical items, but they need an id for the system while checked out, but also need to be considered a single item when it comes to managing the ordering costs.  _Many_ assumptions are broken here, such as the idea that each item is always a single thing as well as the assumption that the return process was reading the unique id off the physical item and updating that record.

Good practices will help manage some of those changes with minimal impact, but I have trouble believing that any programmer would end this list with a program that follows the original model. 

Now imagine that someone else did the original program and half of the list above when you are brought in to complete the current requested change.  How difficult will it be for you to understand the model of the current state compared to the original? 

## Why is Maintainability a major focus of this class?

Basically all code is changed and maintained, but if the software industry is young, the web is much younger.  The goals change often.  
> Make it look like this Photoshop picture.  Make it use all this data.  This is expensive for our servers, move most of the calculations to their browser.  Man, that picture is dated use this page layout that is completely different.  Mobile browsers lack the bandwidth and CPU for what we've done, we need to pull processing back to us.  And that picture looks terrible on a phone screen, make it responsive.  Now make it run in the cloud so we can scale.  Now make it work when we're offline as a PWA. 
This means every maintainability problem we have is made worse: We have a higher rate of changes, and we're expected to implement those changes more quickly because web norms change faster than pure system norms.    

