import { Pressable, Text, View } from 'react-native';

export default function TransactionTypeSelector({ type, setType }: Readonly<{ type: string, setType: (val: any) => void }>) {
    return (
        <View className="flex-row justify-around my-4 mb-8">
        {['Income', 'Expense'].map((t) => (
            <Pressable
            key={t}
            onPress={() => setType(t as 'Income' | 'Expense')}
            className={`px-4 py-2 rounded ${type === t ? 'bg-green-600' : 'bg-gray-300'}`}
            >
            <Text className="text-white font-semibold text-xl">{t}</Text>
            </Pressable>
        ))}
        </View>
    );
}
