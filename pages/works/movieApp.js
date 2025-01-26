import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="movieApp">
    <Container>
      <Title>
        MovieApp <Badge>2025</Badge>
      </Title>
      <P>
        MovieApp is a movie recommendation app for web. Built with React + Vite.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React+ Vite Typescript and Appwrite</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/reactMovieApp_1.png" alt="movieApp" />
        <WorkImage src="/images/works/reactMovieApp_2.png" alt="movieApp" />
      </SimpleGrid>
      <WorkImage src="/images/works/reactMovieApp_3.png" alt="movieApp" />
    </Container>
  </Layout>
)

export default Work
