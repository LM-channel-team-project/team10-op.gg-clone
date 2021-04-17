import * as S from './styles';

interface HoverContainerProps {
  children: JSX.Element;
  title?: string;
  text: string;
  intervalTop?: string;
  intervalLeft?: string;
}
const HoverContainer = ({
  children,
  title,
  text,
  intervalTop,
  intervalLeft,
}: HoverContainerProps) => {
  return (
    <S.Container>
      <S.HoverContent left={intervalLeft} top={intervalTop}>
        {title && <p className="title">{title}</p>}
        <p className="text">{text}</p>
      </S.HoverContent>
      {children}
    </S.Container>
  );
};

export default HoverContainer;
