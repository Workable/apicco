const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

const validate = {
  movie_id: Joi.number()
    .integer()
    .required()
};

async function handle({ movies, request, response }, next) {
  const index = movies.findIndex(m => m.id === request.body.movie_id);
  const movie = movies[index];

  if (!movie) {
    throw Boom.notFound();
  }

  movies.splice(index, 1);

  response.status = 204;
}

module.exports = {
  validate,
  handle
};
