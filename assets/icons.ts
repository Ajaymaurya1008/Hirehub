import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
  home: (props) => <AntDesign name="home" size={26} {...props} />,
  explore: (props) => <Feather name="search" size={26} {...props} />,
  profile: (props) => <Ionicons name="people-circle" size={26} {...props} />,
};
