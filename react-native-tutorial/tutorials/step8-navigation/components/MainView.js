import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import axios from "axios";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

const MainView = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // Call fetch as usual
      const res = await fetch(`https://api-shoptori.herokuapp.com/products`);

      // Pull out the data as usual
      const json = await res.json();
      // Save the posts into state
      // (look at the Network tab to see why the path is like this)
      setPosts(json);
    }
    fetchData();
  });

  function searchBy(text) {
    axios
      .get("https://api-shoptori.herokuapp.com/products/" + text)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  const {
    productDate,
    container,
    iconStyle,
    body,
    productContainer,
    textInput,
    warpperSearch,
    productName,
    productPrice,
  } = styles;
  return (
    <View style={container}>
      <View style={warpperSearch}>
        <TextInput
          placeholder="What do you want?"
          style={textInput}
          onChangeText={(text) => setText(text)}
          onSubmitEditing={() => searchBy(text)}
        />
      </View>
      <View style={body}>
        {data == null
          ? posts.map((e) => (
              <View style={productContainer} key={e.id}>
                <Swiper>
                  {e.image.map((image, index) => (
                    <Image style={iconStyle} source={{ uri: `${image}` }} key={index} />
                  ))}
                </Swiper>
                <TouchableOpacity onPress={() => this.gotoDetail(e)}>
                  <Text style={productPrice}>{e.title}</Text>
                  <Text style={productPrice}>{e.category}</Text>
                  <Text style={productPrice}>{e.location}</Text>
                  <Text style={productDate}>{e.dataOfPosting}</Text>
                  <Text style={productPrice}>{e.delivery}</Text>
                  <Text style={productPrice}>{e.price}</Text>
                </TouchableOpacity>
              </View>
            ))
          : data.map((e) => (
              <View style={productContainer} key={e.id}>
                <Swiper>
                  {e.image.map((image, index) => (
                    <Image style={iconStyle} source={{ uri: `${image}` }} key={index}/>
                  ))}
                </Swiper>
                <TouchableOpacity onPress={() => this.gotoDetail(e)}>
                  <Text style={productPrice}>{e.title}</Text>
                  <Text style={productPrice}>{e.category}</Text>
                  <Text style={productPrice}>{e.location}</Text>
                  <Text style={productDate}>{e.dataOfPosting}</Text>
                  <Text style={productPrice}>{e.delivery}</Text>
                  <Text style={productPrice}>{e.price}</Text>
                </TouchableOpacity>
              </View>
            ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 0,
  },
  titleContainer: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  iconStyle: {
    width: 300,
    height: 200,
  },
  textStyle: {
    fontSize: 30,
    color: "#AFAEAF",
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  productContainer: {
    width: 180,
    height: 250,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  title: {
    color: "#AFAEAF",
    fontSize: 30,
  },
  productName: {
    marginTop: 5,
    paddingLeft: 10,
  },
  productPrice: {
    paddingLeft: 10,
    color: "#662F90",
    marginBottom: 5,
  },
  productDate: {
    paddingLeft: 10,
    fontSize: 12,
    marginBottom: 5,
  },
  textInput: {
    height: height / 23,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    width: width / 1.05,
    borderColor: "red",
  },
  warpperSearch: { flexDirection: "row", paddingBottom: 10 },
  wapper: { height: height / 7, backgroundColor: "#FFA500", padding: 10 },
});

export default MainView;
