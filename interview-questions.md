# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: add the foreign key through a migration. The foreign key name is foreign_key, or something els that I decide. The key would be on the student model and be referenced in the cohort model

  Researched answer: Create a migration, in the change method use add_foreign_key to be able to add the foreign key, and then migrate. The foreign key would be on the student model because the student will have only cohort and the cohort will have many students. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: Show, edit, update, and destroy. These access data fromn the database and will return an error if not passed params. 

  Researched answer: Show needs to know what to show, edit needs to know what data to edit, update works in tangent with edit and actually changes the data that is being shown from edit, and destroy needs to know what data to destroy. Create doesn't need params because it is creating new data, and index has all of the params and not a specific one.



3. Name three rails generator commands. What is created by each?

  Your answer:
  rails g model: creates the database with the model architecture
  rails g controller: creates the controller for that database, where the actions would be created/stored
  rails g migration: generates a migration path to change the database configuration

  Researched answer: 
  rails generate migration will create an appropriately named empty migration 
  rails g controller: creates the controller for that database, where the actions would be created/stored
  rails g model: creates the database with the model architecture



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students          index

action: "POST"   route: /students           create

action: "GET"    route: /students/new       new

action: "GET"    route: /students/2         show

action: "GET"    route: /students/2/edit      edit

action: "PATCH"  route: /students/2           update

action: "DELETE" route: /students/2           destroy



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


As a User: I can see colummns for To do, Date started, Date Due, complete?, Date completed 
As a User: I can add custom colummns to the list
As a User: I can add items to the list
As a User: I can edit the information in each box
As a User: I can see a desciption of the list
As a User: I can select multipe items to be deleted/updated
As a User: I can see different colors based on importance/priority levels
As a User: I can change the size of the table 
As a User: I can select different table styles
As a User: I can change the orderof list items, or sort them based on due date or priority level