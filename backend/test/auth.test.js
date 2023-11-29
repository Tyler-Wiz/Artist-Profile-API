const {
  commonAfterAll,
  commonAfterEach,
  commonBeforeEach,
} = require("./common");
const UserModel = require("../src/models/user");

const newUser = {
  password: "fake_user_three",
  email: "fake_three@user.io",
  is_admin: false,
};

const { email, password, is_admin } = newUser;

describe("User", () => {
  describe("Test user registration", () => {
    test("User can succesfully register with proper credentials", async () => {
      const user = await UserModel.createUser(email, password, is_admin);
      expect(user).toEqual({
        id: expect.any(Number),
        password: newUser.password,
        email: newUser.email,
        is_admin: newUser.is_admin,
        created_at: expect.any(Date),
      });
    });
  });
});
