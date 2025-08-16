import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

export default function Login() {
  const [phone, setPhone] = useState("");
  const windowWidth = useWindowDimensions().width;
  console.log(windowWidth);
  const handlePress = () => {
    Alert.alert("continue", phone, [
      {
        text: "cancel",
        onPress: () => console.log("cancel pressed"),
      },
      {
        text: "ok",
        onPress: () => console.log("ok pressed"),
      },
    ]);
  };
  return (
    <>
      <View
        style={[
          styles.loginContainer,
          { width: windowWidth > 700 ? 1000 : "auto" },
        ]}
      >
        <ScrollView>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/2148672887/photo/beef-patty-burger-with-vegetables-and-lettuce-on-white-background-file-contains-clipping-path.jpg?s=612x612&w=0&k=20&c=9HnGNZAv4PEvexEE6J4KIBNJFP_jK_qJ69fHt_sV7jU=",
            }}
            style={{ width: 300, height: 300 }}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.welcomeText}>WelCome!</Text>
          </View>
          <View>
            <Text style={styles.welcomeSubText}>Welcome to my Food App</Text>
          </View>

          <View style={{ paddingVertical: 24 }}>
            <View style={styles.socialBtnContainer}>
              <View>
                <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
                  <View style={styles.socialBtn}>
                    <Image
                      source={{
                        uri: "data:image/png;base64,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",
                      }}
                      style={{ width: 50, height: 50, borderRadius: 12 }}
                      resizeMode="contain"
                    />
                    <Text style={styles.socialBtnText}>Google</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
                  <View style={styles.socialBtn}>
                    <Image
                      source={{
                        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAAe1BMVEX///8AgP8AfP8Aef8Afv8AcP9Ulf/s9f8Adv/y+P/U5/94qf+Etf8Ac//L4f8wkP9El//d7P+/1/+gxf+ny//5/P9yrf9Djv/m8f9np/9Qkv+z0f9hm/8fhf/V5P+UvP8siv8AbP9Vnf/F3P+4zv9moP8AaP+VuP+Isf/wFlvVAAAFv0lEQVR4nO2ce3eiPBCHzUUBby0goiJK5XX1+3/CF+1ul0pgMpAL3ZPfXz1Hy8ljkmEymZnJxMnJycnJycnJycnpn5IXnsooy/57KIvKU+jZHhFOwSmL74vLoSCU+ZUYJcXhsrjH2SmwPTY5hZvtMc05Y5RzTn6r+pMyxvP0uN2EtkcIyYtnOaH0a/Cv4pSSfBaPeGUl0bvvt46/RuL771Fie7QiJbuYTClM8Ck6JfFubBzJ6UxWEpNQm44VOZ9GhXG6FTLr6HVVFbeT7ZF/KVimDI3wxGDpciQ2tzxQ6b3wKkoPpe3xVwq2/Wbh72xsrU9GWayGIDy0KuxORhBTNpSBEEZji5MRLnBmtU18tbDmi6yPvgqEh/zj2g5DlCpYSn/EUisbo8x7G1aRaG6BImJKGSoKFplnULKl6+KmKaL+L+l2UWqUYs01MFQU3KCNClXapbpYaux9EVw1MVQUV1Pv7nsPBv6Me6weekQ/KG+xC+xuhmGD3Q+c8jx938blfOcFQXjKzvtZmhMxBt2YYFgXOAjO8ut53TiIhuVFOKG0MLC5gyvOYWJk2xLZWIof5BvYFhskwyVqG1MLBPFj3Qy79sCYSKt9e5ysDYKznWYI8UJu03Tb8ag2iGr29DKUUwyDv+96VisEmep1aFPMYmKXzi3aDsFTnQwbDAMvukNj7RCEa3xZeEfMK4Kdu6OUHRD0qC9uvkEgEDoDnLkOCEK0TYW3wJgmegYe1wXBFrqmImpxd4Ti6XwABCeazkdJ5/y/inaaVwiC+Es9Yf85yr62G5gkCALP84JtFwTXdDzKcF6TcBDJenO+Le/3RaW3zt/Ez3QwBHuUx1GInhFu08fZiD3VPa9sr8OZ3aGOEVTk/4QFItBDdbiBEcptYiIDi4rzTHXYJ9xqWgn2dedObv4MoHnrIeRBovk7Bpj/f5zM1TOEH6ghrJredIYMfH6oN7Ib3LXWtHnc3yIhRCtyoHBbQgRxRYZ6NGyKAvc7NiESlB9fiefKIZA3W00Ib4YNuvmqGcLBELsD9kbDh/xgrCJk/FUFhPJLl9gGhOoo2hK5oFVA0KViiL0NCNU29oIcgQrrxFVHAt8VQGBngs8UQ8BrgbO6fjUhDv63b8Dzwg+mIfjboq5rw8YHt8X3b4D2zjyEv3wEAP6q+YhvHwcJHJu2AYF8YmYeAtzYaAg4iqV8Y4MmFg0BX9coN7Hgyw4NUUAM6l92oNuBhoBNrHK3A3QAsRA72KNU7gCCrjgWYi0BodoVBw9FWAiJ5ArlhyLweIqFOEtAqGYAAwVYCDj2oSFQAIVssBCwT6shZAMFz5AQCXxjoyF4BoUxkRAhHMfSEMaEAspIiDIHfXsNAWVoU/jQje93ZTk0EVpC+9AlS/5WV948FO3fa4I9Jy2XLOB1F63rQ3Q8rX0On7e1XHfhLh4HBwr0XDziroAHh2z0XAHjLuOHQui6jEelRUwbGxsHoSstApWgMhBCW4IKKlVoIIS+VCFM0tbQ5aQvfw6RPjcMQmf6HCKRcRiEzkRGRErpIAi9KaXyyb2DIDQn90qnWQ+B0J1mLZ3wPgBCf8K7bOnBAAj9pQeyRSD9IUwUgUiW4/SGMFKOI1kY1R/CSGGUXIlaXwhTJWpSxYI9IcwVC8qUbfaDMFi2KVNA2wvCaAHto5QZeOf1geBmS5nhovIeEMaLysHyfjyEhfJ+qNECGsJKowWg5QUWwlLLi+7mI0gIa81HOtvAoCBstoHpasiDgbDbkGfS3hoJAWG7NdKktUmVNMQYmlRNWtqFSUJQerDwdhBJ1LhNCmJEjdsmohZ6EhDjaqE3ETQznDZs5gvE+JoZThptJYGZGGVbyafqDT67IMbb4PNTX61WRRCc8PG3Wv3UZ9PbX02Iw4r+jKa3nwpO2W1X7ZJwvi6fWs9Dz7vdzz+m/fCXEq+CeFKsHxDJTxu/k5OTk5OTk5OTkxOg/wFni2NhX9oPZQAAAABJRU5ErkJggg==",
                      }}
                      style={{ width: 50, height: 50 }}
                      resizeMode="contain"
                    />
                    <Text style={styles.socialBtnText}>Facebook</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.orContainer}>
            <Text style={styles.underLine} />
            <Text style={styles.orText}>OR</Text>
            <Text style={styles.underLine} />
          </View>

          <View style={styles.wrapper}>
            <TextInput
              style={styles.mobileInputBox}
              placeholder="+91-9944880268"
              type="number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View style={styles.wrapper}>
            <TouchableOpacity
              style={styles.continueBtn}
              onPress={handlePress}
              activeOpacity={0.7}
            >
              <Text style={styles.continueBtnText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    marginVertical: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "800",
    color: "#ff8c00",
  },
  welcomeSubText: {
    textAlign: "center",
    color: "#778899",
    fontWeight: "500",
    fontSize: 16,
  },
  socialBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialBtn: {
    backgroundColor: "#ffff",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 12,
    width: 140,
    margin: 5,
  },
  socialBtnText: {
    paddingTop: 12,
    color: "#808080",
    fontWeight: 500,
    fontSize: 18,
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  underLine: {
    borderBottomWidth: 1,
    width: 120,
    marginBottom: 20,
    borderColor: "#d3d3d3",
  },
  orText: {
    textAlign: "center",
    color: "grey",
    fontSize: 16,
    fontWeight: 500,
    paddingVertical: 12,
  },
  mobileInputBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    paddingVertical: 12,
    padding: 12,
    fontSize: 24,
  },
  continueBtn: {
    backgroundColor: "#ff7f50",
    padding: 6,
    borderRadius: 2,
  },
  continueBtnText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  wrapper: {
    marginVertical: 12,
  },
});
