import '@testing-library/jest-dom'
// обязательно надо подключать так как, например fetch не используется на стороне сервера 
// а эта библиотека его заменяет, чтобы можно было выполнить на сервере
//  также как и остальные модули
import { fetch, Headers, Request, Response } from 'cross-fetch'
import { setupServer } from 'msw/node'
global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response

export const server = setupServer();

