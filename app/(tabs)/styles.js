import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';
export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
        backgroundColor: '#FCECDD',
    },
    logo: {
        alignSelf: 'center',
        marginTop: 10,
    },
    header: {},
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
    },
    subHeading: {
        fontSize: 20,
        fontWeight: '300',
        marginTop: 10,
    },
    sectionWrapper1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item1: {
        backgroundColor: '#111',
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    item2: {
        backgroundColor: '#111',
        flex: 1,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    basicImg: {
        alignSelf: 'flex-end',
        paddingLeft: 10
    },
    cardContent: {
        position: 'absolute',
        top: '35%',
        padding: 15,
        marginTop: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardSubTitle: {
        marginTop: 10,
        fontSize: 11,
    },
    cardFooterWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: '0%',
        alignItems: 'center',
    },
    footerTitle: {
        fontSize: 11,
    },
    cardBtn: {
        borderRadius: 50,
    },
    btnLabel: {
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        color: 'white',
    },
    dailyThoughtsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.darkBg,
        alignItems: 'center',
        height: 95,
        borderRadius: 10,
        marginTop: 20,
    },
    bgShape1: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    bgShape2: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    bgShape3: {
        position: 'absolute',
        right: '40%',
        bottom: 0,
    },
    dailyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dailySubTitle: {
        fontSize: 11,
    },
    recommendWrapper: {
        marginTop: 30,
    },
    titleCollection: {
        fontSize: 18,
        color: colors.heading,
        marginBottom: 10,
    },
    recommendTitle: {
        fontSize: 24,
        color: colors.heading,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    recommedCard: {
        borderRadius: 10,
        width: 160,
        marginRight: 20,
    },
    recommednImgWrapper: {},
    recommentContentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5,
    },
    recommentContentSubTitle: {
        fontSize: 11,
        color: colors.gray,
    },
    lastbutton: {
        alignSelf: 'center',
        marginBottom: 50,
    },
});