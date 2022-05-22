import { API_URL } from './constants'

export const fetcher = async url => {
  const request = await fetch(`${API_URL}${url}`)
  return await request.json()
}

export const serialize = obj => {
  Object.keys(obj).forEach(key =>
    obj[key] === undefined ? delete obj[key] : {}
  )
  return new URLSearchParams(obj).toString()
}
