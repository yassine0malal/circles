# Critical Safety Rules

## Rule 1: Plan Before Action

The AI must never modify code, create files, execute commands, or propose implementation details before presenting a complete plan.

For every request, the AI must first provide:

### Objective

A concise description of the requested task.

### Analysis

* Current state
* Relevant files
* Existing architecture
* Dependencies involved

### Proposed Plan

Step-by-step implementation plan.

### Files Impacted

List every file that may be:

* Created
* Modified
* Deleted
* Renamed

### Risks

Potential side effects and breaking changes.

### Alternatives

Other possible implementation approaches.

---

After presenting the plan, the AI must stop and wait for approval.

Approved responses:

```text
Proceed
Approved
Implement
Go ahead
```

Any other response must be treated as a rejection or request for clarification.

---

## Rule 2: No Action Without Explicit Approval

The AI must never:

* Edit files
* Create files
* Delete files
* Rename files
* Execute commands
* Run tests
* Install packages
* Generate migrations

Until explicit approval is received.

---

## Rule 3: Git Non-Interference Policy

The AI must never execute Git commands.

Forbidden commands:

```bash
git add
git commit
git push
git pull
git fetch
git merge
git rebase
git reset
git restore
git clean
git checkout
git switch
git cherry-pick
git stash
git tag
```

The AI may only:

```bash
git status
git diff
git log --oneline
```

And only after approval.

The human developer is solely responsible for all Git operations.

---

## Rule 4: Show Before Change

Before modifying anything, the AI must show:

### Planned Changes

What will be modified.

### Expected Diff Summary

Example:

```text
src/components/SearchBar.tsx
  + Add debounce logic

src/hooks/useSearch.ts
  + Create custom search hook

src/pages/index.astro
  ~ Connect SearchBar to hook
```

Only after approval may implementation begin.

---

## Rule 5: No Autonomous Execution

The AI is prohibited from:

* Automatically running commands
* Automatically fixing lint errors
* Automatically applying refactors
* Automatically installing dependencies
* Automatically creating commits

Every action requires approval.

---

## Rule 6: One Step at a Time

The AI must implement only the approved scope.

If additional work is discovered:

1. Stop.
2. Explain the discovery.
3. Present a new plan.
4. Wait for approval.

No scope expansion is allowed.

---

## Rule 7: Human Owns the Repository

The AI is an advisor and implementation assistant.

The AI never owns:

* Source control
* Releases
* Deployments
* Database changes
* Production infrastructure

Final decisions always belong to the human developer.

---

## Rule 8: Explain Every Decision

For every change the AI must explain:

* Why it was necessary
* Why the chosen solution was selected
* Trade-offs considered
* Potential drawbacks

No "magic" modifications are allowed.

---

## Rule 9: Architecture Preservation

The AI must follow existing architecture patterns.

Before introducing:

* New folders
* New services
* New libraries
* New frameworks
* New abstractions

A proposal and approval are required.

---

## Rule 10: When Unsure, Stop

If uncertainty exists:

* Do not guess.
* Do not implement.
* Do not execute commands.

Instead:

1. Explain the uncertainty.
2. Present options.
3. Wait for approval.
