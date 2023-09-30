import { EditProfile } from '@/features';
import { userMock } from '@/interfaces';

const Edit = () => {
  return <EditProfile {...userMock} />;
};

export default Edit;
