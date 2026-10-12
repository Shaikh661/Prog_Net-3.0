# Git & GitHub — Detailed Beginner Notes

**Reference video:** [Git and Github Tutorial For Beginners (Full Course)](https://www.youtube.com/watch?v=AB3J8ufDYHQ)  
**Purpose:** Beginner-friendly study notes and command reference.

> **Source note:** I could identify the linked video, but I could not retrieve its complete captions/transcript in this session. These are comprehensive notes on the Git and GitHub topics associated with a full beginner course, not a verified, timestamp-by-timestamp transcript of the video. If you share the transcript or captions, these can be revised to match the instructor's exact order and examples.

---

## 1. What Is Version Control?

Version control is a way to record changes to files over time. It lets you inspect previous versions, compare changes, collaborate with other developers, and recover from mistakes.

Imagine you're building a website:

- Version 1: homepage created.
- Version 2: navigation added.
- Version 3: login form added.
- Version 4: a bug appears.

Without version control, you might have to keep manual copies such as `website-final`, `website-final-2`, and `website-final-really-final`. Git gives you a structured history instead.

### Important terms

| Term | Meaning |
|---|---|
| Version control | A system for tracking file changes |
| Repository (repo) | A project and its Git history |
| Commit | A recorded snapshot of selected changes |
| Branch | A separate line of development |
| Remote | Another copy of a repository, often hosted online |
| Merge | Combining changes from different lines of development |
| Working tree | The files and folders you're currently editing |
| Staging area / index | The changes selected for the next commit |
| `HEAD` | A reference to the commit or branch currently checked out |

## 2. Git vs GitHub

**Git** is the version-control program that runs on your computer.  
**GitHub** is a hosting and collaboration service for Git repositories.

Git can work without GitHub. GitHub makes it easier to share repositories, review code, manage issues, and collaborate using pull requests.

Other Git hosting services include GitLab and Bitbucket.

## 3. How Git Stores Your Work

The everyday workflow has three local stages:

```text
Working tree  --git add-->  Staging area  --git commit-->  Local repository
                                                               |
                                                            git push
                                                               |
                                                               v
                                                        Remote repository
```

- **Working tree:** You create and edit files here.
- **Staging area:** You choose the changes that belong in the next commit.
- **Local repository:** Commits are saved in your local Git history.
- **Remote repository:** A hosted or shared repository, such as GitHub.

`git add` does not upload files. `git commit` does not upload files. `git push` sends local commits to a remote repository.

## 4. Install and Configure Git

Check whether Git is installed:

```bash
git --version
```

Set the name recorded on your commits:

```bash
git config --global user.name "Your Name"
```

Set the email recorded on your commits:

```bash
git config --global user.email "you@example.com"
```

View configuration:

```bash
git config --list
```

Open the global configuration file:

```bash
git config --global --edit
```

`--global` applies to your user account on that computer. A repository-specific setting can be configured from inside a repository by omitting `--global`.

The name and email identify the author information in commit metadata. They are not, by themselves, GitHub login credentials.

## 5. Create a Local Repository with `git init`

Move into your project folder:

```bash
cd path/to/your-project
```

Initialize Git:

```bash
git init
```

Git creates a hidden `.git` directory that stores repository data and history. Do not manually edit or delete that directory.

Check the repository:

```bash
git status
```

Typical use: you already have a project folder and want Git to start tracking its history.

## 6. Create a Repository on GitHub

On GitHub:

1. Sign in.
2. Choose **New repository**.
3. Enter a repository name.
4. Choose public or private visibility.
5. Decide whether to initialize it with a README, `.gitignore`, or license.
6. Create the repository.

If you already have local files, avoid creating conflicting initial files on both sides unless you know how to combine the histories. For a beginner, the easiest approaches are often:
- create an empty GitHub repository and push your existing local repository, or
- clone a repository created on GitHub and work inside that clone.

## 7. Clone an Existing Repository

`git clone` downloads a repository and its history and sets up a remote named `origin`.

```bash
git clone https://github.com/OWNER/REPOSITORY.git
cd REPOSITORY
```

Clone a repository into a custom directory name:

```bash
git clone https://github.com/OWNER/REPOSITORY.git my-folder
```

Use `clone` when a repository already exists and you want a local copy.

## 8. Check the State with `git status`

```bash
git status
```

This is one of the most useful Git commands. It tells you:
- which branch you're on;
- whether your working tree has changes;
- which changes are staged;
- which changes are not staged;
- whether files are untracked;
- whether your branch is ahead of or behind its upstream branch.

**Beginner rule:** When unsure what Git is doing, run `git status` before running another command.

## 9. Stage Changes with `git add`

Stage one file:

```bash
git add index.html
```

Stage multiple named files:

```bash
git add index.html style.css
```

Stage changes under the current directory:

```bash
git add .
```

Stage all changes (including removals) throughout the working tree:

```bash
git add -A
```

The exact scope of `git add .` depends on where you run it. `git add -A` is commonly used when you intentionally want all tracked and untracked changes staged.

Review what will be committed:

```bash
git diff --staged
```

Staging is useful because you can choose which changes go into a commit. You do not have to commit every modified file together.

## 10. Commit Changes

A commit records the staged changes in the local repository:

```bash
git commit -m "Add homepage layout"
```

Good messages describe the change:

```bash
git commit -m "Fix navbar alignment"
git commit -m "Add ticket priority filter"
git commit -m "Update project documentation"
```

Avoid vague messages such as `stuff`, `updates`, or `final`.

### Skip staging for already-tracked files

You may sometimes use:

```bash
git commit -am "Fix button spacing"
```

This stages and commits modifications and deletions of files Git already tracks. It **does not include new untracked files**. Beginners should generally use the explicit `git add` step so they can review what is being committed.

## 11. Inspect Changes with `git diff`

Show unstaged changes:

```bash
git diff
```

Show staged changes:

```bash
git diff --staged
```

Compare two commits:

```bash
git diff COMMIT_A COMMIT_B
```

Compare a branch against another branch:

```bash
git diff main..feature-login
```

A diff shows line-by-line changes. Lines beginning with `-` are removed from the compared version; lines beginning with `+` are added.

## 12. View Commit History

Fuller history:

```bash
git log
```

Compact history:

```bash
git log --oneline
```

Show branches and merge structure:

```bash
git log --oneline --graph --decorate --all
```

Show a particular commit:

```bash
git show COMMIT_ID
```

A commit ID (often displayed as a short hash) identifies a commit. `HEAD` refers to the current checked-out commit or branch position.

## 13. Connect a Local Repository to GitHub

See configured remote repositories:

```bash
git remote -v
```

Add a remote called `origin`:

```bash
git remote add origin https://github.com/OWNER/REPOSITORY.git
```

Change the URL of an existing remote:

```bash
git remote set-url origin https://github.com/OWNER/REPOSITORY.git
```

`origin` is only a conventional name for a remote; it is not a special reserved word.

Check remote branches:

```bash
git branch -r
```

## 14. Push, Fetch, and Pull

### Push

Upload local commits to a remote:

```bash
git push
```

For the first push of a new branch, set its upstream:

```bash
git push -u origin main
```

Use your actual branch name if it is not `main`.

### Fetch

Download information and commits from the remote without automatically integrating them into your current branch:

```bash
git fetch
```

You can inspect the fetched changes before deciding how to integrate them.

### Pull

Fetch remote changes and integrate them into the current branch, usually by merge or according to your configured pull strategy:

```bash
git pull
```

Quick memory aid:

- **push:** local commits → remote
- **fetch:** update your knowledge of the remote
- **pull:** fetch + integrate remote changes

Before pulling, check for uncommitted work:

```bash
git status
```

If you have local changes, commit or safely stash them before pulling if they could conflict with incoming changes.

## 15. Branches: Work Without Disturbing the Main Line

A branch is a movable reference to a line of commits. Branches let you develop features or fixes separately.

List local branches:

```bash
git branch
```

Create a branch:

```bash
git branch feature-login
```

Switch branches:

```bash
git switch feature-login
```

Create and switch in one command:

```bash
git switch -c feature-login
```

Return to the main branch:

```bash
git switch main
```

Delete a merged local branch:

```bash
git branch -d feature-login
```

Force-delete a branch (can discard unmerged work; use carefully):

```bash
git branch -D feature-login
```

### A simple branch workflow

```bash
git switch main
git pull
git switch -c feature-ticket-filter

# Make and test your changes
git status
git add .
git commit -m "Add ticket filter"

git push -u origin feature-ticket-filter
```

Then open a pull request on GitHub if your team uses pull requests.

## 16. Merge Branches

Merging combines changes from one branch into the branch you currently have checked out.

Example: merge `feature-login` into `main`.

```bash
git switch main
git merge feature-login
```

Always check which branch you're on before merging:

```bash
git branch
```

If Git can combine the changes automatically, it completes the merge. Sometimes Git needs your help resolving conflicts.

## 17. Resolve Merge Conflicts

A conflict occurs when Git cannot automatically decide how to combine changes—for example, when two branches edit the same lines.

Git may mark a file like this:

```text
<<<<<<< HEAD
Your current branch's version
=======
Incoming branch's version
>>>>>>> feature-login
```

How to resolve it:

1. Open every conflicted file.
2. Decide which content should remain. You may keep either version or combine them.
3. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Save the file.
5. Test the code.
6. Stage the resolved file.
7. Complete the merge commit if Git has not already done so.

```bash
git status
git add path/to/conflicted-file
git commit
```

If Git opened an editor for the merge commit message, save and close it to complete the commit.

If you need to abandon a merge in progress, use this only when appropriate:

```bash
git merge --abort
```

It attempts to return to the pre-merge state. Check `git status` first and protect any important uncommitted work.

## 18. Remove and Rename Files

Remove a tracked file from the working tree and stage the removal:

```bash
git rm filename.txt
```

Move or rename a tracked file through Git:

```bash
git mv old-name.txt new-name.txt
```

Git can also detect renames when comparing snapshots, so `git mv` is a convenient way to stage a rename.

## 19. Stop Tracking Files with `git rm --cached`

This is especially important when using `.gitignore`.

```bash
git rm --cached filename.txt
```

Stop tracking a directory but keep its local contents:

```bash
git rm -r --cached folder-name
```

Then commit the change:

```bash
git add .gitignore
git commit -m "Stop tracking generated files"
git push
```

Without `--cached`, `git rm` also removes the files from your working tree. Be careful.

## 20. Ignore Files with `.gitignore`

A `.gitignore` file lists patterns for files Git should ignore when they are untracked.

Example:

```gitignore
# Dependencies
node_modules/

# Secrets
.env

# Generated images
faltu_pics/
Pics_by_*/

# Compiled output
build/
dist/

# Operating-system files
.DS_Store
Thumbs.db
```

Common pattern meanings:

- `*.log` — files ending in `.log`.
- `folder/` — a directory named `folder`.
- `Pics_by_*/` — directories whose names start with `Pics_by_`.
- `# comment` — a comment line.

**Important:** `.gitignore` does not automatically untrack files that were already committed or staged. Use `git rm --cached` for files that are already tracked.

Never commit passwords, API keys, private tokens, or real secret values. If a secret was committed, deleting it in a later commit does not erase it from earlier history; revoke or rotate the secret.

## 21. Undo: Unstage, Restore, Reset, and Revert

These commands do different things. Check `git status` first.

### Unstage a file

Keep the file changes but remove them from the staging area:

```bash
git restore --staged filename.txt
```

### Discard unstaged edits to a file

```bash
git restore filename.txt
```

**Warning:** This discards uncommitted edits in the working tree for that file.

### Reset a commit while keeping changes staged

```bash
git reset --soft HEAD~1
```

This moves the current branch back one commit but keeps the changes staged.

### Reset a commit while keeping changes unstaged

```bash
git reset --mixed HEAD~1
```

`--mixed` is the default reset mode. The changes remain in your working tree but are unstaged.

### Hard reset

```bash
git reset --hard HEAD~1
```

**Danger:** This resets the branch and working tree and can permanently discard uncommitted work. Avoid it unless you fully understand the consequences and have backed up anything important.

### Revert a commit

```bash
git revert COMMIT_ID
```

`git revert` creates a new commit that reverses the changes introduced by an earlier commit. It is generally safer for commits that have already been shared with others because it does not rewrite existing shared history.

**Memory aid:**
- `restore` — restore file content or unstage a file.
- `reset` — move a branch reference; effects depend on the mode.
- `revert` — make a new commit that reverses an earlier commit.

## 22. Stash Unfinished Work

A stash temporarily saves local modifications so you can switch tasks without making a normal commit.

Save tracked and untracked changes:

```bash
git stash push -u -m "Work in progress"
```

List stashes:

```bash
git stash list
```

Reapply the latest stash and keep it in the stash list:

```bash
git stash apply
```

Apply the latest stash and remove it from the stash list if successful:

```bash
git stash pop
```

Delete a stash after confirming you no longer need it:

```bash
git stash drop
```

Stash is useful for short interruptions, but it is not a substitute for regular commits or backups.

## 23. Rebase (Intermediate)

Rebase moves or replays commits onto a new base commit. It can create a more linear history, but it changes commit IDs.

Example: update your feature branch on top of the latest `main`:

```bash
git switch feature-login
git fetch origin
git rebase origin/main
```

If a conflict occurs:
1. Resolve the conflicted files.
2. Stage the resolutions.
3. Continue:

```bash
git add path/to/resolved-file
git rebase --continue
```

To stop and return to the pre-rebase state:

```bash
git rebase --abort
```

**Important:** Avoid rebasing commits that other people already depend on unless your team has agreed on how to handle the rewritten history. For beginners, learn merge first.

## 24. Pull Requests and Collaboration on GitHub

A **pull request (PR)** is a GitHub collaboration feature used to propose changes from one branch into another. It is not the same command as `git pull`.

Typical team workflow:

1. Clone the repository.
2. Create a feature branch.
3. Make changes and commit them.
4. Push the feature branch.
5. Open a pull request on GitHub.
6. Teammates review the code and suggest changes.
7. Address feedback and push additional commits.
8. Merge the pull request after approval.

Example commands:

```bash
git switch main
git pull
git switch -c feature-search

# Edit, test, and commit
git add .
git commit -m "Add search feature"
git push -u origin feature-search
```

Then create the pull request through the GitHub website.

## 25. Forks and Clones

- **Clone:** Creates a local copy of a repository on your computer.
- **Fork:** Creates a separate copy of a repository under your GitHub account.
- **Branch:** Creates a separate line of development within a repository.

Forks are common when you want to contribute to a repository you do not have permission to push to directly. A clone is the normal way to get a repository onto your computer.

## 26. Time Travel: Inspect Earlier Commits

Inspect a commit:

```bash
git show COMMIT_ID
```

Compare the current state with a previous commit:

```bash
git diff COMMIT_ID
```

Temporarily inspect an old commit:

```bash
git switch --detach COMMIT_ID
```

This puts you in a detached `HEAD` state. You can inspect or test the old version, but if you want to build new work from there, create a branch:

```bash
git switch -c experiment-from-old-commit
```

Return to a branch:

```bash
git switch main
```

Do not confuse inspecting an old commit with safely undoing a commit. Use `git revert` when you need to undo a shared change in a new commit.

## 27. Common Errors and What to Check

### “Nothing to commit”

Check:

```bash
git status
```

Possible causes: there are no changes, changes are already committed, or files are ignored.

### “Please tell me who you are”

Configure your Git author name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Push rejected / non-fast-forward

The remote has commits your local branch does not have. Inspect status, then fetch and integrate the remote changes before pushing:

```bash
git status
git fetch
git log --oneline --graph --decorate --all
```

The correct next step may be `git pull --rebase` or `git pull`, depending on your team's workflow. Don't force-push just to make the error disappear.

### “Remote origin already exists”

Check the remote:

```bash
git remote -v
```

If the URL is wrong, update it:

```bash
git remote set-url origin https://github.com/OWNER/REPOSITORY.git
```

### A file is still appearing despite `.gitignore`

Check whether it is already tracked:

```bash
git ls-files path/to/file
```

If it is tracked, remove it from the index while keeping the local copy:

```bash
git rm --cached path/to/file
```

### Authentication errors

Use the sign-in or credential flow supported by your Git installation and hosting provider. Do not paste passwords or personal access tokens into public chats or commit them to a repository.

## 28. Essential Commands at a Glance

| Command | Purpose |
|---|---|
| `git init` | Start a repository in the current folder |
| `git clone URL` | Download a repository |
| `git status` | Inspect current state |
| `git add FILE` | Stage a file |
| `git add .` | Stage changes under the current directory |
| `git diff` | Show unstaged differences |
| `git diff --staged` | Show staged differences |
| `git commit -m "message"` | Record staged changes |
| `git log --oneline` | View compact history |
| `git show COMMIT` | Inspect a commit |
| `git branch` | List local branches |
| `git switch -c NAME` | Create and switch to a branch |
| `git merge NAME` | Merge a branch into the current branch |
| `git fetch` | Download remote updates without integrating them |
| `git pull` | Fetch and integrate remote changes |
| `git push` | Upload commits |
| `git stash push -u` | Stash changes, including untracked files |
| `git restore --staged FILE` | Unstage a file |
| `git restore FILE` | Discard unstaged changes to a file |
| `git revert COMMIT` | Reverse a commit with a new commit |
| `git reset --soft HEAD~1` | Undo latest commit but keep changes staged |
| `git rm -r --cached DIR` | Stop tracking a directory but keep local files |
| `git remote -v` | Show remote URLs |
| `git config --list` | Show Git configuration |

## 29. A Safe Daily Workflow for a Team Project

For a shared project, agree with your team on branch naming, pull/merge strategy, and review requirements.

```bash
# 1. Check your current state
git status

# 2. Update your main branch
git switch main
git pull

# 3. Create a separate branch for your task
git switch -c feature-short-description

# 4. Edit and test your code

# 5. Review changes
git status
git diff
git diff --staged

# 6. Stage and commit
git add .
git commit -m "Describe the change"

# 7. Push the branch
git push -u origin feature-short-description

# 8. Open a pull request on GitHub
```

If your team works directly on a shared branch, follow its agreed workflow instead of creating branches independently.

## 30. Practice Exercises

Use a disposable practice repository so mistakes won't affect an important project.

### Exercise A — First commit
1. Create a folder and run `git init`.
2. Create `README.md`.
3. Run `git status`.
4. Stage it with `git add README.md`.
5. Inspect with `git diff --staged`.
6. Commit with a clear message.

### Exercise B — Modify and compare
1. Change the README.
2. Run `git diff`.
3. Stage it.
4. Run `git diff --staged`.
5. Commit the change.
6. View the history using `git log --oneline`.

### Exercise C — Branches
1. Create a branch using `git switch -c feature-example`.
2. Change a file and commit.
3. Switch back to `main`.
4. Merge the feature branch.
5. Review the result in `git log --oneline --graph`.

### Exercise D — Ignore generated files
1. Create a `.gitignore`.
2. Add a pattern such as `generated/`.
3. Create files in `generated/`.
4. Confirm they are ignored.
5. If the files were already tracked, remove them from the index using `git rm -r --cached generated/`, then commit.

### Exercise E — Safe undo
1. Make a small change without committing.
2. Inspect it with `git diff`.
3. Stage it, then unstage it with `git restore --staged FILE`.
4. Practice only in a disposable repository before trying destructive commands.

---

## Final Mental Model

- **Edit** files in your working tree.
- **Stage** the changes you want to include.
- **Commit** those changes to local history.
- **Push** commits to a remote.
- **Fetch** remote updates.
- **Pull** fetches and integrates remote changes.
- **Branch** to isolate a task.
- **Merge** to combine lines of development.
- **Revert** to undo a shared commit safely.
- **Check `git status`** whenever you're unsure.
