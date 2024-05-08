import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../config/colors';
import { images } from '../../constants';

import { styles } from './styles';
export const Home = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={images.logo_ripple}
            />
            <View style={styles.header}>
                <Text style={styles.heading}>Good Morning, Afsar</Text>
                <Text style={styles.subHeading}>We Wish you have a good day</Text>
            </View>
            <View style={styles.sectionWrapper1}>
                <View style={styles.item1}>
                    <Image
                        style={styles.basicImg}
                        source={images.onboard_1}
                    />
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, { color: colors.whiteShade }]}>
                            Basic
                        </Text>
                        <Text style={[styles.cardSubTitle, { color: colors.whiteShade }]}>
                            COURSE
                        </Text>
                    </View>
                    <View style={styles.cardFooterWrapper}>
                        <View>
                            <Text style={[styles.footerTitle, { color: colors.whiteShadeBg }]}>
                                3-10 MIN
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[
                                    styles.cardBtn,
                                    { backgroundColor: colors.whiteShadeBg },
                                ]}>
                                <Text style={styles.btnLabel}>START</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.item2}>
                    <Image source={images.onboard_2} />
                    <View style={styles.cardContent}>
                        <Text style={[styles.cardTitle, { color: colors.heading }]}>
                            Relaxation
                        </Text>
                        <Text style={[styles.cardSubTitle, { color: colors.heading }]}>
                            MUSIC
                        </Text>
                    </View>
                    <View style={styles.cardFooterWrapper}>
                        <View>
                            <Text style={[styles.footerTitle, { color: colors.heading }]}>
                                3-10 MIN
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[styles.cardBtn, { backgroundColor: colors.heading }]}>
                                <Text style={[styles.btnLabel, { color: colors.whiteShadeBg }]}>
                                    START
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
                    <Text style={styles.dailyTitle}>Daily Thought</Text>
                    <Text style={styles.dailySubTitle}>MEDITATION - 3-10 MIN</Text>
                </View>
                {/* <View>
                    <Image source={require('../../../assets/images/player.png')} />
                </View> */}
            </View>
            <View style={styles.recommendWrapper}>
                <Text style={styles.recommendTitle}>Recomended for you</Text>
                <ScrollView horizontal={true}>
                    <View style={[styles.recommedCard]}>
                        <View
                            style={[
                                styles.recommednImgWrapper,
                                { backgroundColor: '#afdbc5' },
                            ]}>
                            <Image
                                source={images.onboard_1}
                            />
                        </View>
                        <View style={styles.recommendCardContentWrapper}>
                            <Text style={styles.recommentContentTitle}>Focus</Text>
                            <Text style={styles.recommentContentSubTitle}>
                                MEDITATION - 3-10 MIN
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.recommedCard]}>
                        <View
                            style={[
                                styles.recommednImgWrapper,
                                { backgroundColor: '#fcdea5' },
                            ]}>
                            <Image
                                source={images.onboard_2}
                            />
                        </View>
                        <View style={styles.recommendCardContentWrapper}>
                            <Text style={styles.recommentContentTitle}>Happiness</Text>
                            <Text style={styles.recommentContentSubTitle}>
                                MEDITATION - 3-10 MIN
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.recommedCard]}>
                        <View
                            style={[
                                styles.recommednImgWrapper,
                                { backgroundColor: '#afdbc5' },
                            ]}>
                            <Image
                                source={images.onboard_3}
                            />
                        </View>
                        <View style={styles.recommendCardContentWrapper}>
                            <Text style={styles.recommentContentTitle}>Focus</Text>
                            <Text style={styles.recommentContentSubTitle}>
                                MEDITATION - 3-10 MIN
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};