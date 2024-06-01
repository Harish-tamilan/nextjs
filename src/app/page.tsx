"use client";
import styled from 'styled-components';

export default function Home() {
  interface StyledTextProps {
    size?: string;
    margin?: string;
    color?: string;
    lineHeight?: string;
    weight?: string;
    width?: string;
    height?: string;
    cursor?: string;
    font?: string;
  }
  const StyledText = styled(({ size, margin, color, lineHeight, weight, width, height, cursor, font, ...rest }: StyledTextProps & React.HTMLAttributes<HTMLParagraphElement>) => <p {...rest} />)`
    font-size: ${(props) => props.size || '16px'};
    margin: ${(props) => props.margin || '0px'};
    color: ${(props) => props.color || 'black'};
    font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
    line-height: ${(props) => props.lineHeight || 'normal'};
    font-family: ${(props) => props.font || 'Roboto'};
    height: ${(props) => (props.height ? props.height : 'auto')};
    cursor: ${(props) => (props.cursor ? props.cursor : 'default')};
  `;
  return (
    <>
    <h1>Home Page</h1>
    <h1 style={{color:'blue'}}>Styled Text</h1>
  </>
  );
}
