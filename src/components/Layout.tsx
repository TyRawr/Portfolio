
import {
  AppShell,
  Button,
  Container,
  Group,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons-react";

// Add your pages here
const pages = [
  {
    label: "Resume",
    path: "/resume"
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Ear Training",
    path: "/ear-training",
  },
];

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

              <Menu
                shadow="md"
                width={200}
                position="bottom-end"
                trigger="click"
                closeOnItemClick
              >
                <Menu.Target>
                  <Button
                    variant="light"
                    color="mint"
                    rightSection={<IconChevronDown size={16} />}
                  >
                    Pages
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Navigation</Menu.Label>

                  {pages.map((page) => (
                    <Menu.Item
                      key={page.path}
                      component={Link}
                      to={page.path}
                    >
                      {page.label}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Container h="100%">
          <Group justify="center" h="100%">
            <Text size="xs" c="dimmed">
              © {new Date().getFullYear()} Tyler Rasmussen
            </Text>
          </Group>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
