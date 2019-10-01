# app/graphql/types/subscription_type.rb

module Types
  class SubscriptionType < GraphQL::Schema::Object
    field :movie_added, Types::MovieType, null: false, description: "Movie was added"

    def movie_added; end
    def movie_updated; end
  end
end