import { ArrowLeftIcon, XIcon } from '@/assets/icons';
import { useRouter } from 'next/navigation';

export const PostModalHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-5">
      <button onClick={() => router.back()} className="md:invisible">
        <ArrowLeftIcon />
      </button>
      <h1 className="text-xl font-medium tracking-widest uppercase">Post</h1>
      <button onClick={() => router.back()} className="invisible md:visible">
        <XIcon isBig />
      </button>
    </div>
  );
};
