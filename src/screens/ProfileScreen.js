import { useState } from 'react';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import ProfileMenu from '../components/ProfileMenu/ProfileMenu';
import { ScreenContainer } from './ProfileScreen.styled';

function ProfileScreen() {
    // INPUTS CONTROLADOS | 4 PASSOS:
    // 1. CRIAR OS ESTADOS PARA CADA INPUT
    // 2. CRIAR AS FUNÇÕES QUE IRÃO MUDAR OS ESTADOS A PARTIR DE UM ONCLICK
    // 3. CRIAR UM ONCHANGE PARA CADA INPUT E PASSAR PARA DENTRO DELAS A FUNÇÃO QUE FAZ AS MUDANÇAS SETANDO O ESTADO
    // 4. O VALUE DE CADA INPUT SERA O VALOR DO ESTADO
    // ------------------------------------------
    // 1 [x]:
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');
    // 2 [x]:
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleBioChange = (event) => {
        setBio(event.target.value);
    };
    const handleImageChange = (event) => {
        setImage(event.target.value);
    };
    // 3 [x] e 4 [x]:

    return (
        <ScreenContainer>
            <ProfileMenu name={name} bio={bio} image={image} />

            <ProfileForm
                name={name}
                bio={bio}
                image={image}
                handleNameChange={handleNameChange}
                handleBioChange={handleBioChange}
                handleImageChange={handleImageChange}
            />
        </ScreenContainer>
    );
}

export default ProfileScreen;
