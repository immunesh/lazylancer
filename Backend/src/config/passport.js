require("dotenv").config();
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("🔥 GOOGLE PROFILE:", profile);

        const email = profile.emails?.[0]?.value;
        const name = profile.displayName;

        // 🔥 GET IMAGE (SAFE WAY)
        let avatar =
          profile.photos?.[0]?.value ||
          profile._json?.picture ||
          "";

        console.log("🖼️ Raw Avatar:", avatar);

        // 🔥 CLEAN + HIGH QUALITY FIX
        if (avatar) {
          avatar = avatar.split("=")[0] + "=s400-c";
        }

        console.log("🖼️ Final Avatar:", avatar);

        let user = await User.findOne({ email });

        if (!user) {
          console.log("🆕 Creating new user");

          user = await User.create({
            name,
            email,
            password: "oauth",
            avatar,
          });

        } else {
          console.log("♻️ Updating user avatar");

          // 🔥 FORCE UPDATE (IMPORTANT)
          user.avatar = avatar || user.avatar;
          await user.save();
        }

        console.log("✅ Saved User:", user);

        done(null, user);

      } catch (error) {
        console.log("❌ Google Auth Error:", error);
        done(error, null);
      }
    }
  )
);

module.exports = passport;








// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/api/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await User.findOne({ email: profile.emails[0].value });
//         const avatar = profile.photos?.[0]?.value;
//         if (!user) {
//           user = await User.create({
//             name: profile.displayName,
//             email: profile.emails[0].value,
//             password: "oauth",
//             avatar: avatar,
//           });
//         } else {
//           // 🔥 update avatar if exists
//           user.avatar = avatar || user.avatar;
//           await user.save();
//         }

//         done(null, user);
//       } catch (err) {
//         done(err, null);
//       }
//     },
//   ),
// );

// passport.use(new GitHubStrategy({

//   clientID: process.env.GITHUB_CLIENT_ID,
//   clientSecret: process.env.GITHUB_CLIENT_SECRET,
//   callbackURL: "/api/auth/github/callback"

// },
// async(accessToken, refreshToken, profile, done)=>{

//   try{

//     let email = profile.emails?.[0]?.value || `${profile.username}@github.com`;

//     let user = await User.findOne({ email });

//     if(!user){

//       user = await User.create({

//         name: profile.displayName || profile.username,
//         email,
//         password: "oauth"

//       });

//     }

//     done(null,user);

//   }catch(err){

//     done(err,null);

//   }

// }));

//module.exports = passport;
