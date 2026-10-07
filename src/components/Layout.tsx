import {
  AppShell,
  Button,
  Container,
  Group,
  Title,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <Container h="100%">
          <Group justify="space-between" h="100%">
            <Title order={3} c="mint.5">
              Tyler Rasmussen
            </Title>

            <Group>
              <Button
                component={Link}
                to="/"
                variant="subtle"
              >
                Home
              </Button>

              <Button
                component={Link}
                to="/projects"
                variant="light"
                color="mint"
              >
                Projects
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}