import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

export default function AvailableBalance() {
    return (
        <View>


        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-red-400'>
                    <Ionicons name="restaurant" size={22} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Restaurant</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>

        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-blue-400'>
                    <MaterialIcons name="emoji-transportation" size={22} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Transport</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>

        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-orange-400'>
                    <MaterialIcons name="sports-gymnastics" size={22} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Gym</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>

        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-purple-400'>
                    <FontAwesome name="bank" size={20} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Bank</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>

        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-amber-800'>
                    <MaterialCommunityIcons name="dog-side" size={24} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Dogs</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>

        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-pink-400'>
                    <FontAwesome name="heartbeat" size={24} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Health</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>

        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-blue-400'>
                    <Ionicons name="home-sharp" size={24} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Home</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>

        <View className='w-full h-16 flex flex-row justify-between items-center p-4 rounded-lg border border-primary mb-4'>
            <View className='flex flex-row justify-between items-center'>
                <View className='rounded-full h-10 w-10 flex flex-row justify-center items-center bg-red-400'>
                    <FontAwesome name="car" size={24} color="white" />
                </View>
                <Text className='text-black text-xl ml-2'>Car</Text>
            </View>
                
            <View className='flex flex-row justify-between'>
                <Text className='text-black text-lg mr-8'>12%</Text>
                <Text className='text-black text-lg font-semibold'>L.3,000</Text>
            </View>
        </View>



        </View>
    );
    };