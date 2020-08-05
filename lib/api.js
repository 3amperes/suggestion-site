import sanity from './sanity';
import groq from 'groq';

export function getAdverts() {
  const query = groq`*[_type == "rent"]|order(publishedAt desc){
        _id,
        "name": property->title,
        "coordinates": property->location
      }`;

  return sanity.fetch(query);
}

export function getAllAdverts() {
  const query = groq`*[_type == "rent"] { _id }`;
  return sanity.fetch(query);
}

export function getSingleAdvert({ id }) {
  const query = groq`*[_type == "rent" && _id == $id] {
    _id,
    rentReference,
    date,
    "title": property->title,
  }[0]`;

  return sanity.fetch(query, { id });
}
