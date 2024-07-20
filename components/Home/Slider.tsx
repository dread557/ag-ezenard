import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import Swiper from "react-native-swiper";
import { IProduct } from "@/types";

const Slider = ({ products }: { products: IProduct[] }) => {
  const slideProducts = products.slice(0, 3);
  return (
    <View style={styles.container}>
      <Swiper
        loop={true}
        showsPagination={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        paginationStyle={styles.paginationStyle}
        autoplay
        autoplayTimeout={7}
      >
        {slideProducts.map((product, index) => (
          <SlideItem key={index} product={product} />
        ))}
      </Swiper>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 35,
  },
  dotStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: "white",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  paginationStyle: {
    bottom: 5,
  },
});
