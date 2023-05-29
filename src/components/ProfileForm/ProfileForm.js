import {
    Button,
    Form,
    FormWrapper,
    Input,
    InputWrapper,
    Label,
} from './ProfileForm.styled';

const ProfileForm = () => {
    // INPUTS CONTROLADOS | 3 PASSOS:
    // 1. CRIAR OS ESTADOS PARA CADA INPUT
    // 2. CRIAR AS FUNÇÕES QUE IRÃO MUDAR OS ESTADOS A PARTIR DE UM ONCLICK
    // 3. CRIAR UM ONCHANGE PARA CADA INPUT E PASSAR PARA DENTRO DELAS A FUNÇÃO QUE FAZ AS MUDANÇAS SETANDO O ESTADO
    // 4. O VALUE DE CADA INPUT SERA O VALOR DO ESTADO
    // ------------------------------------------

    return (
        <FormWrapper>
            <h1>Edit your profile</h1>

            <Form>
                <InputWrapper>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor="bio">Bio</Label>
                    <Input type="text" name="bio" id="bio" autoComplete="off" />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        autoComplete="off"
                    />
                </InputWrapper>

                <Button>Save Changes</Button>
            </Form>
        </FormWrapper>
    );
};

export default ProfileForm;
