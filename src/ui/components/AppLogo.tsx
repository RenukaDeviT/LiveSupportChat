import { memo } from 'react';

import Logo from 'ui/assets/images/Logo.png';

type TProps = {
  className?: string;
};

const AppLogo: React.FC<TProps> = ({ className = '' }) => (
  <img src={Logo} alt="logo" className={className} />
);

export default memo(AppLogo);
