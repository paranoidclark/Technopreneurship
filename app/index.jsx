import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="bg-#FCECDD h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[95vh] px-4">
                    <Image
                        source={images.logo_ripple}
                        className="w-[140px] h-[94px] mb-3"
                        resizeMode='contain'
                    />

                    <Image
                        source={images.onboard_1}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />

                    <View className='relative mt-5'>
                        <Text className="text-3xl text-black font-bold text-center">Welcome to{' '}
                            <Text className="text-secondary">Ripple!</Text>
                        </Text>
                    </View>

                    <Text className="text-sm font-pregular text-black mt-7 text-center">Your personal reminder companion designed to keep you{" "}
                        <Text className='text-secondary font-psemibold'>hydrated, healthy, and on track</Text>
                        {" "}with your daily routines.
                    </Text>

                    <CustomButton
                        title="Learn More!"
                        handlePress={() => router.push('/index2')}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView >
    );
}
