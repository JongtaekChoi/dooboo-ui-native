import {TouchableOpacity, View, ViewStyle} from 'react-native';

import React from 'react';
import styled from '@emotion/native';

const SelectedDate = styled.View`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 12px;
`;

const DateText = styled.Text`
  font-size: 12px;
  color: #565656;
`;

const DateRow = styled.View`
  width: 100%;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

interface Props {
  onPress?: (date: Date) => void;
  style?: ViewStyle;
  date: Date;
  isCurMonth?: boolean;
  isToday?: boolean;
}

function CalendarDate(props: Props): React.ReactElement {
  const dateColor = props.date.getDay() === 0 ? 'red' : 'black';
  const dateOpacity = props.isCurMonth ? 1 : 0.2;

  const todayStyle = props.isToday
    ? {borderRadius: 16, backgroundColor: '#efefef'}
    : {borderRadius: 0, backgroundColor: 'white'};

  return (
    <TouchableOpacity
      onPress={(): void => {
        props.onPress?.(props.date);
      }}>
      <View style={{...props.style}}>
        <DateRow
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SelectedDate style={{opacity: dateOpacity, ...todayStyle}} />
          <DateText
            style={{
              alignSelf: 'center',
              color: dateColor,
              opacity: dateOpacity,
            }}>
            {props.date.getDate()}
          </DateText>
        </DateRow>
      </View>
    </TouchableOpacity>
  );
}

export default CalendarDate;
