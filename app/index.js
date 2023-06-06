import { StyleSheet, View, FlatList } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
// @ts-ignore
import questions from "../data/questions";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={questions.items}
        // @ts-ignore
        renderItem={({ item }) => <QuestionListItem question={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
