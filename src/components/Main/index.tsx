import * as S from './styles'

const Main = ({
  title = 'ATP NextJS - Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para um tela com código."
    />
  </S.Wrapper>
)

export default Main
