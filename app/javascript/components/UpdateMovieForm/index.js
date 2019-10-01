// /app/javascript/components/UpdateItemForm

import React from "react";
import { Mutation } from "react-apollo";
import { UpdateMovieMutation } from "./operations.graphql";
import ProcessMovieForm from "../ProcessMovieForm";
import cs from "./styles";

const UpdateMovieForm = ({
  id,
  initialTitle,
  initialDescription,
  initialImageUrl,
  onClose,
  onErrors,
  errors
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <Mutation mutation={UpdateMovieMutation}>
        {(updateMovie, { loading }) => (
          <ProcessMovieForm
            initialImageUrl={initialImageUrl}
            initialTitle={initialTitle}
            initialDescription={initialDescription}
            errors={errors}
            buttonText="Update Movie"
            loading={loading}
            onProcessMovie={({ title, description, imageUrl }) => {
              updateMovie({
                variables: {
                  id,
                  title,
                  description,
                  imageUrl
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  updateMovie: {
                    __typename: "UpdateMovieMutationPayload",
                    movie: {
                      id,
                      __typename: "Movie",
                      title,
                      description,
                      imageUrl
                    },
                    errors: null
                  }
                }
              }).then(({ data }) => {
                onErrors(data.updateMovie.errors);
              });
              onClose();
            }}
          />
        )}
      </Mutation>
      <button className={cs.close} onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default UpdateMovieForm;
