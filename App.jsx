import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import SingleTodo from "./components/SingleTodo";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAddTodo = () => {
    console.log(todos);
    if (!todo) return;
    setTodos((todos) => [...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{todo}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          placeholder="Enter a text "
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={styles.button}>Go</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "90%", height: 100, marginTop: 10 }}>
        {todos.map((res) => {
          return (
            <Text style={styles.todo} key={res.id}>
              {res.text}
            </Text>
          );
        })}
        {/* <FlatList
          data={todos}
          renderItems={({ item }) => (
            <SingleTodo
            todo={todo}
            todos={todos}
            setTodo={setTodo}
            ></SingleTodo>
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList> */}
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
    elevation: 100,
  },

  todo: {
    flexDirection: "row",
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: "black",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 50,
  },
});
