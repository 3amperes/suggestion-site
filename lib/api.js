import sanity from './sanity';
import groq from 'groq';

export function getRents() {
  const query = groq`*[_type == "rent"]|order(publishedAt desc){
        _id,
        "name": property->title,
        "coordinates": property->location
      }`;

  return sanity.fetch(query);
}

export function getAllRents() {
  const query = groq`*[_type == "rent"] { _id }`;
  return sanity.fetch(query);
}

export function getSingleRent({ id }) {
  const query = groq`*[_type == "rent" && _id == $id] {
    _id,
    rentReference,
    date,
    "title": property->title,
  }[0]`;

  return sanity.fetch(query, { id });
}
