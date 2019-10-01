# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :sign_in, mutation: Mutations::SignInMutation
    field :add_movie, mutation: Mutations::AddMovieMutation
    field :update_movie, mutation: Mutations::UpdateMovieMutation
  end
end
