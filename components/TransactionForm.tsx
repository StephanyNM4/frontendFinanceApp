import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Categories from './../components/TransactionForm/Categories';
import TransactionTypeSelector from './../components/TransactionForm/TransactionTypeSelector';

export default function TransactionForm({ onSubmit }: Readonly<{ onSubmit: (data: any) => void }>) {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState<'income' | 'expense'>('income');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        onSubmit({ amount: parseFloat(amount), type, category});
    };

    return (
        <View className="p-6">
            
            <View className='flex flex-row justify-center'>
                <Text className='text-primary text-2xl m-8'>Create a new transaction</Text>
            </View>


            <Text className="mb-2 text-lg font-semibold">Amount</Text>
            <TextInput
                className="border border-gray-300 rounded p-4 mb-8 text-lg font-medium"
                placeholder="0.00"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />

            <TransactionTypeSelector type={type} setType={setType} />

            <Categories type={type} category={category} setCategory={setCategory} />
            
                <Pressable onPress={handleSubmit}
                className={'px-4 py-2 w-full '}>
                    <Text className="h-10 shadow-custom text-primary bg-tertiary active:text-white active:bg-primary my-4 w-1/2 rounded ml-24 p-2 text-center text-xl font-semibold">Add</Text>
                </Pressable>


        </View>
    );
}
