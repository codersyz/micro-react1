import { registerMicroApps, start } from 'qiankun';
import React from 'react';
import { useEffectOnce } from 'react-use';
import microAppConfig from './micro-app-config';
import { initGlobalState } from 'qiankun';

const MicroApps = ({ apiPrefix = '' }) => {
  useEffectOnce(() => {
    window.setTimeout(() => {
      start();
      const actions = initGlobalState({});
      registerMicroApps(microAppConfig, {
        async afterMount() {
          actions.setGlobalState({ apiPrefix });
        },
      });
    }, 300);
  });

  return <div id='micro-app-container' />;
};

export default MicroApps;
