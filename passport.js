const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: "394761644679-jm801n0kjqp1ql2d85rfl6ilf63gks5a.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
