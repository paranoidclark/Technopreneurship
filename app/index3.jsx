import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import SecondaryButton from '../components/SecondaryButton';

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[95vh] px-4">
                    <Image
                        source={images.logo_ripple}
                        className="w-[140px] h-[94px] mb-3"
                        resizeMode='contain'
                    />

                    <Image
                        source={images.onboard_3}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />

                    <View className='relative mt-5'>
                        <Text className="text-2xl text-black font-bold text-center">Tailored Just for{' '}
                            <Text className="text-secondary">You!</Text>
                        </Text>
                    </View>

                    <Text className="text-sm font-pregular text-black mt-7 text-center">Customize Ripple to match your lifestyle with{" "}
                        <Text className='text-secondary font-psemibold'>personalized alarm settings,</Text>
                        {" "}intuitive interface, and seamless integration with your daily routines.
                    </Text>

                    <CustomButton
                        title="Login to Ripple!"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles='w-full mt-7'
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-black-100 font-pregular">
                            Continue as
                        </Text>
                        <Link href='/home' className='text-lg font-psemibold text-secondary'>Guest</Link>
                    </View>
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView >
    );
}
