import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, View } from 'react-native';

export default function DashboardButton() {
    return (
        <View className='w-full h-28 flex flex-row bg-tertiary rounded-lg mt-8'>/
        
            <View className='w-1/2 bg-secondary p-6 rounded-xl'>
                
                <View className='w-full flex flex-row'>
                    <FontAwesome5 name="balance-scale-left" size={22} color="white" />

                    <View className='flex-1 items-center justify-center'>
                        <Text className='text-white font-bold text-xl'>Expenses</Text>
                    </View>
                </View>
                
                

                <View className='flex-1 items-center justify-center pt-2'>
                    <Text className='text-white font-medium text-2xl'>L.100000</Text>
                </View>

            </View>

            <View className='w-1/2 p-6'>
                
                <View className='w-full flex flex-row'>
                    <FontAwesome5 name="balance-scale" size={22} color="white" />

                    <View className='flex-1 items-center justify-center'>
                        <Text className='text-white font-bold text-xl'>Incomes</Text>
                    </View>
                </View>
                
                

                <View className='flex-1 items-center justify-center pt-2'>
                    <Text className='text-white font-medium text-2xl'>L.50000</Text>
                </View>

            </View>
        </View>

        
    );
    };
