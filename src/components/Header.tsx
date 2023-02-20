import BaseButton from './BaseButton';
import IconButton from './IconButton';

export default function Header() {
  const onSettings = () => {
    console.log('Settings clicked');
  };

  const onUndo = () => {
    console.log('Undo clicked');
  };

  return (
    <div className="flex items-center w-full p-5">
      <div className="text-lg font-semibold">Pomodoro Timer</div>

      <div className="flex ml-auto gap-x-4">
        <BaseButton>New Beta!</BaseButton>

        <IconButton
          icon="settings"
          iconClass="w-5 h-5 rotate-90"
          onClick={onSettings}>
          Customize
        </IconButton>

        <IconButton icon="undo" iconClass="w-5 h-5" onClick={onUndo}>
          Restart session
        </IconButton>
      </div>
    </div>
  );
}
