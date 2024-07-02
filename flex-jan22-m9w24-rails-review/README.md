# Rails Review

- Review Rails by building a project
- Existential questions

## Opinions

- Setup is a bit confusing
- Cool so far, ORM is nice
- Too much magic maybe?

## Rebuild of TinyApp: You can (not) refactor

### Planning

Since we're using an existing project (User stories, Mockups, Data structures, etc)

### Steps

- Review the structures and routes of the project

Users => Create
Urls => Add, View, Edit, Delete, Browse => BREAD
Sessions => Create, Delete

`rails generate scaffold Model ...`


- Rails version of TinyApp, gathering phase!

Authentication in Rails: https://gist.github.com/thebucknerlife/10090014
Generate short urls (b2xvn2) : https://stackoverflow.com/questions/88311/how-to-generate-a-random-string-in-ruby
Bootstrap in Rails: https://medium.com/@xnjiang/how-to-install-bootstrap-in-rails-7-f7a04bf9a7e3


- Action plan!

1. Generate Rails app
2. Create Users: name, email, password
   1. Scaffold our users to create view + model + controller
3. Create Sessions / Authentication pattern
   1. Remember to use password_digest in model, password in view
   2. Remember to make cool routes
   3. Remember to clean up the form
   4. Remember to use `session[:user_id] = user.id` and  `redirect_to '/'`
   5. Uncommment bcrypt in Gemfile
   6. Add `has_secure_password` in the model
   7. Create Login/Logout with steps 10-15 in the guide
4. Create URLs: short_url, long_url, description, user_id
   1. Remember to link them to users
   2. Remember to generate a random short_url
5. Make it pretty!
   1. Make sure all the links are there
   2. Add Bootstrap and the templates from original EJS
