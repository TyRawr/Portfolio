import { useState } from "react";
import { Button, Container, Group, Select, Stack, Text, Title } from "@mantine/core";

const NOTES = [
  { name: "C4", freq: 261.63 },
  { name: "D4", freq: 293.66 },
  { name: "E4", freq: 329.63 },
  { name: "F4", freq: 349.23 },
  { name: "G4", freq: 392.0 },
  { name: "A4", freq: 440.0 },
  { name: "B4", freq: 493.88 },
];

const INTERVALS: Record<string, number> = {
  "minor 2nd": 1,
  "major 2nd": 2,
  "minor 3rd": 3,
  "major 3rd": 4,
  "perfect 4th": 5,
  "tritone": 6,
  "perfect 5th": 7,
  "minor 6th": 8,
  "major 6th": 9,
  "minor 7th": 10,
  "major 7th": 11,
  "octave": 12,
};

function playTone(freq: number, ctx: AudioContext, time: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.frequency.value = freq;
  osc.type = "sine";

  gain.gain.setValueAtTime(0.2, time);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 1);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(time);
  osc.stop(time + 1);
}

function semitoneRatio(semitones: number) {
  return Math.pow(2, semitones / 12);
}

export default function EarTraining() {
  const [ctx] = useState(() => new AudioContext());
  const [notePair, setNotePair] = useState<{ base: number; interval: number } | null>(null);
  const [guess, setGuess] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  function generate() {
    const base = Math.floor(Math.random() * NOTES.length);
    const interval = Math.floor(Math.random() * 12) + 1;

    setNotePair({ base, interval });
    setGuess(null);
    setResult("");
  }

  function play() {
    if (!notePair) return;

    const now = ctx.currentTime;

    const baseFreq = NOTES[notePair.base].freq;
    const secondFreq = baseFreq * semitoneRatio(notePair.interval);

    playTone(baseFreq, ctx, now);
    playTone(secondFreq, ctx, now + 1);
  }

  function checkAnswer(value: string | null) {
    if (!notePair || !value) return;

    const correct = Object.entries(INTERVALS).find(
      ([, semitones]) => semitones === notePair.interval
    )?.[0];

    setGuess(value);

    if (value === correct) {
      setResult("Correct 🎉");
    } else {
      setResult(`Incorrect. It was ${correct}`);
    }
  }

  return (
    <Container size="sm" py={80}>
      <Stack gap="lg">
        <Title>Ear Training</Title>

        <Text c="dimmed">
          Listen to two notes and identify the interval.
        </Text>

        <Group>
          <Button onClick={generate}>Generate</Button>
          <Button onClick={play} disabled={!notePair}>
            Play Interval
          </Button>
        </Group>

        <Select
          label="Your guess"
          placeholder="Pick interval"
          data={Object.keys(INTERVALS)}
          value={guess}
          onChange={checkAnswer}
        />

        {result && <Text>{result}</Text>}
      </Stack>
    </Container>
  );
}