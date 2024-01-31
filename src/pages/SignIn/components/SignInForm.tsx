import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { signInValidationSchema } from 'utils/validation/validation';
import { routePaths } from 'utils/constants';
import { VisibilityIcon, VisibilityOffIcon, WarningIcon } from 'ui/assets/icons';
import useAppContext from 'utils/hooks/useAppContext';
import config from 'config';

const SignInForm = () => {
    const navigate = useNavigate();
    const { setIsLoading } = useAppContext();
    const [error, setError] = useState<string | null>(null);

    const {
        values,
        errors,
        touched,
        // isSubmitting,
        setFieldValue,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
          username: '',
          password: '',
          showPassword: false,
        },
        validationSchema: signInValidationSchema,
        onSubmit: async ({ username, password }) => {
            try {
              setIsLoading(true);
              setError(null);
              // user check
                if(username === config.userId && password === config.accessToken)
                {
                    navigate(routePaths.supportChat);
                }
                else
                {                    
                    setError('Please enter the correct username/password.');
                }
            } catch (err) {
                setError('Please enter the correct username/password.');
            } finally {
              setIsLoading(false);
            }
          },
    });

    const handleToggleFieldValue = (name: string, newValue: boolean) => {
        setFieldValue(name, newValue);
      };

    const onChangePassHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(null);
        console.log(e.target.value);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(null);
        console.log(e.target.value);
    };

    // const isButtonDisabled = useMemo(
        // () => !(values.username && values.password) || isSubmitting,
        // [isSubmitting, values.username, values.password],
      // );

    return (
    <div className="sign-in-wrapper">
    <div className="sign-in-container">
      <h1 className="sign-in-title">Welcome back</h1>
      <p
        className={
          error
            ? 'sign-in-subtitle sign-in-subtitle--error'
            : 'sign-in-subtitle'
        }
      >
        Enter username and password to sign in
      </p>
      {error && <div className="sign-in-error">{error}</div>}
      <form onSubmit={handleSubmit} className="sign-in__form">
        <p className="sign-in__form-field-name">USERNAME</p>
        <TextField
          className="sign-in__form-textfield sign-in__form-email"
          type="username"
          name="username"
          value={values.username}
          placeholder="Enter username"
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!(touched.username && errors.username) ? null : (
                  <WarningIcon />
                )}
              </InputAdornment>
            ),
          }}
          onChange={e => {handleChange(e); onChangeHandler(e)}}
          error={Boolean(touched.username && errors.username)}
          helperText={touched.username && errors.username}
        />
        <p className="sign-in__form-field-name">PASSWORD</p>
        <TextField
          autoComplete="off"
          className="sign-in__form-textfield sign-in__form-password"
          type={values.showPassword ? 'text' : 'password'}
          name="password"
          value={values.password}
          placeholder="Enter password"
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!(touched.password && errors.password) ? (
                  <IconButton
                    className="sign-in__form-icon-button"
                    aria-label="toggle password visibility"
                    edge="end"
                    type="button"
                    onClick={() =>
                      handleToggleFieldValue(
                        'showPassword',
                        !values.showPassword,
                      )
                    }
                  >
                    {values.showPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                ) : (
                  <WarningIcon />
                )}
              </InputAdornment>
            ),
          }}
          onChange={e => {handleChange(e); onChangePassHandler(e)}}
          error={Boolean(touched.password && errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button
          type="submit"
          className="sign-in__form-login-button"
        >
          Log in
        </Button>
      </form>
    </div>
  </div>
    );
};
export default memo(SignInForm);