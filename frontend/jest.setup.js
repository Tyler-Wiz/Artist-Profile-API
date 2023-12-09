// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "cross-fetch/polyfill";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
