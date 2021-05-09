module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "otaviojacobi@gmail.com",
      defaultReplyTo: "otaviojacobi@gmail.com",
    },
  },
});
