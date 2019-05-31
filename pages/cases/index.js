import { Card, CardLarge, Flex, Box, Section } from 'components';
import { WantToKnowMore } from 'containers';
import React from 'react';
import Head from 'next/head';

const content = {
  largeCard: {
    img: '/static/client-cases4.jpg',
    title: 'Setting up a team from scratch in The Netherlands',
    text:
      'October was founded in 2014 in Paris, under the name Lendix, due to new regulations for lending to the SME market. The mission of this amazing scale-up is to allow entrepreneurs ...',
    buttonText: 'Read more',
    secondary: true,
    slug: '/cases/october'
  },
  cards: [
    {
      img: '/static/client-cases3.jpg',
      title: 'Adding some key-hires to a company in transition.',
      text:
        'Talmundo is a European HR Tech company founded in 2012 out of a growing frustration around HR information systems. Stijn, the CEO, was tired of the tools he tried to implement ...',
      secondary: true,
      slug: '/cases/talmundo'
    },
    {
      img: '/static/client-cases1.jpg',
      title: 'Kudos from Impraise! Growing their people.',
      text:
        'Impraise were one of our early adopters, they’re a scale up working in the HR tech space and are making some productive and innovative changes. As a fun team of dedicated innovators ...',
      secondary: true,
      slug: '/cases/impraise'
    },
    {
      img: '/static/client-cases2.jpg',
      title: '50Five',
      text: 'Expanding the team for 50Five.',
      secondary: true,
      slug: '/cases/fiftyfive'
    }
  ],
  wantToKnowMore: {
    img: '/static/placeholder-background.jpg',
    title: 'Want to know more?',
    text: 'Read our Pitch deck for more information',
    button: 'Download'
  }
};

const BlogPosts = () => {
  return (
    <>
      <Head>
        <title>Cases - ONE.</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="description" content="Our cases." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cases - ONE." />
        <meta property="og:description" content="Our cases." />
        <meta property="og:url" content="https://oneworks.co/cases/" />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Our cases." />
        <meta name="twitter:title" content="Cases - ONE." />
      </Head>
      <Section
        bg="greyLighter"
        p={['40px 16px 20px', '40px 80px 20px', '100px 160px 20px']}
      >
        <CardLarge
          href={`/blog/post?title=${content.largeCard.slug}`}
          {...content.largeCard}
        />
        <Flex flexWrap="wrap" mx={['-10px', '-10px', '-30px']}>
          {content.cards.map(props => (
            <Box
              key={props.title}
              mb={['60px', '80px', '80px']}
              mx={['10px', '10px', '30px']}
              flexBasis={[
                'calc(100% - 20px)',
                'calc(50% - 20px)',
                'calc(50% - 60px)'
              ]}
            >
              <Card href={`/blog/post?title=${props.slug}`} {...props} />
            </Box>
          ))}
        </Flex>
      </Section>
      <WantToKnowMore content={content.wantToKnowMore} />
    </>
  );
};

export default BlogPosts;
