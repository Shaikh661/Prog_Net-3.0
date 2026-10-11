# Git Cheat Sheet — Beginner to Confident

A practical reference for the Git commands you'll use most often.

## 1. Understand the Git Workflow

Git has four main places to understand:

```text
Your working files
      |
      | git add
      v
Staging area
      |
      | git commit
      v
Local repository
      |
      | git push
      v
GitHub / remote repository
```

- **Working files:** The files you're editing.
- **Staging area:** Changes you've selected for the next commit.
- **Local repository:** Your saved commits on your computer.
- **Remote repository:** The version hosted on GitHub or another Git server.

`git pull` downloads remote changes and integrates them into your current branch.

## 2. Start a Repository

Create a Git repository in the current directory:

```bash
git init
```

Check the current state of the repository:

```bash
git status
```

**Tip:** When you're unsure what Git is doing, start with `git status`.

## 3. Stage Files

Stage all changes in the current directory:

```bash
git add .
```

Stage one file:

```bash
git add filename.html
```

Stage multiple files:

```bash
git add file1.html file2.css script.js
```

Check what is staged:

```bash
git status
```

`git add` selects changes for the next commit; it does not upload them to GitHub.

## 4. Commit Changes

A commit is a saved checkpoint in your project's history:

```bash
git commit -m "Add homepage"
```

Examples of useful commit messages:

```bash
git commit -m "Add login page"
git commit -m "Fix navbar bug"
git commit -m "Update project documentation"
git commit -m "Add image assets"
```

Prefer clear messages that explain what changed. Avoid vague messages such as `stuff`, `changes`, or `asdf`.

## 5. Push Changes to GitHub

If your branch already has an upstream configured:

```bash
git push
```

The first time you push a branch, you may need:

```bash
git push -u origin main
```

If your branch is named `master`, use `master` instead of `main`:

```bash
git push -u origin master
```

After setting the upstream, `git push` is usually enough.

## 6. Pull Changes from GitHub

Download and integrate changes from the remote branch:

```bash
git pull
```

If you're collaborating with others, pull the latest changes before starting work when appropriate. If you have local uncommitted changes, check `git status` first; commit or safely stash your work if needed.

## 7. The Daily Workflow

For a straightforward solo workflow:

```bash
# Check what's changed
git status

# Stage your changes
git add .

# Save a commit
git commit -m "Describe what changed"

# Upload commits to GitHub
git push
```

When working on a shared branch, first coordinate with your team and get the latest changes before editing:

```bash
git status
git pull
# Edit your code...
git status
git add .
git commit -m "Describe what changed"
git push
```

## 8. Inspect Changes and History

See unstaged changes:

```bash
git diff
```

See staged changes:

```bash
git diff --staged
```

View commit history:

```bash
git log
```

View compact commit history:

```bash
git log --oneline
```

## 9. Work with Branches

Branches let you develop a feature separately from another branch.

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

Create and switch to a new branch in one command:

```bash
git switch -c feature-login
```

Use descriptive names such as `feature-login`, `fix-navbar`, or `docs-update`.

## 10. Merge a Branch

When a feature branch is ready to merge into `main`:

```bash
git switch main
git merge feature-login
```

If your default branch is named `master`, switch to `master` instead.

After a successful merge, push the updated branch if needed:

```bash
git push
```

If Git reports a merge conflict, open the affected files, resolve the conflict markers, test the result, then stage and commit the resolution. Don't delete conflict markers without checking which code should remain.

## 11. Connect to a Remote Repository

List configured remotes:

```bash
git remote -v
```

Add a remote:

```bash
git remote add origin https://github.com/username/project.git
```

Change the URL for an existing remote:

```bash
git remote set-url origin https://github.com/username/project.git
```

Replace the example URL with your actual repository URL.

## 12. Use `.gitignore`

A `.gitignore` file tells Git which **untracked** files and directories to ignore.

Example:

```gitignore
node_modules/
.env
faltu_pics/
Pics_by_*/
```

This ignores the `node_modules` and `faltu_pics` directories, `.env` files at the repository root, and directories whose names start with `Pics_by_`.

### Important: already-tracked files

`.gitignore` does not stop tracking files already committed or added to Git's index.

To stop tracking a directory while keeping the local files:

```bash
git rm -r --cached folder-name
```

Then commit and push the change:

```bash
git add .gitignore
git commit -m "Stop tracking ignored files"
git push
```

**Warning:** Avoid `git rm -r folder-name` without `--cached` if you want to keep the local files; without `--cached`, Git removes them from your working tree too.

## 13. Undo Carefully

### Unstage a file but keep its changes

```bash
git restore --staged filename.html
```

### Discard unstaged changes to a file

```bash
git restore filename.html
```

**Warning:** This discards uncommitted changes to that file. Make sure you don't need them first.

### Undo the latest commit but keep the changes staged

```bash
git reset --soft HEAD~1
```

Use reset carefully, especially on shared branches or after pushing. If you're unsure, inspect `git status` and `git log --oneline` before changing history.

## 14. Clone a Repository

Download a repository:

```bash
git clone https://github.com/username/project.git
```

Enter the new project directory:

```bash
cd project
```

Replace the example URL and directory name with your own.

## 15. Useful Information Commands

Show the installed Git version:

```bash
git --version
```

List local branches:

```bash
git branch
```

List local and remote branches:

```bash
git branch -a
```

Show configured remotes:

```bash
git remote -v
```

Show recent commits:

```bash
git log --oneline
```

## 16. Ten Commands to Memorize

| Command | Purpose |
|---|---|
| `git status` | Check repository state |
| `git add .` | Stage all changes under the current directory |
| `git add filename` | Stage one file |
| `git commit -m "message"` | Create a commit |
| `git push` | Upload commits |
| `git pull` | Fetch and integrate remote changes |
| `git log --oneline` | View compact commit history |
| `git branch` | List local branches |
| `git switch branch-name` | Switch branches |
| `git clone URL` | Download a repository |

## 17. Quick Copy-Paste Reference

```bash
# Check status
git status

# Stage all changes
git add .

# Commit
git commit -m "Describe changes"

# Push to GitHub
git push

# Pull latest changes
git pull

# View history
git log --oneline

# Create and switch to a branch
git switch -c feature-name

# Unstage a file
git restore --staged filename

# Stop tracking a directory but keep local files
git rm -r --cached folder-name
```

## 18. Five Rules That Save You Trouble

1. **When confused, run `git status`.**
2. **Review changes before committing:** use `git diff` and `git diff --staged`.
3. **Write meaningful commit messages.**
4. **Avoid `git push --force` unless you understand the impact.** It can overwrite remote history and disrupt collaborators.
5. **Avoid `git reset --hard` unless you're certain.** It can discard local changes permanently.

## Remember the core sequence

```text
EDIT → git status → git add . → git commit -m "message" → git push
```

For team projects, learn branches, pulling, merging, and resolving merge conflicts next.
