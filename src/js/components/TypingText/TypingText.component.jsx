import styled from 'styled-components';
import typingDefault from './TypingText.component.default';
import Message from '../../styles/Message.style';
import Li from './Li';

const P = styled.p`
    margin: 0;
`;

export const TypingParagraph = typingDefault(P);

export const TypingMessage = typingDefault(Message);

export const TypingLi = typingDefault(Li);
