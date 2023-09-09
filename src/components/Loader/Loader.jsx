import { ColorRing } from 'react-loader-spinner';
import { StyledLoaderWrapp } from './Loader.styled';
export const Loader = () => {
  return (
    <StyledLoaderWrapp>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#2E86C1', '#5DADE2', '#FDF608', '#2980B9 ', '#2980B9 ']}
      />
    </StyledLoaderWrapp>
  );
};
