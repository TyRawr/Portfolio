import {
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconBrandGithub,
  IconCode,
  IconRocket,
  IconUser,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <Container size="lg">

          {/* Hero */}
          <Stack py={120} gap="lg" align="center">
            <ThemeIcon color="mint" variant="light" radius="xl" size={80}>
              <IconUser size={40} />
            </ThemeIcon>

            <Title order={1} ta="center" size="3.8rem">
              Full Stack{" "}
              <Text component="span" inherit c="mint.5">
                Software Engineer
              </Text>
            </Title>

            <Text size="lg" c="dimmed" ta="center" maw={700}>
              I enjoy building scalable web applications, learning new
              technologies, and exploring interactive systems like audio and
              generative interfaces.
            </Text>

            <Group>
              <Button 
                size="lg" 
                color="mint"
                component="a"
                href="/projects"
                >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="default"
                leftSection={<IconBrandGithub size={18} />}
                component="a"
                href="https://github.com/TyRawr"
                target="_blank"
              >
                GitHub
              </Button>
            </Group>
          </Stack>

          {/* Skills */}
          <Stack py={60}>
            <Title order={2}>What I Enjoy Building</Title>

            <SimpleGrid cols={{ base: 1, md: 3 }}>
              <Card withBorder radius="md" p="xl">
                <ThemeIcon color="mint" mb="md">
                  <IconCode />
                </ThemeIcon>

                <Title order={4}>Frontend</Title>

                <Text c="dimmed">
                  React, TypeScript, Mantine, UI systems, accessibility, and
                  component architecture.
                </Text>
              </Card>

              <Card withBorder radius="md" p="xl">
                <ThemeIcon color="mint" mb="md">
                  <IconRocket />
                </ThemeIcon>

                <Title order={4}>Backend</Title>

                <Text c="dimmed">
                  APIs, authentication, databases, Supabase, and scalable system
                  design.
                </Text>
              </Card>

              <Card withBorder radius="md" p="xl">
                <ThemeIcon color="mint" mb="md">
                  <IconBrandGithub />
                </ThemeIcon>

                <Title order={4}>Game Design</Title>

                <Text c="dimmed">
                  I like building video games.
                </Text>
              </Card>
            </SimpleGrid>
          </Stack>

        </Container>
  );
}