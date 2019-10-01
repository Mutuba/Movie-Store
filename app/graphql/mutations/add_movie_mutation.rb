# app/graphql/mutations/add_item_mutation.rb

module Mutations
  class AddMovieMutation < Mutations::BaseMutation
    argument :attributes, Types::MovieAttributes, required: true # new argument

    field :movie, Types::MovieType, null: true
    field :errors, Types::ValidationErrorsType, null: true # <= change here

    # signature change
    def resolve(attributes:)
      check_authentication!

      movie = Movie.new(attributes.to_h.merge(user: context[:current_user])) # change here

     if movie.save
        MoviesStoreSchema.subscriptions.trigger("movieAdded", {}, movie)
        { movie: movie }
      else
        { errors: movie.errors.full_messages }
      end
    end
  end
end