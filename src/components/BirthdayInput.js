import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DatePickerAndroid, Platform } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';
import DatePickerIOS from 'react-native-datepicker';

const BirthdayInput = ({ value, onChange, errorText, description }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value);

  const openDatePicker = async () => {
    if (Platform.OS === 'android') {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: selectedDate || new Date(),
        });

        if (action !== DatePickerAndroid.dismissedAction) {
          const newDate = new Date(year, month, day);
          setSelectedDate(newDate);
          onChange(newDate);
        }
      } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
      }
    } else if (Platform.OS === 'ios') {
      setShowPicker(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDatePicker}>
        <Input
          style={styles.input}
          selectionColor={theme.colors.primary}
          underlineColor="transparent"
          mode="outlined"
          label="Birthday"
          value={selectedDate ? selectedDate.toDateString() : ''}
          editable={false}
        />
      </TouchableOpacity>
      {description && !errorText ? <Text style={styles.description}>{description}</Text> : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      {showPicker && Platform.OS === 'ios' && (
        <DatePickerIOS
          date={selectedDate || new Date()}
          onDateChange={date => {
            setSelectedDate(date);
            onChange(date);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});

export default BirthdayInput;
