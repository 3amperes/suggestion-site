import sanity from './sanity';
import groq from 'groq';

export function getRents() {
  const query = groq`*[_type == "rent"]|order(publishedAt desc){
        _id,
        title,
        thumbnail,
        "city": property.place->name,
        "sector": property.zone->name,
        "area" : property.area,
        price,
        "slug": slugRef.current,
        "coordinates": property.location
      }`;

  return sanity.fetch(query);
}

export function getAllRents() {
  const query = groq`*[_type == "rent"] { "slug": slugRef.current, }`;
  return sanity.fetch(query);
}

export function getSingleRent({ slug }) {
  const query = groq`*[_type == "rent" && slugRef.current == $slug] {
    title,
    "slug": slugRef.current,
    "city": property.place->name,
    "sector": property.zone->name,
    "area" : property.area,
    description,
    "details": property.detail,
    "dpe": property.dpe,
    "ges": property.ges,
    price,
    priceDetail,
    "gallery": property.gallery,
    thumbnail
  }[0]`;

  return sanity.fetch(query, { slug });
}

export function getPosts() {
  const query = groq`*[_type == "post"]|order(publishedAt desc){
        _id,
        title,
        thumbnail,
        "slug": slug.current,
      }`;

  return sanity.fetch(query);
}

export function getAllPosts() {
  const query = groq`*[_type == "post"] { "slug": slug.current }`;
  return sanity.fetch(query);
}

export function getSinglePost({ slug }) {
  const query = groq`*[_type == "post" && slug.current == $slug] {
    "slug": slug.current,
    title,
    description,
    thumbnail,
    date
  }[0]`;

  return sanity.fetch(query, { slug });
}
