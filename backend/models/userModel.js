import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
            unique: true,
            maxLength: [30, "Name cannot exceed 30 characters"],
            minLength: [3, "Name should have more than 3 characters"],
		},
		email: {
			type: String,
			required: true,
			validate: [validator.isEmail, "Please Enter a valid Email"],
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		profilePic: {
			type: String,
			default: "",
		},
		// createdAt, updatedAt => Member since <createdAt>
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;