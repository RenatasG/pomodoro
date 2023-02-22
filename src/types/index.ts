export type Mode = 'focus' | 'rest' | 'long_rest';

export interface TimerTabType {
  name: string;
  count: number;
  mode: Mode;
  time: number;
  isOpen: boolean;
  onTabClick: (mode: Mode) => void;
}
