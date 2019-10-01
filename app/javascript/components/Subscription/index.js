
// /app/javascript/components/Subscription/index.js
import React, { useEffect } from 'react';
import { MovieSubscription } from './operations.graphql';

const Subscription = ({ subscribeToMore }) => {
  useEffect(() => {
    return subscribeToMore({
      document: MovieSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { movieAdded, movieUpdated } = subscriptionData.data;

        if (movieAdded) {
          const alreadyInList = prev.movie.find(e => e.id === movieAdded.id);
          if (alreadyInList) {
            return prev;
          }

          return { ...prev, movies: prev.movies.concat([movieAdded]) };
        }

        if (movieUpdated) {
          return {
            ...prev,
            moviess: prev.movies.map(el =>
              el.id === movieUpdated.id ? { ...el, ...movieUpdated } : el
            ),
          };
        }

        return prev;
      },
    });
  }, []);
  return null;
};

export default Subscription;