import { useState } from 'react';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import ProfileMenu from '../components/ProfileMenu/ProfileMenu';
import { ScreenContainer } from './ProfileScreen.styled';

function ProfileScreen() {
    // ESTADOS DO MENU:
    const [nameMenu, setNameMenu] = useState('Astrodev');
    const [bioMenu, setBioMenu] = useState('Dev Full Stack');
    const [imageMenu, setImageMenu] = useState('https://picsum.photos/200');

    // ESTADOS DE ARMAZENAMENTO:
    const [storageName, SetStorageName] = useState('');
    const [storageBio, SetStorageBio] = useState('');
    const [storageImage, SetStorageImage] = useState('');

    // FUNÇÕES QUE MUDAM OS ESTADOS DE ARMAZENAMENTO:
    const captureTypingInputName = (event) => {
        SetStorageName(event.target.value);
    };

    const captureTypingInputBio = (event) => {
        SetStorageBio(event.target.value);
    };

    const captureTypingInputImage = (event) => {
        SetStorageImage(event.target.value);
    };

    // FUNÇÃO DO BOTÃO QUE VAI APLICAR AS MUDANÇAS DE ESTADO DE ARMAZENAMENTO NOS ESTADOS DO MENU:
    const submitInformation = (event) => {
        event.preventDefault();
        setNameMenu(storageName);
        setBioMenu(storageBio);
        setImageMenu(storageImage);
    };

    return (
        <ScreenContainer>
            <ProfileMenu
                nameMenu={nameMenu}
                bioMenu={bioMenu}
                imageMenu={imageMenu}
            />

            <ProfileForm
                captureTypingInputName={captureTypingInputName}
                captureTypingInputBio={captureTypingInputBio}
                captureTypingInputImage={captureTypingInputImage}
                submitInformation={submitInformation}
            />
        </ScreenContainer>
    );
}

export default ProfileScreen;
