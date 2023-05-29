import {
    Button,
    Form,
    FormWrapper,
    Input,
    InputWrapper,
    Label,
} from './ProfileForm.styled';

const ProfileForm = ({
    name,
    bio,
    image,
    handleNameChange,
    handleBioChange,
    handleImageChange,
}) => {
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
                        onChange={handleNameChange}
                        value={name}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                        type="text"
                        name="bio"
                        id="bio"
                        autoComplete="off"
                        onChange={handleBioChange}
                        value={bio}
                    />
                </InputWrapper>

                <InputWrapper>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        autoComplete="off"
                        onChange={handleImageChange}
                        value={image}
                    />
                </InputWrapper>

                <Button>Save Changes</Button>
            </Form>
        </FormWrapper>
    );
};

export default ProfileForm;
