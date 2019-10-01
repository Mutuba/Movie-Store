# README
Movie-Store

Requirements
This application uses Ruby version 2.5.3. To install, use rvm or rbenv.

RVM

rvm install 2.5.3

rvm use 2.5.3

Rbenv

rbenv install 2.5.3

Bundler
Bundler provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed
I recommend bundler version 2.0.2
To install:

gem install bundler
Rails

You need Rails.. The rails version being used is rails 5.2.3.

To install:

gem install rails
Installation
To get up and running with the project locally, follow the following steps.

Clone the app

git clone https://github.com/Mutuba/Movie-Store.git

Move into the directory and install all the requirements.

cd Movie-Store
run `rails db:create`, `rails db:migrate`, `rails db:seed`
run RAILS_ENV=production bin/bundle exec rake assets:precompile to compile the assets
run `yarn && bundle && rails s   `

