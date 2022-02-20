const { faker } = require("@faker-js/faker");

module.exports = {
  cities: Array.from(Array(50).keys()).map((i) => {
    const name = faker.address.city();

    return {
      id: faker.datatype.uuid(),
      name: name,
      description: faker.lorem.lines(3),
      abstract: faker.lorem.lines(3),
      thumbnail: faker.image.city(500, 500, true),
      banner_image: faker.image.city(1920, 1080),
      places_count: faker.datatype.number({ min: 1, max: 500 }),
      slug: faker.helpers.slugify(name).toLocaleLowerCase(),
    };
  }),
};
