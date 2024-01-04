export const envTypes = {
    dev: 'development',
    prod: 'production',
    stage: 'staging',
  };
  
  // const envType = process.env.REACT_APP_ENV || envTypes.dev;

    const userId = process.env.REACT_APP_USER_ID ?? '';
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN ?? '';
    const appId = process.env.REACT_APP_API_SB_ID ?? '';

    const config = {
        accessToken: `${accessToken}`,
        userId: `${userId}`,
        appId: `${appId}`
      };
      
      export default config;  