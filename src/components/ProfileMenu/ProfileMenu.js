import {
    ProfileBio,
    ProfileImage,
    ProfileName,
    ProfileWrapper,
} from './ProfileMenu.styled';

const ProfileMenu = ({ name, bio, image }) => {
    return (
        <ProfileWrapper>
            <ProfileImage
                // src={'https://picsum.photos/200'}
                src={image}
                // alt="Profile Image"
            />
            <ProfileName>{name}</ProfileName>
            <ProfileBio>{bio}</ProfileBio>
        </ProfileWrapper>
    );
};

export default ProfileMenu;
