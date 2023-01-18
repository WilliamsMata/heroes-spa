import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(
      `Publisher: ${publisher} is not valid, try with ${validPublisher[0]} or ${validPublisher[1]}`
    );
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
