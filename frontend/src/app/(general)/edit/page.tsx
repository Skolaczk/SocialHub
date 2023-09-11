import { getMe } from '@/services';
import { EditProfile } from '@/features';

const Edit = async () => {
  const user = await getMe();

  return <EditProfile {...user} />;
};

export default Edit;
