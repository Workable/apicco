const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

const validate = {
  movie_id: Joi.number()
    .integer()
    .required()
};

async function handle({ movies, request, response }) {
  const movie = movies.find(m => (m.id = request.body.movie_id));

  if (!movie) {
    throw Boom.notFound();
  }

  response.status = 200;
  response.body = movie;
}

module.exports = {
  validate,
  handle
};
