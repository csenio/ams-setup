import { Card, Flex, Box, Section } from 'components';
import React from 'react';

const content = {
  cards: [
    {
      img: '/static/client-cases1.jpg',
      title: 'Kudos from Impraise! Growing their people.',
      text:
        'Impraise were one of our early adopters, they’re a scale up working in the HR tech space and are making some productive and innovative changes. As a fun team of dedicated innovators ...',
      secondary: true,
      href: '/cases/impraise'
    },
    {
      img: '/static/client-cases3.jpg',
      title: 'Adding some key-hires to a company in transition.',
      text:
        'Talmundo is a European HR Tech company founded in 2012 out of a growing frustration around HR information systems. Stijn, the CEO, was tired of the tools he tried to implement ...',
      secondary: true,
      href: '/cases/talmundo'
    }
  ]
};

const OtherCases = () => {
  return (
    <Section bg="greyLighter" p={['80px 40px 20px', '80px 40px 0', '80px 160px 0']}>
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
            <Card {...props} />
          </Box>
        ))}
      </Flex>
    </Section>
  );
};

export default OtherCases;
