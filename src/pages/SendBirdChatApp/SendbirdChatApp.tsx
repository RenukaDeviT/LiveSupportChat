import { memo } from 'react';
import { App as SendBirdApp } from '@sendbird/uikit-react';
import "@sendbird/uikit-react/dist/index.css";
import config from 'config';
import './SendbirdChatAppStyles.css';

const SignIn = () =>  (
    <div className="SendbirdChatAppStyles">
        <SendBirdApp appId={config.appId} userId={config.userId} accessToken={config.accessToken}/>
    </div>
  );

export default memo(SignIn);
