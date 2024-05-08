import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { styles } from './styles';
import { colors } from '../../config/colors';


export default Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.logo}
                    source={images.logo_ripple}
                    className="w-[140px] h-[94px] mt-5"
                    resizeMode='contain'
                />
                <View style={styles.header}>
                    <Text style={styles.heading}>Good Morning, Guest!</Text>
                    <Text style={styles.subHeading}>Start planning in advance!</Text>
                </View>
                <View style={styles.dailyThoughtsWrapper}>
                    <Image
                        style={styles.bgShape1}
                        source={images.bgShape1}
                    />
                    <Image
                        style={styles.bgShape2}
                        source={images.bgShape2}
                    />
                    <Image
                        style={styles.bgShape3}
                        source={images.bgShape3}
                    />

                    <View>
                        <TouchableOpacity
                            style={[styles.cardBtn]}>
                            <Text style={styles.dailyTitle} className='text-secondary'>  Make a Schedule!</Text>
                            <Text style={styles.dailySubTitle} className='text-secondary'>Seconds | Minutes | Hours | Days!</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <View>
                        <Text style={styles.dailyTitle} className='text-secondary'>  Make a Schedule!</Text>
                        <Text style={styles.dailySubTitle} className='text-secondary'>Seconds | Minutes | Hours | Days!</Text>
                    </View> */}
                    {/* <View>
                        <Image source={images.player} />
                    </View> */}
                </View>
                <Text style={styles.recommendTitle} className="mt-2">Our latest collection!</Text>
                <View style={styles.sectionWrapper1}>
                    <View style={styles.item1}>
                        <Image
                            style={styles.basicImg}
                            source={images.star}
                        />
                        <View style={styles.cardContent}>
                            <Text style={[styles.cardTitle, { color: colors.both }]}>
                                Star & Crescent
                            </Text>
                            <Text style={[styles.cardSubTitle, { color: colors.both }]}>
                                Ramadan Collection
                            </Text>
                        </View>
                        <View style={styles.cardFooterWrapper}>
                            <View>
                                {/* <Text style={[styles.footerTitle, { color: colors.whiteShadeBg }]}>
                                    3-10 MIN
                                </Text> */}
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={[
                                        styles.cardBtn,
                                        { backgroundColor: colors.star },
                                    ]}>
                                    <Text style={styles.btnLabel}>Order now!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.item2}>
                        <Image source={images.lamp} />
                        <View style={styles.cardContent}>
                            <Text style={[styles.cardTitle, { color: colors.lamp }]}>
                                Lantern
                            </Text>
                            <Text style={[styles.cardSubTitle, { color: colors.lamp }]}>
                                Ramadan Collection
                            </Text>
                        </View>
                        <View style={styles.cardFooterWrapper}>
                            <View>
                                {/* <Text style={[styles.footerTitle, { color: colors.heading }]}>
                                    3-10 MIN
                                </Text> */}
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={[styles.cardBtn, { backgroundColor: colors.lamp }]}>
                                    <Text style={styles.btnLabel}>
                                        Order now!
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.recommendWrapper}>
                    <Text style={styles.recommendTitle}>Check out our designs!</Text>
                    <Text style={styles.titleCollection} className='font-pregular'>Classic Collection</Text>
                    <ScrollView horizontal={true}>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#81A8BF' },
                                ]}>
                                <Image
                                    source={images.waterdrop}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Waterdrop (Blue)</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Classic Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#E2E2E2' },
                                ]}>
                                <Image
                                    source={images.waterdropWhite}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Waterdrop (White)</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Classic Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#4A4A4A' },
                                ]}>
                                <Image
                                    source={images.waterdrop3}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Waterdrop (Black)</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Classic Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FF6B33' },
                                ]}>
                                <Image
                                    source={images.flower1}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Flower (Orange)</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Classic Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FE6CA1' },
                                ]}>
                                <Image
                                    source={images.flower2}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Flower (Pink)</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Classic Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FFC42F' },
                                ]}>
                                <Image
                                    source={images.duck1}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Duck (Yellow)</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Classic Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#EBEBEB' },
                                ]}>
                                <Image
                                    source={images.duck2}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Duck (White)</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Classic Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.lastbutton]}>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    { backgroundColor: colors.black },
                                ]}>
                                <Text style={styles.btnLabel}>Order now!</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <Text style={styles.titleCollection} className='font-pregular mt-6'>Hospice Collection</Text>
                    <ScrollView horizontal={true}>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#48FEFA' },
                                ]}>
                                <Image
                                    source={images.pill1}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Pill 1</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Hospice Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FF3459' },
                                ]}>
                                <Image
                                    source={images.pill2}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Pill 2</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Hospice Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FE6B33' },
                                ]}>
                                <Image
                                    source={images.pill3}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Pill 3</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Hospice Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FE3374' },
                                ]}>
                                <Image
                                    source={images.syringe}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Syringe</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Hospice Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FA9D81' },
                                ]}>
                                <Image
                                    source={images.bandage}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Bandage</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Hospice Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FF3459' },
                                ]}>
                                <Image
                                    source={images.heartbeat}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Heartbeat</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Hospice Collection
                                </Text>
                            </View>
                        </View>
                        {/* Button */}
                        <View style={[styles.lastbutton]}>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    { backgroundColor: colors.black },
                                ]}>
                                <Text style={styles.btnLabel}>Order now!</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <Text style={styles.titleCollection} className='font-pregular mt-6'>Summer Collection</Text>
                    <ScrollView horizontal={true}>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FD8933' },
                                ]}>
                                <Image
                                    source={images.sun}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Sun</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Summer Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FE6D81' },
                                ]}>
                                <Image
                                    source={images.seashell}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Seashell</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Summer Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#9BD7FB' },
                                ]}>
                                <Image
                                    source={images.cocktail}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Cocktail</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Summer Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#FD3458' },
                                ]}>
                                <Image
                                    source={images.watermelon}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Watermelon</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Summer Collection
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.recommedCard]}>
                            <View
                                style={[
                                    styles.recommednImgWrapper,
                                    { backgroundColor: '#7ACC49' },
                                ]}>
                                <Image
                                    source={images.turtle}
                                />
                            </View>
                            <View style={styles.recommendCardContentWrapper}>
                                <Text style={styles.recommentContentTitle}>Turtle</Text>
                                <Text style={styles.recommentContentSubTitle}>
                                    Summer Collection
                                </Text>
                            </View>
                        </View>

                        {/* Button */}
                        <View style={[styles.lastbutton]}>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    { backgroundColor: colors.black },
                                ]}>
                                <Text style={styles.btnLabel}>Order now!</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}