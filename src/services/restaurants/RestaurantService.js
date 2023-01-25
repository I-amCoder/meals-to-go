import camelize from "camelize";
import { mocks } from "./mock";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("location not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  return camelize(result);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
