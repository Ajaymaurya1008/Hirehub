import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type IconProps = Partial<Omit<ComponentProps<typeof AntDesign>, "name">>;

export const icons = {
  home: (props: IconProps) => <AntDesign name="home" size={26} {...props} />,
  explore: (props: IconProps) => <Feather name="search" size={26} {...props} />,
  profile: (props: IconProps) => (
    <Ionicons name="people-circle" size={26} {...props} />
  ),
};
