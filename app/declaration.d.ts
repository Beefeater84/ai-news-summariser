declare module "./mocks/browser.js" {
  export const worker: {
    start: () => Promise<void>;
  };
}
