import { StyleSheet, Image, View, Dimensions } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { IPhoto } from "@/types";

const { width } = Dimensions.get("screen");

const SlideItem = ({ photo }: { photo: IPhoto }) => {
  return (
    <View style={styles.slideItemContainer}>
      <Image
        style={styles.img}
        source={{ uri: `https://api.timbu.cloud/images/${photo.url}` }}
      />
    </View>
  );
};

const ImageSlider = ({ photos }: { photos: IPhoto[] }) => {
  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        showsPagination={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        paginationStyle={styles.paginationStyle}
      >
        {photos.map((item, index) => (
          <SlideItem key={index} photo={item} />
        ))}
      </Swiper>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: 399,
    marginTop: 15,
    width: width,
  },
  dotStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: "#0072C6",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  paginationStyle: {
    bottom: 5,
  },

  slideItemContainer: {
    overflow: "hidden",
    marginRight: 16,
    width: "100%",
    backgroundColor: "#EAEAEA66",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    // width: "61.5%",
    // height: "60.15%",
    width: "100%",
    height: "100%",
  },
});
