import { withRouter } from "next/router";
import Head from 'next/head'

import HeroFullLayout from "../../components/herofullLayout.js";

const Content = withRouter(props => (
  <div>
    <h1 className="title">{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
));

const Page = props => (
  <HeroFullLayout>
    <Head>
      <title>Post</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Content />
  </HeroFullLayout>
);

export default Page;
