# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# db/seeds.rb
john = User.create!(
  email: 'john.doe@example.com',
  first_name: 'John',
  last_name: 'Doe'
)

jane = User.create!(
  email: 'jane.doe@example.com',
  first_name: 'Jane',
  last_name: 'Doe'
)

Movie.create!(
  [
    {
      title: 'Game of Thrones',
      description: 'the story of the nine kingdoms',
      user: john,
      image_url: ''
    },
    {
      title: 'Gotham',
      description: 'The story of a town full of evil people',
      user: john,
      image_url: ''
    },
    {
      title:'Nikita',
      description: 'The best action movie you can ever watch ' \
                   'Martian portal called the Ark to deal with an outbreak of a mutagenic virus',
      user: jane,
      image_url: ''
    },
    {
      title: 'The furius seven!',
      description: 'The best audition of the furious',
      user: jane,
      image_url: ''
    },    {
      title: 'Stranger things',
      description: 'The best hit movie on netflix',
      user: jane,
      image_url: ''
    }
  ]
)
