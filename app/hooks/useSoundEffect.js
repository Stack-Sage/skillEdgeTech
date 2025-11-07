import { useCallback } from "react";

const audioCache = {};

function getAudio(src) {
  if (!audioCache[src]) {
    const audio = new Audio(src);
    audio.preload = "auto";
    audioCache[src] = audio;
  }
  return audioCache[src];
}

export function useSoundEffect() {
  const playClick = useCallback(() => {
    const audio = getAudio("/assets/sounds/click_sound.wav");
    audio.currentTime = 0;
    audio.play();
  }, []);
  return { playClick };
}
