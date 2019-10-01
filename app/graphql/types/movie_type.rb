# frozen_string_literal: true

# app/graphql/types/item_type.rb
module Types
  class MovieType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :image_url, String, null: true
    field :user, Types::UserType, null: false
  end
end
