import { functions, logError } from "../firebase/firebase";

// eslint-disable-next-line camelcase
export const test = functions
  .runWith({ memory: "4GB", timeoutSeconds: 540 })
  .https.onRequest(async (req, res) => {
    try {
      const response = {};
      res.send({ response });
      return;
    } catch (error) {
      logError(error);

      res.status(500).send(error);
      return;
    }
  });

module.exports = {
  test,
};
