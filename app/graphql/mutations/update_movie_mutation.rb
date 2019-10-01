# app/graphql/mutations/update_item_mutation.rb

module Mutations
  class UpdateMovieMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :title, String, required: true
    argument :description, String, required: false
    argument :image_url, String, required: false

    field :movie, Types::MovieType, null: true
    field :errors, [String], null: false

    def resolve(id:, title:, description: nil, image_url: nil)
      check_authentication!

      movie = Movie.find(id)

      if movie.update(attributes.to_h)
        MoviesStoreSchema.subscriptions.trigger("MovieUpdated", {}, movie)
        { movie: movie }
      else
        { errors: movie.errors.full_messages }
      end
    end
  end
end