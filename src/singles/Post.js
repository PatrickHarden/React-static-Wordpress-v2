import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(({ post }) => (
  <section>
    <Head>
      <body className={'single-blog blog-id-'+post.id + ' ' + post.slug} />
      {/* {(post.yoast_meta.yoast_wpseo_title) ? <title>{post.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(post.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={post.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(post.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={post.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> } */}
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1>{post.title.rendered}</h1>
          {ReactHtmlParser(post.content.rendered)}
        </Col>
      </Row>
    </Container>
  </section>
))
