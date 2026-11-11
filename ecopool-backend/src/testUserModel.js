import User from "./models/User.js";

const testUser = new User({
    fullName: "  Test Student  ",
    email: "TEST@EXAMPLE.COM",
    institutionalId: "TEST123",
    password: "temporaryPassword",
    accountType: "Student"
});

try {
    await testUser.validate();

    console.log("User model validation successful!");

    console.log("Full Name:", testUser.fullName);
    console.log("Email:", testUser.email);
    console.log("Account Type:", testUser.accountType);

} catch (error) {
    console.log("Validation failed:", error.message);
}