import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";

const App = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const handleAddTodo  =() =>{

    if(!todo)return


  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{todo}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => settodo(text)}
          value={todo}
          placeholder="Enter a text "
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={styles.button}>Go</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dad7cd",
    alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    paddingTop: 75,
    marginVertical: 15,
    fontSize: 35,

    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    shadowColor: "black",
    backgroundColor: "#a3b18a",
    elevation: 10,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
  },
  button: {
    padding: 13,
    color: "white",
    backgroundColor: "#344e41",
    borderRadius: 50,
    elevation: 10,
  },
});
