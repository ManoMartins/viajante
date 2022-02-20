const { faker } = require("@faker-js/faker");

module.exports = {
  cities: Array.from(Array(10).keys()).map((i) => {
    return {
      id: faker.datatype.uuid(),
      name: faker.address.city(),
      description: faker.lorem.lines(3),
      abstract: faker.lorem.lines(3),
      thumbnail: faker.image.city(500, 500, true),
      banner_image: faker.image.city(1920, 1080),
    };
  }),
};
