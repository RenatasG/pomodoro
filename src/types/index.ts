export type Mode = 'focus' | 'rest' | 'long_rest';

export interface TimerTabType {
  name: string;
  count: number;
  mode: Mode;
  isOpen: boolean;
  onTabClick: (mode: Mode) => void;
}
