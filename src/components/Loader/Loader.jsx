import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Spinner = () => {
  return <Loader type="Rings" color="#00BFFF" height={80} width={80} timeout={3000} />;
};
