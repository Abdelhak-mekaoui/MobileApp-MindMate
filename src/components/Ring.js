import React from 'react';
import { View } from 'react-native';
import { theme } from '../core/theme';
import RingDay from './RingDay';

export default function Ring(props) {
  return (
    <View style={styles.ring}>       
        <View style={styles.ringLeftPart}>
            <RingDay/>
        </View>
        <View style={styles.RingRightPart}>
            <TubeDay day={'M'} />
            <TubeDay day={'Tu'} />
            <TubeDay day={'W'} />
            <TubeDay day={'Th'} />
            <TubeDay day={'F'} />
            <TubeDay day={'Sa'} />
            <TubeDay day={'Su'} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    ring: {
        backgroundColor: '#fff',
        height: '80%',
        width: '90%',
        borderRadius: 8,
        flexDirection : 'row',
    },
    ringLeftPart: {
        width : '50%',
        alignItems: 'center',
        justifyContent : 'center',
    },
    ringRightPart: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        paddingRight: 20,
    },
  });
  