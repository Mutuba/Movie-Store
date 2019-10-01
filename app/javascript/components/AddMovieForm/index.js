import React from "react";
import { Mutation } from "react-apollo";
import { AddMovieMutation } from "./operations.graphql";
import ProcessMovieForm from "../ProcessMovieForm";
import { LibraryQuery } from "../Library/operations.graphql";

const AddMovieForm = () => (
  <Mutation mutation={AddMovieMutation}>
    {(addMovie, { loading, data }) => (
      <ProcessMovieForm
        buttonText="Add Item"
        loading={loading}
        errors={data && data.addMovie.errors}
        onProcessMovie={({ title, description, imageUrl }) =>
          addMovie({
            variables: {
              title,
              description,
              imageUrl
            },
            update: (cache, { data: { addMovie } }) => {
              {
                const movie = addMovie.movie;
                if (movie) {
                  const currentMovies = cache.readQuery({ query: LibraryQuery });
                  cache.writeQuery({
                    query: LibraryQuery,
                    data: {
                      movies: [movie].concat(currentMovies.movies)
                    }
                  });
                }
              }
            }
          })
        }
      />
    )}
  </Mutation>
);

export default AddMovieForm;
