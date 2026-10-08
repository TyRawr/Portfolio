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
import type { Project } from "../interfaces/Project";
import ProjectCard from "../components/ProjectCard";

const projects: Project[] = [
  {
    title: "Adobe Commerce Integration",
    category: "Commerce",
    description:
      "Customizing an Adobe Commerce storefront and integrating third-party services into the purchasing experience.",
    lessons: [
      "Using GraphQL to interact with Adobe Commerce APIs and third-party services such as PayPal.",
      "Modifying cart and checkout behavior while working within the existing Commerce architecture.",
      "Understanding how payment, cart, customer, and order data move through the Commerce ecosystem.",
    ],
    technologies: [
      "Adobe Commerce",
      "GraphQL",
      "PayPal",
      "JavaScript",
    ],
    link: {
      type: "internal",
      url: "/projects/adobe-commerce",
    },
  },

  {
    title: "Lesson Beat",
    category: "Personal",
    description:
      "A service-booking platform connecting music educators and students.",
    lessons: [
      "Designing a real-world booking system around provider availability and scheduling.",
      "Building authentication and authorization using Supabase.",
      "Modeling relationships between customers, providers, services, availability, and bookings.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "React",
    ],
    link: {
      type: "external",
      url: "https://lessonbeat.com",
    },
  },

  {
    title: "Recycled Decking Company",
    category: "AEM",
    description:
      "Worked as an individual contributor to the decking team. Build front end railing product compare table. " +
      "Used vanilla JS to fill in UI components and handle interactive events. " + 
      "Used GraphQL to post payment information",
    lessons: [
      "Exposure to Adobe Commerce.",
      "Adobe Commerce cart and checkout process.",
    ],
    technologies: [
      "AEM",
      "Java",
      "GraphQL",
      "React",
    ],
    // No link — this card won't be clickable.
  },

  {
    title: "Online for profit University",
    category: "AEM",
    description:
      "Led an AEM 5.6 to 6.5 AMS and then from AMS to AEMaaCS. Moved ext.js dialogs to Touch UI. Used groovy console and groovy scripts to transform jcr content.",
    lessons: [
      "Accessibility: adhering to WCAG 2.1 AAA and AA standards",
      "Lift and shift from on prem to cloud.",
      "Dialog conversion tool",
      "Working with Adobe Managed Services (AMS)",
      "Setting up AEM as a Cloud Service (AEMaaCS)",
    ],
    technologies: [
      "AEM",
      "Java",
      "JSP",
      "React",
    ],
    // No link — this card won't be clickable.
  },

  {
    title: "Ear Training",
    category: "Audio",
    description:
      "A small game for guessing an audio interval.",
    lessons: [
      "Learning how to generate audio in a browser.",
    ],
    technologies: [
      "Javascript",
      "Audio"
    ],
    link: {
      type: "internal",
      url: "/projects/ear-training"
    }
  },
];

export default function Projects() {
  return (
    <Container size="sm" py={80}>
      <Stack gap="lg">
        <Title>Projects</Title>

        <Text c="dimmed">
          What I have learned over the years
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="lg">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}