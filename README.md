# PowBot Docs

> *Everything about PowBot is held here.*

Site deployed [here][https://docs.powbot.org/]

Reference sites:
- [Material For MkDocs][https://squidfunk.github.io/mkdocs-material/reference/]

## Quick start guide

### Requirements
- Python 3.3 or above installed
- pip

### Project setup
1. Create a fork of this repository and clone it.
2. cd into the cloned repo, and run `virtualenv .`
3.   
   1. Windows:
      1. Run powershell as admin and run this command `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted -Force;`
         2. Back in the repo directory, you want to run `./.venv/bin/activate.ps1`
   2. MacOS/Linux:
      1. Open a terminal window, cd into the repo directory and run:
         1. `chmod +x ./.venv/bin/activate`
         2. `./.venv/bin/activate`
4. Run `pip3 install mkdocs-material` to install the mkdocs=material library.

### Running locally
Run this command from the project dir: `mkdocs serve`


## Notes
- You don't need to run this project to be able to add to or modify existing markdown files.