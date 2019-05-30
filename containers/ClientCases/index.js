import React from 'react';
import styled from 'styled-components';
import { Text, Button, Flex, Box, Section } from 'components';
import Link from 'next/link';

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 60%;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

const Container = styled(props => <Flex {...props} />)`
  flex-wrap: wrap;
  margin-bottom: 80px;
  text-align: left;
  h4 {
    margin: 20px 0 10px 0;
    font-size: 24px;
  }
  p {
    color: ${p => p.theme.colors.blackLight};
    font-size: 18px;
  }
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 0;
  }
`;

const ClientCases = ({
  content: { card1, card2, card3, card4, button, href }
}) => (
  <Section
    textAlign="center"
    p={['60px 40px', '60px 40px', '160px']}
    bg="greyLighter"
  >
    <Text mb="80px" as="h3">
      Client Cases.
    </Text>
    <Container m="-20px" justifyContent="space-between" width="100%">
      {[card1, card2, card3, card4].map(({ img, title, text, href }) => (
        <Link passHref href={href}>
          <Box
            as="a"
            m="20px"
            flexBasis={[
              'calc(100% - 40px)',
              'calc(100% - 40px)',
              'calc(50% - 40px)'
            ]}
          >
            <Img img={img} />
            <Text as="h4">{title}</Text>
            <Text as="p">{text}</Text>
          </Box>
        </Link>
      ))}
    </Container>
    <Box mt="40px">
      <Link passHref href={href}>
        <Button as="a">{button}</Button>
      </Link>
    </Box>
  </Section>
);

export default ClientCases;
