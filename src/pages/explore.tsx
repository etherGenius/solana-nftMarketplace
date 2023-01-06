import type { NextPage } from "next"
import Head from "next/head"
import { ExploreView } from "../views"

const Explore: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Nft Marketplace</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <ExploreView />
    </div>
  )
}

export default Explore
