import { EditProfileForm } from './edit-profile-form';

import { ModalTemplate } from '@/components/modal-template';
import { IUser } from '@/interfaces';

export const EditProfile = (user: IUser) => {
  return (
    <ModalTemplate
      heading="edit profile"
      className="max-w-xl p-5 md:h-auto md:p-8"
    >
      <EditProfileForm {...user} />
    </ModalTemplate>
  );
};
