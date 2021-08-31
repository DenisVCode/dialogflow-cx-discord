/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import * as firebaseFn from "firebase-functions";
import * as adminFn from "firebase-admin";

export const functions = firebaseFn;

export const admin = adminFn.initializeApp({
  databaseURL: "https://dialogflow-cx-discord-default-rtdb.firebaseio.com/",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (...args: any[]): void => firebaseFn.logger.log(args);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logError = (...args: any[]) => functions.logger.error(args);

// const CONFIG = firebaseFn.config();

export const fs = admin.firestore();

export const rt = admin.database();

export const getRealtimeTimestamp = () => {
  return adminFn.database.ServerValue.TIMESTAMP;
};

export const getRealtimeServerValue = () => {
  return adminFn.database.ServerValue;
};

export const getFirebaseTimestamp = () => {
  return adminFn.firestore.Timestamp.now();
};

export const getFirestoreFieldValue = () => {
  return adminFn.firestore.FieldValue;
};

module.exports = {
  functions,
  admin,
  fs,
  rt,
  log,
  logError,
  getRealtimeTimestamp,
  getRealtimeServerValue,
  getFirebaseTimestamp,
  getFirestoreFieldValue,
};
