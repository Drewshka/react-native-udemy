import '../_mockLocation';
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from 'react-navigation';
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation} = useContext(LocationContext);
  // const [err] = useLocation((location) => addLocation(location));
  const [err] = useLocation(isFocused, addLocation);

// console.log(isFocused);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {/* <NavigationEvents onWillBlur={() => console.log('Leaving')} /> */}
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
