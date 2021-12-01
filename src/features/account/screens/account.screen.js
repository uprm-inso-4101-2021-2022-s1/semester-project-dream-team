import React from "react";
import { List } from "react-native-paper";
import { Text } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Avatar } from "react-native-elements";
export const AccountScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Avatar
        rounded
        size="large"
        icon={{ name: "user", type: "font-awesome", color: "green" }}
      />
      <Text>Username</Text>
      <Text>Level 21</Text>

      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Achievements"
          left={(props) => <List.Icon {...props} color="black" icon="trophy" />}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
        />
      </List.Section>
    </SafeArea>
  );
};
