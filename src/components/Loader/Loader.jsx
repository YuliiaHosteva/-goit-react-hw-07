import { Audio } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css'


const Loader = () => {
return (
<div className={css.loader}>
<Audio
  height="80"
  width="80"
  radius="9"
  color="rgb(54, 91, 93)"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
</div>
);
}

export default Loader;