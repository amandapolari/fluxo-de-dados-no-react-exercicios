import {
    Button,
    Form,
    FormWrapper,
    Input,
    InputWrapper,
    Label,
} from './ProfileForm.styled';

const ProfileForm = ({
    captureTypingInputName,
    captureTypingInputBio,
    captureTypingInputImage,
    submitInformation,
}) => {
    return (
        <FormWrapper>
            <h1>Edit your profile</h1>

            <Form>
                <InputWrapper>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        Typing="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        onChange={captureTypingInputName}
                    />
                </InputWrapper>

                <InputWrapper>
                    {/* Testando input */}
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                        type="text"
                        name="bio"
                        id="bio"
                        autoComplete="off"
                        onChange={captureTypingInputBio}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        autoComplete="off"
                        onChange={captureTypingInputImage}
                    />
                </InputWrapper>

                <Button onClick={submitInformation}>Save Changes</Button>
            </Form>
        </FormWrapper>
    );
};

export default ProfileForm;
