// app/javascript/components/Library
import React, { useState } from "react";
import { Query } from "react-apollo";
import { LibraryQuery } from "./operations.graphql";
import cs from "./styles";
import UpdateMovieForm from "../UpdateMovieForm";
import AddMovieForm from "../AddMovieForm"
import Subscription from "../Subscription";

const Library = () => {
  const [movie, setMovie] = useState(null);

  return (
    <Query query={LibraryQuery}>
      {({ data, loading, subscribeToMore }) => (
        <div className={cs.library}>
          {loading || !data.movies
            ? "loading..."
            : data.movies.map(({ title, id, user, imageUrl, description }) => (
                <button
                  key={id}
                  className={cs.plate}
                  onClick={() => setMovie({ title, imageUrl, id, description })}
                >
                  <div className={cs.title}>{title}</div>
                  <div>{description}</div>
                  {imageUrl && <img src={imageUrl} className={cs.image} />}
                  {user ? (
                    <div className={cs.user}>added by {user.email}</div>
                  ) : null}
                </button>
              ))}

          {movie !== null && (
            <UpdateMovieForm
              id={movie.id}
              initialTitle={movie.title}
              initialDescription={movie.description}
              initialImageUrl={movie.imageUrl}
              onClose={() => setMovie(null)}
            />
          )}
          <Subscription subscribeToMore={subscribeToMore} />
        </div>
      )}
    </Query>
  );
};

export default Library;
