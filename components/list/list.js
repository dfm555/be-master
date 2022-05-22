import React, { useCallback } from 'react'
import Moment from 'moment'

import { List, Avatar, Space } from 'antd'
import { DesktopOutlined, CalendarOutlined } from '@ant-design/icons'

import { useCharacters } from 'context/characterContext'
import Image from 'next/image'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

require('./list.less')

export function ListComponent() {
  const { info, characters, loading, pagination } = useCharacters()

  const onPaginate = useCallback(
    page => {
      pagination(page)
    },
    [pagination]
  )
  return (
    <div className="ListComponent">
      <List
        itemLayout="vertical"
        size="large"
        loading={loading}
        pagination={{
          onChange: page => onPaginate(page),
          pageSize: 20,
          total: info?.count || 0,
          showSizeChanger: false
        }}
        dataSource={characters || []}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={DesktopOutlined}
                text={`${item.episode.length} Episodes`}
                key="DesktopOutlined"
              />,
              <IconText
                icon={CalendarOutlined}
                text={`CreatedAt ${Moment(item.created).format('DD/MMM/YYYY')}`}
                key="DesktopOutlined"
              />
            ]}
            extra={
              <Image
                width={100}
                height={100}
                alt="logo"
                src={item.image}
                placeholder={'blur'}
                blurDataURL="https://via.placeholder.com/100x100?text=%3Cimage/%3E"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image} size={'large'} />}
              title={<span className="ListComponent-title">{item.name}</span>}
              description={
                <ul className="ListComponent-description">
                  <li>Status: {item.status}</li>
                  <li>Species: {item.species}</li>
                  <li>Type: {item.type}</li>
                  <li>Gender: {item.gender}</li>
                  <li>Origin: {item.origin.name}</li>
                  <li>Location: {item.location.name}</li>
                </ul>
              }
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  )
}
