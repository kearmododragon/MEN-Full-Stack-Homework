# git-flow-walkthrough

1. Add a collaborator
2. initialise repository
3. figure out whyo is doing what to begin with
3a. change driver/navigator every 90 minutes
4. default is main branch, moving forward writing code within a feature branch



1. Initialize a Node project. Make an initial commit.
2. Make an express-generator app. Commit.
3. Make it render a page for "new". Commit.
4. Make a "create" route. Commit.
5. Have the form on "new" page post to the "create" route. Commit.
6. Connect express to mongo by installing and setting up mongoose. Commit once it logs a successful connection message.
7. Create the schema and model for your thing that you are CRUDing. Commit.
8. Take a moment to reflect on MEN concepts. Make sure you can concisely and precisely answer these questions in an `answers.txt`:
    - What is a schema?
    - What is a model?
    - What is the difference?
    - What is the relationship between them?
9. In the "create" route, use mongoose to add a document to your database (`.create()`) based on what is in `req.body`.  Commit.
10. The "create" route redirect to the index page *after* the document has been created. Commit.
11. Make an "index" view which displays all the data created by the app so far. Commit.
12. Give your app the ability to render a "show" page. Commit.
13. Each item on the index page should link to the "show" page for that item. Commit.