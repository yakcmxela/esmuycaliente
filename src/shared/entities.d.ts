/**
 * Structure of an error message from callable functions
 */
type APICallableError = {
  code: string | number
  data?: never
  description?: string
  timestamp?: never
  version?: never
}

/**
 * Structure of successful responses from callable functions
 */
type APICallableSuccess<T> = {
  code?: never
  data: T
  description?: never
  timestamp: number
  version?: string
}

/**
 * The response type we send out from callable functions.
 * @typeParam The type of data expected to be sent in a successful response
 */
type APICallableResponse<T> = Promise<
  APICallableSuccess<T> | APICallableError
>

interface Projects {
  [projectId: string]: firebase.app.App
}

interface User {
  uid: string
  permissions: {
    [project: string]: boolean
  }
}
