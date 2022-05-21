import { List, Avatar, Space, Skeleton, Divider } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const listData = []
const loading = true

require('./list.less')

export function ListComponents() {
  return (
    <div className="ListComponents">
      {!listData.length ? (
        <Space
          direction="vertical"
          size={'small'}
          style={{ display: 'flex' }}
          split={<Divider type="horizontal" />}
        >
          <Skeleton loading={loading} active avatar />
          <Skeleton loading={loading} active avatar />
          <Skeleton loading={loading} active avatar />
          <Skeleton loading={loading} active avatar />
        </Space>
      ) : (
        <List
          bordered
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 3
          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      )}
    </div>
  )
}
