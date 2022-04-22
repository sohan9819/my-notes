const emojis = ['🐶', '🐷', '🐮', '🦊', '🦝', '🐼', '🐰', '🐻‍❄️', '🐨'];
export const emoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};
