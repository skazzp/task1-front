import {
  Button,
  Container,
  Form,
  FormContainer,
  Input,
  Label,
  Textarea,
  Title,
} from './FeedbackForm.styled';

const FeedbackForm = () => {
  const handleChange = () => {};
  const handleFormSubmit = () => {};
  return (
    <Container>
      <FormContainer>
        <Title>Reach out to us!</Title>
        <Form action="submit" onSubmit={handleFormSubmit}>
          <Label htmlFor="name"> </Label>
          <Input
            type="text"
            name="name"
            //   value={}
            placeholder="Your name*"
            onChange={handleChange}
            required
          />

          <Label htmlFor="number">
            <Input
              type="email"
              name="email"
              //   value={}
              placeholder="Your e-mail*"
              onChange={handleChange}
              required
            />
          </Label>
          <Label htmlFor="message">
            <Textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Your message*"
              onChange={handleChange}
              required
            />
          </Label>
          <Button type="submit">Send message</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default FeedbackForm;
