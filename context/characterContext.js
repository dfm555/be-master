import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { useGetData } from 'utils/useRequest'
import { fetcher } from 'utils/common'

export const CharacterContext = createContext({})

export const useCharacters = () => useContext(CharacterContext)

const PATH = '/character'
const PAGINATION_PATH = '?page='

export const CharacterProvider = ({ children }) => {
  const { data } = useGetData(PATH)

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState('')
  const [query, setQuery] = useState('')

  const setData = data => {
    setLoading(true)
    setCharacters(data?.results)
    setInfo(data?.info)
    setLoading(false)
  }

  useEffect(() => {
    setData(data)
  }, [data])

  const filterData = useCallback(
    async query => {
      const data = await fetcher(`${PATH}${PAGINATION_PATH}${page}&${query}`)
      setData(data)
      setQuery(query)
    },
    [page]
  )

  const pagination = useCallback(
    async page => {
      const data = await fetcher(`${PATH}${PAGINATION_PATH}${page}&${query}`)
      setPage(page)
      setData(data)
    },
    [query]
  )

  return (
    <CharacterContext.Provider
      value={{ characters, info, loading, filterData, pagination }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
