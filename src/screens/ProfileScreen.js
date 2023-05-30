import { useState } from 'react';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import ProfileMenu from '../components/ProfileMenu/ProfileMenu';
import { ScreenContainer } from './ProfileScreen.styled';

function ProfileScreen() {
    // ESTADOS FORM:
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
        SetStorageName(event.target.value);
    };
    const handleBioChange = (event) => {
        setBio(event.target.value);
        SetStorageBio(event.target.value);
    };
    const handleImageChange = (event) => {
        setImage(event.target.value);
        SetStorageImage(event.target.value);
    };

    // ESTADOS DO MENU:
    const [nameMenu, setNameMenu] = useState('Astrodev');
    const [bioMenu, setBioMenu] = useState('Dev Full Stack');
    const [imageMenu, setImageMenu] = useState('https://picsum.photos/200');

    // ESTADOS DE ARMAZENAMENTO:
    const [storageName, SetStorageName] = useState('');
    const [storageBio, SetStorageBio] = useState('');
    const [storageImage, SetStorageImage] = useState('');

    // FUNÇÃO DO BOTÃO QUE VAI APLICAR AS MUDANÇAS DE ESTADO DE ARMAZENAMENTO NOS ESTADOS DO MENU:
    const submitInformation = (event) => {
        event.preventDefault();
        setNameMenu(storageName);
        setBioMenu(storageBio);
        setImageMenu(storageImage);
        setName('');
        setBio('');
        setImage('');
    };

    return (
        <ScreenContainer>
            <ProfileMenu
                nameMenu={nameMenu}
                bioMenu={bioMenu}
                imageMenu={imageMenu}
            />

            <ProfileForm
                name={name}
                bio={bio}
                image={image}
                handleNameChange={handleNameChange}
                handleBioChange={handleBioChange}
                handleImageChange={handleImageChange}
                submitInformation={submitInformation}
            />
        </ScreenContainer>
    );
}

export default ProfileScreen;
