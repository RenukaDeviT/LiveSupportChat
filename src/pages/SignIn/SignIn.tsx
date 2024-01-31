import { memo } from 'react';
import SplashLoader from 'components/templates/Loader/SplashLoader';
import SignInForm from './components/SignInForm';
import StyledSignIn from './SignIn.styles';

const SignIn = () => (
    <div>
      <SplashLoader>
        <StyledSignIn className="sign-in">
          <SignInForm />
        </StyledSignIn>
      </SplashLoader>
    </div>
  );

export default memo(SignIn);
