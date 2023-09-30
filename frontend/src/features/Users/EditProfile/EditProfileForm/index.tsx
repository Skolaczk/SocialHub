import { IUser } from '@/interfaces';
import { FormField } from '@/components';
import { CameraIcon } from '@/assets/icons';
import Image from 'next/image';

export const EditProfileForm = ({ username, bio, image }: IUser) => {
  return (
    <form className="flex flex-col">
      <div className="flex justify-center relative mt-5">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-full w-24 h-24 brightness-50"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CameraIcon />
        </div>
      </div>
      <FormField type="text" label="username" value={username} />
      <div className="flex flex-col w-full">
        <label htmlFor="bio" className="mb-2">
          Content
        </label>
        <textarea
          id="bio"
          name="bio"
          value={bio}
          className="resize-none bg-neutral-100 dark:bg-neutral-500 rounded-sm p-2 h-24"
          placeholder={`I'm ${username} ...`}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-primary mt-5 w-full p-2 rounded-sm text-white xs:w-fit xs:px-20"
        >
          Save
        </button>
      </div>
    </form>
  );
};
