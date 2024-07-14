export default {
  expo: {
    name: "Hirehub",
    slug: "hirehub",
    version: "1.0.0",
    orientation: "portrait",
    icon: "https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720197921/1000242168_ngelld.png",
    scheme: "hirehub",
    userInterfaceStyle: "automatic",
    splash: {
      image:
        "https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720197921/1000242168_ngelld.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.ajaymaurya1008.hirehub",
    },
    android: {
      adaptiveIcon: {
        foregroundImage:
          "https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720197921/1000242168_ngelld.png",
        backgroundColor: "#ffffff",
      },
      package: "com.ajaymaurya1008.hirehub",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon:
        "https://res.cloudinary.com/dfh7pmyj0/image/upload/v1720197921/1000242168_ngelld.png",
    },
    plugins: [
      "expo-router",
      "expo-secure-store",
      "@react-native-google-signin/google-signin",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "9d0bb2fd-10e1-4ba9-a865-2ffd0fbe0bf8",
      },
    },
    owner: "ajaymaurya1008",
  },
};
