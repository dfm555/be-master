import useSWR from 'swr'

import { fetcher } from 'utils/common'

export const useGetData = path => {
  if (!path) {
    throw new Error('Path is required')
  }

  const url = `${path}`
  const { error, data } = useSWR(url, fetcher)
  return { error, data }
}
