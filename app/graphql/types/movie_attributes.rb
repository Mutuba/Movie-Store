# app/graphql/types/item_attributes.rb

module Types
  class MovieAttributes < Types::BaseInputObject
    description "Attributes for creating or updating a movie"

    argument :title, String, required: true
    argument :description, String, required: false
    argument :image_url, String, required: false
  end
end