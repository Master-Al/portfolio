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
  <Layout title="react-estate">
    <Container>
      <Title>
        React Estate <Badge>2025</Badge>
      </Title>
      <P>
        This react estate app is a real estate app for web. Built with React
        native + Appwrite. It helps you find the best real estate in your area
        based on your preferences.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android + IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React native Typescript and Appwrite</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/thumbnailRestate.png" alt="reState" />
        <WorkImage src="/images/works/thumbOnboarding.png" alt="reState" />
      </SimpleGrid>
      <WorkImage src="/images/works/thumbnailRestate_2.png" alt="reState" />
      <WorkImage src="/images/works/thumbnailRestate_3.jpg" alt="reState" />
    </Container>
  </Layout>
)

export default Work
