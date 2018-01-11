# Intial Setup for Sea-Info 6250: Web Dev Tools and Methods

I ask that you complete the steps in this document BEFORE the first class.  These steps can be completed now.

## A Warning about Limited Support

For all of the items listed here I will offer what support I can, but deciphering the needs of different operating systems and different software bugs is beyond the scope of this class and often not my skillset.  

## Accounts
### Github.com
You will need a (free of cost) account on github.com
* https://github.com/

I recommend NOT using uppercase letters in your username.  You can, but it can get confusing.  If you already have an account, you have probably already dealt with the confusions.

### Slack.com
You will need a (free of cost) account on slack.com to join in the discussion there.
* https://seainfo6250.slack.com/signup

I recommend the desktop client over the web-based one, but both work (as does the mobile client, but at some point you will need Slack on the same machine you are coding on).  Slack will be our primary communication method outside of class, just as it is with many programming shops.

## Required Software
### Git
You will need to install a git client (free of cost):
* https://git-scm.com/downloads

All instruction and examples will be given with the command-line client. 

Graphical clients are available.

### NodeJS and npm
You will need to install a recent version of NodeJs (which will also install npm) (free of cost)
* https://nodejs.org/

If you are familiar with and use `yarn`, that is fine, but all instruction and examples will be given with npm

- Do *NOT* install anything for node/npm with 'sudo' or as administrator unless you know how to clean up the permissions mess it creates.
- Do *NOT* install anything with a '-g' flag, such as ~~`npm install -g whatever`~~.  This installs a single specific version of 'whatever' to use anywhere.  That is often useful unless you're a developer on a project that uses 'whatever'.  
- If you are familiar with node, you are welcome to use a version manager like nvm, but don't use `npx` in the class so there is no confusion later.

### Chrome Web Browser
You will need to install and use the (free of cost) Chrome web browser if you do not already have it
* https://www.google.com/chrome/browser/desktop/index.html

Be sure to configure it as mentioned further down!

### Text Editor
You will need a text editor of your choice (note: A Text Editor is NOT a word processor).  Some popular (and free of cost) available ones include Atom, Brackets, or Notepad++ (windows), while some commercial ones that allow limited free demos include SublimeText and WebStorm.  Those users familiar with more old-school editors such as vim or emacs are welcome to use them.

### Terminal Program of your choice (optional)
To my knowledge all common systems come with a command-line terminal, however some of the OS-provided ones are sub-par.  If you wish to install and use programs like iTerm2 (Mac) or Powershell (Windows) or any of a bazillion options (Linux) you may do so.  (Many free of cost)

## Configuration

### PATH Environment Variable

You will need to configure the PATH environment variable for your system or user account to _include_ (don't replace what is there) `./node_modules/.bin/` as the *last* path in your PATH.  Windows users may have to use backslashes. Notice how multiple entries are separated (comma or semicolon) and follow that rule.

Make sure your configuration will survive closing the terminal or rebooting your machine.

### Chrome Dev Tools Console

You should make the configuration changes below.  The exact means to get to these options can differ slightly between OS and Chrome version
* View -> Developer -> Javascript Console
* Gear icon on upper right
* Check 'LogXMLHttpRequests'
* (optional) Check 'Show timestamps'
* Network subtab -> Check 'Disable Cache'
* Application subtab -> Service Workers in left menu -> Check 'Update on reload' and 'Bypass for network'
  * _Note_: This alters the behavior of web applications that run while offline.  If you actually use offline web apps, you should create a different profile (Main Menu -> People -> Add Person) so you can have this configuration for class work and your existing one for everything else.

## Making sure it all works

Do the following, which will let me (and you) know that everything is working.  If you run into a problem you can't solve, speak up on Slack.

1. Complete all the installation and config steps above
1. Fully reboot your system (This is a test - you shouldn't have to do this again for class)
1. Open Slack and say 'YOURNAME connected' in #introductions.  Clever students will say 'YOURNAME'.  Students that are more clever will know they could but choose to use their name.  :)
1. Run `git clone` on this repository: https://github.com/seainfo6250/setup-confirm.git and enter that directory
  * This is on the command line, not on the website.  Github will let you 'fork' the setup-confirm project, which is not what we want here.  It is not harmful, so if you accidentally fork it on github you can delete the fork or ignore it)
1. Run `git checkout -b setup-NEUID` where NEUID is your actual NEUID.
  * If this is making little sense to you, we'll cover it in class, just follow the steps here
1. Run `npm install`
  * You should see some text while it downloads a library or two
  * If you see permissions error (EACCES) you probably installed something as root/administrator, and now your normal user account can't override it. That's a bit messy to clean up, but it's doable.
  * Lots of ways of addressing this exist, with varying levels of success and computer security.  Speak up on Slack if this is an issue for you.
1. Run `node list.js`
  * You should see a list of names printed to the console
1. Run `npm test`
  * The messages should look happy, with 'ok' and not 'fail'
  * If it complains about not finding 'tape' and you did the `npm install` then your PATH environment variable is probably not set as you expected.
1. Edit the list of names in the list.js file to include your full name followed by YOUR email address in angle brackets:
  * Example: `Alex Student <a.student@example.com>`
  * Use whatever editor you intend to use to make sure there's no problem/confusion with it in this flow
  * Don't delete or modify any other names that may be present in the file
  * If you have a variation or different name you'd prefer, put that in double quotes in the middle of the name
  * Example: `Alex "Lex" Student <a.student@example.com>`
1. Run `node list.js` and `npm test` again now that you've saved your changes
  * You should see your name added to the list that outputs
  * Everything should run smoothly
1. Make sure someone else hasn't updated the remote file while you've been working: `git pull origin master`
  * If it complains about a 'merge conflict', should be able to re-edit the file and see where your change and a different change are both listed with some surrounding marker (e.g. <<<<).  
1. Add the file to the list of files to commit: `git add list.js`
1. Run `git status` and make sure nothing is listed as an 'Untracked file' and only `list.js` is listed to be added.  If 
1. Commit the file: `git commit -m "Added MYNAME"` (Example: `git commit -m"Added Lex"`
1. Send your changes to github: `git push origin setup-NEUID` (again, with your actual NEUID there)
1. Go to the github page from step 4 and create a Pull Request, with 'master' on the left dropdown and your setup-NEUID on the right dropdown.
1. If the changes look correct, Create the Pull Request.
  * If you edited and added `.gitignore`, that change should be listed as well as your name.
  * You do not need to add a message or @mention me on the PR.  

Then you're done! At some point I will look at the code and merge it into master.

## I'm a bit confused

We'll go into more depth in class, but not necessarily a lot of depth.  Here are some resources you can use to get started if you feel particularly lost.
* https://guides.github.com/activities/hello-world/ (fully web-based to focus on the concepts)
* https://www.youtube.com/githubguides

You don't need to be strong with git/github at this point, so long as you are able to navigate the steps above.

And you can certainly ask on Slack - odds are if you're having an issue so is someone else.
