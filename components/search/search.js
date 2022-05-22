import React, { useState, useEffect } from 'react'
import { Form, Input, Select, Button, Row, Col } from 'antd'

import { useCharacters } from 'context/characterContext'

import { serialize } from 'utils/common'

const { Option } = Select

require('./search.less')

export function SearchComponent() {
  const { filterData } = useCharacters()

  const [form] = Form.useForm()
  const [, forceUpdate] = useState({}) // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = values => {
    filterData(serialize(values))
  }

  return (
    <div className="SearchComponent">
      <Form form={form} name="search_form" onFinish={onFinish}>
        <Row gutter={4}>
          <Col>
            <Form.Item name="name">
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="status">
              <Select
                allowClear
                placeholder="Status"
                className="SearchComponent-select"
              >
                <Option value="alive">Alive</Option>
                <Option value="dead">Dead</Option>
                <Option value="unknown">Unknown</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="species">
              <Input placeholder="Species" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="type">
              <Input placeholder="Type" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="gender">
              <Select
                allowClear
                placeholder="Gender"
                className="SearchComponent-select"
              >
                <Option value="female">Female</Option>
                <Option value="male">Male</Option>
                <Option value="genderless">Genderless</Option>
                <Option value="unknown">Unknown</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Search
                </Button>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
