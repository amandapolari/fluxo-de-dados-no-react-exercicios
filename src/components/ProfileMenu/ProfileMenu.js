import {
    ProfileBio,
    ProfileImage,
    ProfileName,
    ProfileWrapper,
} from './ProfileMenu.styled';

const ProfileMenu = ({ nameMenu, bioMenu, imageMenu }) => {
    return (
        <ProfileWrapper>
            <ProfileImage
                // src={'https://picsum.photos/200'}
                src={imageMenu}
                // alt="Profile Image"
            />
            <ProfileName>{nameMenu}</ProfileName>
            <ProfileBio>{bioMenu}</ProfileBio>
        </ProfileWrapper>
    );
};

export default ProfileMenu;
