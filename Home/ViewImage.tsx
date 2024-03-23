import React, { useEffect } from "react";
import Animated from "react-native-reanimated";
const ViewImage = ({navigation,route}:any) => {
  return (
      <Animated.View sharedTransitionTag={`view`}>
        <Animated.Image
            source={{uri:route?.params?.imageSource}}
            sharedTransitionTag={`image${route?.params?.key}`}
            style={{height:'100%',width:"100%"}}
        />
        </Animated.View>
  )
}
export default ViewImage;

