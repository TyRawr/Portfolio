import {
  AppShell,
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

import { Link } from "react-router-dom";

const projects = [
  {
    title: "BookEase",
    description:
      "Appointment scheduling platform built with React, TypeScript, and Supabase.",
    route: "/projects/bookease",
  },
  {
    title: "Portfolio",
    description:
      "This website. Built to showcase projects, experiments, and technical writing.",
    route: "/projects/portfolio",
  },
  {
    title: "Next Project",
    description:
      "A future project demonstrating another technology or concept.",
    route: "/projects/next-project",
  },
];

export default function Home() {
  return (
    <AppShell header={{ height: 70 }} padding="md">

      {/* Header */}
      <AppShell.Header>
        <Container h="100%">
          <Group justify="space-between" h="100%">
            <Title order={3} c="mint.5">
              Tyler-Rasmussen.dev
            </Title>

            <Group>
              <Button component={Link} to="/" variant="subtle">
                Home
              </Button>

              <Button
                component={Link}
                to="/ear-training"
                variant="light"
                color="mint"
              >
                Ear Training
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      {/* Main */}
      <AppShell.Main>
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
              <Button size="lg" color="mint">
                View Projects
              </Button>

              <Button
                size="lg"
                variant="default"
                leftSection={<IconBrandGithub size={18} />}
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

                <Title order={4}>Learning Systems</Title>

                <Text c="dimmed">
                  I like building experimental tools like audio training systems,
                  automation, and interactive apps.
                </Text>
              </Card>
            </SimpleGrid>
          </Stack>

          {/* Projects */}
          <Stack py={60}>
            <Title order={2}>Featured Projects</Title>

            <SimpleGrid cols={{ base: 1, md: 3 }}>
              {projects.map((project) => (
                <Card key={project.route} withBorder radius="lg" p="xl">
                  <Title order={3}>{project.title}</Title>

                  <Text c="dimmed" my="md">
                    {project.description}
                  </Text>

                  <Button
                    component={Link}
                    to={project.route}
                    color="mint"
                    variant="light"
                  >
                    View Project
                  </Button>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>

        </Container>
      </AppShell.Main>
    </AppShell>
  );
}