import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

import { LogoHorizontalLight } from '../components/Logos/LogoHorizontalLight'
import { LogoHorizontalDark } from '../components/Logos/LogoHorizontalDark'
import { LogoVerticalDark } from '../components/Logos/LogoVerticalDark'
import { LogoVerticalLight } from '../components/Logos/LogoVerticalLight'

const Home: NextPage = () => {
  return (
    <Layout>
      <LogoHorizontalDark />
      <LogoHorizontalLight />
      <LogoVerticalLight />
      <LogoVerticalDark />
    </Layout>
  )
}

export default Home
