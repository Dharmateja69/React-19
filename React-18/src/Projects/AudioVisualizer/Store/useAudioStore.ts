import { create } from "zustand";

interface AudioState {
  audioContext: AudioContext | null;
  analyser: AnalyserNode | null;
  sourceNode: AudioBufferSourceNode | null;
  dataArray: Uint8Array | null;
  frequencies: number[];
  waveform: number[];
  isPlaying: boolean;
  mode: "bars" | "circles"; // NEW: Visualization mode
  setMode: (mode: "bars" | "circles") => void;
  setAudioFile: (file: File) => void;
  play: () => void;
  pause: () => void;
  updateAudioData: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  audioContext: null,
  analyser: null,
  sourceNode: null,
  dataArray: null,
  frequencies: [],
  waveform: [],
  isPlaying: false,
  mode: "bars",
  setMode: (mode) => set({ mode: mode }),

  setAudioFile: async (file: File) => {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const gainNode = audioContext.createGain();
    sourceNode.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioContext.destination);

    set({
      audioContext,
      analyser,
      sourceNode,
      dataArray,
    });

    get().updateAudioData();
  },

  play: () => {
    const { sourceNode, isPlaying, audioContext } = get();
    if (!sourceNode || isPlaying || !audioContext) return;

    sourceNode.start(0);
    set({ isPlaying: true });
    get().updateAudioData();
  },

  pause: () => {
    const { sourceNode, isPlaying } = get();
    if (!sourceNode || !isPlaying) return;

    sourceNode.stop();
    set({ isPlaying: false });
  },

  updateAudioData: () => {
    const { analyser, isPlaying } = get();
    if (!analyser || !isPlaying) return;

    const bufferLength = analyser.frequencyBinCount;
    const freqArray = new Uint8Array(bufferLength);
    const waveArray = new Uint8Array(bufferLength);

    const update = () => {
      if (!get().isPlaying) return;

      analyser.getByteFrequencyData(freqArray);
      analyser.getByteTimeDomainData(waveArray);

      set({
        frequencies: Array.from(freqArray).map((v) => v / 255),
        waveform: Array.from(waveArray).map((v) => v / 255),
      });

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  },
}));
