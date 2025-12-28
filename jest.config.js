module.exports = {
  testEnvironment: 'jsdom', // Окружение для тестов (для браузерных приложений)
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
};