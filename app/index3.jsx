import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import SecondaryButton from '../components/SecondaryButton';

export default function App() {
    return (
        <SafeAreaView className="bg-#FCECDD h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[95vh] px-4">
                    <Image
                        source={images.logo_ripple}
                        className="w-[130px] h-[84px] mb-3"
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
                    <SecondaryButton
                        title="Make a Schedule!"
                        handlePress={() => router.push('/home')}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView >
    );
}
