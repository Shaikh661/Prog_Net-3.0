# Prog-Net 3.0 — Modern Ticketing System
## Technology Learning Roadmap

This roadmap is tailored to the Modern Ticketing System project and a college environment where JSP is being taught. Learn each technology to the level needed to build, understand, test, and maintain the application. You do not need to master everything before starting the project.

## Revised Technology Roadmap

| Technology | Priority | What to learn |
|---|---|---|
| **Java** | Essential | Object-oriented programming (OOP), classes, collections, exceptions, interfaces |
| **HTML** | Essential | Forms, inputs, tables, semantic structure |
| **CSS** | Essential basics | Layouts, Flexbox, Grid, responsive design |
| **JavaScript** | Essential basics | Events, validation, DOM manipulation, `fetch()` if needed |
| **JSP** | Essential | JSP pages, Expression Language (EL), JSTL, displaying server data |
| **Servlets** | Essential | HTTP requests, form handling, routing, request/response lifecycle |
| **MySQL + SQL** | Essential | CRUD operations, joins, keys, relationships, constraints, transactions |
| **JDBC** | Essential | Connecting Java to MySQL, prepared statements, result sets |
| **Git + GitHub** | Essential | Branches, commits, collaboration, reviewing changes |
| **GitHub Desktop** | Optional | Visual Git workflow |
| **Testing and debugging** | Essential | Logs, breakpoints, API/form testing, database verification |
| **Docker** | Later | Containers and deployment, when needed |

## How the Main Technologies Fit Together

For a traditional Java web application, the components commonly work together like this:

1. **HTML, CSS, and JavaScript** provide the browser interface.
2. **JSP** renders dynamic pages and displays data from the server.
3. **Servlets** receive HTTP requests and coordinate the response.
4. **Java service classes** contain business rules and application logic.
5. **DAO/data-access classes and JDBC** handle database operations.
6. **MySQL** stores tickets, users, comments, and related records.
7. **Git and GitHub** track changes and support collaboration.
8. **Testing and debugging** help verify that the application behaves correctly.

Keep business logic and SQL out of JSP pages as much as possible. Use a clear separation between page rendering, request handling, business rules, and database access.

## Recommended Learning Order

### Stage 1 — Development Basics
- Learn basic terminal commands and how to run the project.
- Learn Git basics: status, diff, add, commit, branch, merge, and safe recovery.
- Learn how GitHub repositories, push/pull, and pull requests work.
- Refresh Java fundamentals and OOP.

### Stage 2 — Database Fundamentals
- Learn relational database concepts.
- Practice SQL: `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
- Understand primary keys, foreign keys, joins, constraints, and transactions.
- Learn JDBC, prepared statements, and result sets.

### Stage 3 — Web Application Fundamentals
- Learn HTML forms and semantic elements.
- Learn enough CSS for layouts and responsive pages.
- Learn JavaScript events, DOM manipulation, and client-side validation.
- Understand HTTP requests/responses, URLs, and status codes.

### Stage 4 — Java Web Development
- Learn the Servlet request/response lifecycle.
- Learn request parameters, form handling, validation, and routing.
- Learn JSP, Expression Language (EL), and JSTL.
- Render ticket data from the backend without placing business logic directly in JSP pages.

### Stage 5 — Build the Ticketing System
Implement small features one at a time:
1. Create and retrieve tickets.
2. Persist tickets in MySQL.
3. Update ticket details and status.
4. Add priorities and assignment.
5. Add comments and change history.
6. Add users, authentication, and authorization.
7. Add search, filtering, and pagination.

For each feature, define requirements and acceptance criteria before asking Claude Code to implement it. Review the changes, run tests, and make sure you can explain the important code.

### Stage 6 — Testing, Security, and Collaboration
- Learn to read stack traces, use logs, and debug with breakpoints.
- Test valid inputs, invalid inputs, missing records, and database failures.
- Learn authentication versus authorization and enforce permissions on the server.
- Review code changes before committing or merging them.
- Never commit passwords, API keys, or other secrets to Git.

### Stage 7 — Deployment (Later)
- Learn environment variables and production configuration.
- Learn Docker and Docker Compose if they solve a real development or deployment need.
- Understand database migrations, backups, logs, and deployment basics.

## What to Postpone

Do not prioritize Docker before the application runs locally. Do not learn JSP unless it is relevant to your chosen Java architecture—but since JSP is being taught in your course, it is reasonable to learn it alongside Servlets. Avoid learning multiple backend languages, frontend frameworks, databases, or advanced infrastructure tools at the same time.

## Working with ChatGPT and Claude Code

Use this development cycle for every feature:

1. Explain the requirement in your own words.
2. Ask ChatGPT to clarify requirements, edge cases, and acceptance criteria.
3. Use ChatGPT to prepare a specific implementation prompt for Claude Code.
4. Ask Claude Code to inspect the existing project and propose a plan before editing.
5. Review the plan and approve significant architectural or destructive changes.
6. Let Claude implement a small, focused change.
7. Inspect the diff and run the relevant tests.
8. Ask for a beginner-friendly explanation of the implementation.
9. Explain the key logic yourself and verify that the feature works.
10. Commit the reviewed changes to Git.

**Important:** AI-generated code is not automatically correct. Do not accept a feature just because Claude says it is complete. Verify its behavior, review the changes, and understand the important logic.

## Guiding Principle

**Learn what the project needs, build in small steps, test every meaningful change, and understand the code you accept.**

The goal is not to master every technology before starting. The goal is to become capable of building, debugging, and maintaining the Modern Ticketing System with AI assistance.
