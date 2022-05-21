import Head from 'next/head'
import Image from 'next/image'

import { Layout as LayoutANTD, Anchor } from 'antd'

const { Header, Footer, Content } = LayoutANTD

const { Link } = Anchor

require('./layout.less')

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Rick and Morty APP</title>
      </Head>
      <LayoutANTD className="Layout">
        <Header className="Layout-header">
          <div className="Layout-headerContent">
            <Image
              src="/images/logo.svg"
              layout={'fixed'}
              width={60}
              height={60}
              alt="Rick and Morty"
              priority
            ></Image>
            <Image
              src="/images/rick_and_morty.svg"
              layout={'fixed'}
              width={250}
              height={64}
              alt="Rick and Morty"
              priority
            ></Image>
          </div>
        </Header>
        <Content className="Layout-content">
          <div className="Layout-contentContainer">{children}</div>
        </Content>
        <Footer className="Layout-footer">
          <Anchor>
            <Link
              href="https://github.com/dfm555/"
              title="Created by dfm555 "
            ></Link>
          </Anchor>
        </Footer>
      </LayoutANTD>
    </>
  )
}
