// Overlays app.json so secrets can come from the environment.
// On EAS, GOOGLE_SERVICES_JSON is a file-type env var (its value is a path to
// the uploaded file); locally it falls back to ./google-services.json (gitignored).
module.exports = ({ config }) => ({
  ...config,
  android: {
    ...config.android,
    googleServicesFile:
      process.env.GOOGLE_SERVICES_JSON ?? "./google-services.json",
  },
});
