import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import "../../global.css";


export default function Index() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-black-500'>Home screen</Text>
      <Link href="/transactions" className='text-lg text-black'>
        Go to transaction screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
