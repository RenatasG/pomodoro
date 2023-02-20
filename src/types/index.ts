export type PMode = 'focus' | 'rest' | 'long-rest';

export interface TimerTabType {
  name: string;
  count: number;
  mode: PMode;
  isOpen: boolean;
  onTabClick: (mode: PMode) => void;
}
