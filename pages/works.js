import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'
import Note from '../components/note'

import thumbMovieApp from '../public/images/works/thumbMovieApp.png'
import thumbOnboarding from '../public/images/works/thumbReactEstate.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="movieApp"
            title="MovieApp"
            thumbnail={thumbMovieApp}
          >
            A movie recommendation app for web. Built with React + Vite
            Typescript and TailwindCSS.{' '}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="react-estate"
            title="react-estate"
            thumbnail={thumbOnboarding}
          >
            ReState is the app that helps you find the best real estate in your
            area based on your preferences. Built with React native and
            Appwrite.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <br />
      <Divider my={6} />
      <Paragraph>
        <Note>Note: </Note> Some of my apps have been taken down due to various
        reasons.{' '}
      </Paragraph>
      <br />
      <Divider my={6} />
    </Container>
  </Layout>
)

export default Works
