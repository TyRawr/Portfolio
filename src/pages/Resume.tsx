
import {
  Anchor,
  Button,
  Container,
  Group,
  Stack,
  Title,
} from "@mantine/core";

export default function Resume() {
  return (
    <Container size="xl" py="lg">
      <Stack gap="md">
        <Group justify="space-between">
          <Title order={2}>Resume</Title>

          <Button
            component="a"
            href="/Tyler-Rasmussen-Resume.pdf"
            download="Tyler-Rasmussen-Resume.pdf"
            variant="light"
            color="mint"
          >
            Download PDF
          </Button>
        </Group>

        <iframe
          src="/Tyler-Rasmussen-Resume.pdf"
          title="Tyler Rasmussen Resume"
          width="100%"
          style={{
            height: "calc(100vh - 190px)",
            minHeight: "600px",
            border: "1px solid var(--mantine-color-default-border)",
            borderRadius: "8px",
          }}
        />

        <Anchor
          href="/Tyler-Rasmussen-Resume.pdf"
          target="_blank"
          size="sm"
          ta="center"
        >
          Having trouble viewing the PDF? Open it in a new tab.
        </Anchor>
      </Stack>
    </Container>
  );
}
