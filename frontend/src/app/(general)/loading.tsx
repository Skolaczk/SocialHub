import { SpinnerIcon } from '@/assets/icons';

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="animate-spin">
        <SpinnerIcon />
      </div>
    </div>
  );
};

export default Loading;
