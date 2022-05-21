import { Input } from 'antd'

const { Search } = Input

require('./search.less')

export function SearchComponent() {
  const onSearch = value => console.log(value)
  return (
    <div className="SearchComponent">
      <Search
        placeholder="Input search text"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
      />
    </div>
  )
}
