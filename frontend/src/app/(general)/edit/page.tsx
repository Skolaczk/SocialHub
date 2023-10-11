import { EditProfile } from '@/features';
import { getMe } from '@/services';

const Edit = async () => {
  const user = await getMe();

  return user && <EditProfile {...user} />;
};

export default Edit;
