# Your Personal Class Repository

## What is this?

This repo will be the primary way you get material from me and also the primary way you will turn in personal assignments and exams.

Note: There are multiple organizational methods for using git.  We are using the one most often used and most often recommended.

## How do I use it?

Note: You should have installed `git` and followed the link I provided to generate this repository in your github account per the class setup instructions.  You should also check out the specific document on git in _reading/_.

- Clone this repository to your local system (`git clone`)
  - SUGGEST: You are going to spend some time on the command line, so I suggest having a place on your system with a short and helpful path to hold multiple repositories.  Personally I avoid any `~/My Documents/` or such places that are often defaulted to, because in certain circumstances uppercase, special characters, and/or spaces cause complications.  I find something like `~/repos/` is much shorter to type and without unexpected complications.
- When a new assignment comes in, pull from master (`git pull origin master`)
- Create a feature branch to do your work in.  Usually the assignment will specify a branch name, if it does, you **must** use that one or your assignment may not get counted correctly.  See **Working in a Feature Branch** below.
- When you are satisfied with the code, make sure it is all committed to your feature branch (and undesired files are NOT in the commit)
- Create the PR (see **Creating a Pull Request** below)

### Working in a Feature Branch

- To create a branch and immediately switch to it: `git checkout -b BRANCHNAME`
- Do your work, using `git add FILENAMES` on new and modified files so that git will include those files in the commit
  - Use `git status` to make sure you have all the files you need and that you DON'T have files you don't need/want going to the repo
- Whenever you get one part of your code running, commit it.  **Use helpful commit messages**.  (`git commit -m "MESSAGE"`)  https://xkcd.com/1296/
  - "Helpful commit messages" means that looking at a list of your commit messages gives a good idea of which commit to look at for when a particular feature was added.  
  - "Added login" or "Fixed error handling on save" are examples of decent commit messages.  
  - "assignment 1" or "Updated" or "Fixed bug" are NOT helpful  
  - Helpful messages are NOT long - 2 to 6 words usually 
- At any point you can do `git push origin BRANCHNAME` to save your work in progress to github - this does not submit your assignment, just saves that branch to github.  You can do this repeatedly as desired.  
- Now that you have created the branch, changing between it and the master (or any other) branch is just a matter of `git checkout BRANCHNAME` (Note: no `-b` in this one)
  - Many editors offer integration with local git repositories.  Feel free to use them, but I'm of no help in debugging and all examples and instruction will focus on the command line.
  - There are multiple options out there to do such things as show the current branchname and/or if there are uncommited changes in the command prompt.  While I encourage the use of these, I remain unlikely to be of much help with specific problems, particularly on Windows.

### Creating a Pull Request
- Make sure your branch and content fulfill the requirements (see conventions.md)
- Push the branch to your repository on github (`git push origin BRANCHNAME`)
- On the github main page for your repository, click `New pull request` and select your feature branch on the _rightmost_ dropdown ("compare").  Leave the "base" branch as `master`
- SUGGEST: Look over the changes shown before progressing.  I've found that 1-2 minutes at this step can save time overall and ensures that you don't waste time waiting for code to be committed only to eventually find out that a small oversight requires more attention.  It also ensures whoever is doing your review doesn't think you're willing to toss them anything and expecting them to do all the work of finding such matters.  I'd estimate about 1/3 of my PRs (Pull Request) have me seeing a small mistake and making changes before actually creating the request.  
- Click `Create Pull Request`.  You should get some messages about approval in a review being required.  At this point nothing has actually changed - your feature branch has your latest commits and the master branch is unaltered.  
- If you find a mistake afterward or are requested to make changes, you can simply commit the change to your feature branch and push that branch to github.  The Pull Request will reflect that change, as the Pull Request was to merge the branches, not to merge a specific set of changes.  Except for requested changes, this should be fairly rare because the PR shouldn't be created until the code is ready.

## General Git Tips
- I've never heard anyone say "I used `git status` too often".  The status is a great way to make sure reality matches what you think is happening.  Common mistakes it helps catch include accidentally committing `node_modules/`, accidentally committing IDE config files or backup files, accidentally committing to the wrong branch, and failing to `git add` files before committing.  I try to always use it before a commit at a minimum.
- Git documentation is very dense and confusing, and searching for answers online often gives you a set of obscure commands to run.  Generally you should only need a handful of commands, but if you find yourself needing deeper advice, know that most of us struggle to find the one answer we want.  That said, the answer usually ends up being far more simple than finding the answer is, and once you understand a few key concepts the git documentation is easier (but not easy) to use as a reference.  https://xkcd.com/1597/  (not my actual advice)
