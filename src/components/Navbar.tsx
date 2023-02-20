import BaseButton from './BaseButton';
import IconButton from './IconButton';

export default function Navbar() {
  const onSettings = () => {
    console.log('Settings clicked');
  };

  const onUndo = () => {
    console.log('Undo clicked');
  };

  return (
    <div className="flex items-center justify-between w-full p-5">
      <div className="text-lg font-semibold">Pomodoro Timer</div>

      <BaseButton>New Beta!</BaseButton>
      <IconButton
        icon="settings"
        className="w-5 h-5 rotate-90"
        onClick={onSettings}
      />
      <IconButton icon="undo" className="w-5 h-5" onClick={onUndo} />
    </div>
  );
}
