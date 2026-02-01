import React, { Suspense } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Federated } from '@callstack/repack/client';

const MiniApp = React.lazy(() => 
  Federated.importModule('mini-app', './App')
);

const MiniAppLoader = () => {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
      <MiniApp />
    </Suspense>
  );
};

export default MiniAppLoader;
