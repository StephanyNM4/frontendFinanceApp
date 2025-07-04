import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Pressable, Text, View } from 'react-native';

type Props = {
  selected: 'expenses' | 'incomes';
  onSelectType: (type: 'expenses' | 'incomes') => void;
};

export default function DashboardButton({ selected, onSelectType }: Props) {
    return (
        <View className='w-full h-24 flex flex-row bg-tertiary rounded-lg'>
        
        <Pressable
            onPress={() => onSelectType("expenses")}
            className={`w-1/2 p-4 rounded-xl ${selected === "expenses" ? "bg-secondary" : ""}`}
        >
            <View className='flex flex-row items-center'>
            <FontAwesome5 name="balance-scale-left" size={20} color="white" />
            <Text className='text-white font-bold text-xl ml-2'>Expenses</Text>
            </View>
            <Text className='text-white text-2xl pt-2 text-center'>L.100000</Text>
        </Pressable>

        <Pressable
            onPress={() => onSelectType("incomes")}
            className={`w-1/2 p-4 rounded-xl ${selected === "incomes" ? "bg-secondary" : ""}`}
        >
            <View className='flex flex-row items-center'>
            <FontAwesome5 name="balance-scale" size={20} color="white" />
            <Text className='text-white font-bold text-xl ml-2'>Incomes</Text>
            </View>
            <Text className='text-white text-2xl pt-2 text-center'>L.50000</Text>
        </Pressable>

        </View>
    );
}