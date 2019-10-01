# spec/graphql/types/query_type_spec.rb
require "rails_helper"

RSpec.describe Types::QueryType do
  describe "movies" do
    let!(:movies) { create_pair(:movie) }

    let(:query) do
      %(query {
        movies {
          title
        }
      })
    end

    subject(:result) do
      MovieStoreSchema.execute(query).as_json
    end

    it "returns all items" do
      expect(result.dig("data", "movies")).to match_array(
        movies.map { |movie| { "title" => movie.title } }
      )
    end
  end
end