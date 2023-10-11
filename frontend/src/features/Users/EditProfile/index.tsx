import { ModalHeader } from '@/components';
import { EditProfileForm } from './EditProfileForm';
import { IUserWithNotifications } from '@/services';

export const EditProfile = (user: IUserWithNotifications) => {
  return (
    <div className="modal-background">
      <div className="modal p-5 max-w-xl md:h-auto md:p-8">
        <ModalHeader heading="edit profile" />
        <EditProfileForm {...user} />
      </div>
    </div>
  );
};
