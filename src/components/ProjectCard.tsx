import {
  Badge,
  Card,
  Group,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import type { Project } from "../interfaces/Project";

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <Stack gap="md">
      <div>
        <Group justify="space-between" mb="xs">
          <Title order={3}>{project.title}</Title>

          <Badge>{project.category}</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {project.description}
        </Text>
      </div>

      <div>
        <Text fw={600} size="sm" mb="xs">
          What I learned
        </Text>

        <List size="sm" spacing="xs">
          {project.lessons.map((lesson) => (
            <List.Item key={lesson}>{lesson}</List.Item>
          ))}
        </List>
      </div>

      <Group gap="xs">
        {project.technologies.map((technology) => (
          <Badge key={technology} variant="light">
            {technology}
          </Badge>
        ))}
      </Group>
    </Stack>
  );

  if (!project.link) {
    return (
      <Card withBorder radius="md" padding="lg">
        {content}
      </Card>
    );
  }

  if (project.link.type === "internal") {
    return (
      <Card
        component={Link}
        to={project.link.url}
        withBorder
        radius="md"
        padding="lg"
        style={{ cursor: "pointer" }}
      >
        {content}
      </Card>
    );
  }

  return (
    <Card
      component="a"
      href={project.link.url}
      target="_blank"
      rel="noopener noreferrer"
      withBorder
      radius="md"
      padding="lg"
      style={{ cursor: "pointer" }}
    >
      {content}
    </Card>
  );
}