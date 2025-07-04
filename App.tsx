import {PrivyProvider} from '@privy-io/expo';
import { View } from 'react-native';

export default function App() {
  return (
    // You need to add the appId and clientId here.
    <PrivyProvider appId="xxxxxx" clientId="client-xxxxxx">
      <View />
    </PrivyProvider>
  );
}