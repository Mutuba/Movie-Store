# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :movies,
          [Types::MovieType],
          null: false,
          description: 'Returns a list of items availbale in Movies Store '

    def movies
       Movie.preload(:user)
    end

    # maps to types user_type, graphql will scan in the types looking it
    field :me, Types::UserType, null: true

    def me
      context[:current_user]
    end
  end
end
