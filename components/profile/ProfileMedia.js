import { ProfileMediaContainer } from '../../styles/profile.styles';
import SelectTab from './SelectTab';

function ProfileMedia() {
  return (
    <ProfileMediaContainer>
      <div className="content-select-tab ">
        <SelectTab />
        <SelectTab />
      </div>
    </ProfileMediaContainer>
  );
}

export default ProfileMedia;
