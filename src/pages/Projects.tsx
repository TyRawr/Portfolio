import {
  Badge,
  Card,
  Container,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function Projects() {
  return (
    <Container size="sm" py={80}>
      <Stack gap="lg">
        <Title>Projects</Title>

        <Text c="dimmed">
          What I have learned over the years
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="lg">
          {/* Adobe Commerce */}
          <Card withBorder radius="md" padding="lg">
            <Stack gap="md">
              <div>
                <Group justify="space-between" mb="xs">
                  <Title order={3}>Adobe Commerce Integration</Title>
                  <Badge>Commerce</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  Customizing an Adobe Commerce storefront and integrating
                  third-party services into the purchasing experience.
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm" mb="xs">
                  What I learned
                </Text>

                <List size="sm" spacing="xs">
                  <List.Item>
                    Using GraphQL to interact with Adobe Commerce APIs and
                    third-party services such as PayPal.
                  </List.Item>

                  <List.Item>
                    Modifying cart and checkout behavior while working within
                    the existing Commerce architecture.
                  </List.Item>

                  <List.Item>
                    Understanding how payment, cart, customer, and order data
                    move through the Commerce ecosystem.
                  </List.Item>

                  <List.Item>
                    Debugging integrations across frontend components,
                    Commerce APIs, and external services.
                  </List.Item>
                </List>
              </div>

              <Group gap="xs">
                <Badge variant="light">Adobe Commerce</Badge>
                <Badge variant="light">GraphQL</Badge>
                <Badge variant="light">PayPal</Badge>
                <Badge variant="light">JavaScript</Badge>
              </Group>
            </Stack>
          </Card>

          {/* AEM */}
          <Card withBorder radius="md" padding="lg">
            <Stack gap="md">
              <div>
                <Group justify="space-between" mb="xs">
                  <Title order={3}>AEM Content Platform</Title>
                  <Badge>AEM</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  Enterprise content platforms built around Adobe Experience
                  Manager and reusable content components.
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm" mb="xs">
                  What I learned
                </Text>

                <List size="sm" spacing="xs">
                  <List.Item>
                    Designing reusable components that allow content authors
                    to build pages without developer involvement.
                  </List.Item>

                  <List.Item>
                    Working with AEM Cloud Service, content structures,
                    templates, and component dialogs.
                  </List.Item>

                  <List.Item>
                    Connecting AEM components to backend services and
                    third-party APIs.
                  </List.Item>

                  <List.Item>
                    Managing migrations, framework upgrades, and changes to
                    large enterprise sites.
                  </List.Item>
                </List>
              </div>

              <Group gap="xs">
                <Badge variant="light">AEM</Badge>
                <Badge variant="light">Java</Badge>
                <Badge variant="light">JSP</Badge>
                <Badge variant="light">React</Badge>
              </Group>
            </Stack>
          </Card>

          {/* BookEase */}
          <Card withBorder radius="md" padding="lg">
            <Stack gap="md">
              <div>
                <Group justify="space-between" mb="xs">
                  <Title order={3}>BookEase</Title>
                  <Badge>Personal</Badge>
                </Group>

                <Text size="sm" c="dimmed">
                  A service-booking platform connecting customers with
                  providers such as teachers, stylists, and other professionals.
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm" mb="xs">
                  What I learned
                </Text>

                <List size="sm" spacing="xs">
                  <List.Item>
                    Designing a real-world booking system around provider
                    availability and scheduling.
                  </List.Item>

                  <List.Item>
                    Building authentication and authorization using Supabase.
                  </List.Item>

                  <List.Item>
                    Modeling relationships between customers, providers,
                    services, availability, and bookings.
                  </List.Item>

                  <List.Item>
                    Building a full-stack application with Next.js,
                    TypeScript, and a managed backend.
                  </List.Item>
                </List>
              </div>

              <Group gap="xs">
                <Badge variant="light">Next.js</Badge>
                <Badge variant="light">TypeScript</Badge>
                <Badge variant="light">Supabase</Badge>
                <Badge variant="light">React</Badge>
              </Group>
            </Stack>
          </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}