import { useDispatch, useSelector } from 'react-redux';
import { createFeedback } from '../../redux/feedback/feedbackOperations';
import { selectEmail, selectMessage, selectName } from '../../redux/feedback/feedbackSelectors';
import { changeFormValues } from '../../redux/feedback/feedbackSlice';
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
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const message = useSelector(selectMessage);
  const handleChange = e => {
    // console.log(e.target.name, e.target.value);
    dispatch(changeFormValues({ name: e.target.name, value: e.target.value }));
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(createFeedback({ name, email, message }));
  };

  return (
    <Container>
      <FormContainer>
        <Title>Reach out to us!</Title>
        <Form action="submit" onSubmit={handleFormSubmit}>
          <Label htmlFor="name"> </Label>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Your name*"
            onChange={handleChange}
            required
          />

          <Label htmlFor="number">
            <Input
              type="email"
              name="email"
              value={email}
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
              value={message}
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
