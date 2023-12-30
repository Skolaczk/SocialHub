import { EditProfileForm } from './EditProfileForm';

import { ModalHeader } from '@/components';
import { IUser } from '@/interfaces';

export const EditProfile = (user: IUser) => {
  return (
    <div className="modal-background">
      <div className="modal max-w-xl p-5 md:h-auto md:p-8">
        <ModalHeader heading="edit profile" />
        <EditProfileForm {...user} />
      </div>
    </div>
  );
};
