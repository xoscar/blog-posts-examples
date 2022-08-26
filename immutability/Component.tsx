type TUser = Readonly<{
  name: string;
  email: string;
  password: string;
}>;

type TProps = {
  user: TUser;
};

const Component = ({ user }: TProps) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.password}</h3>
    </div>
  );
};

const App = () => {
  const user: TUser = {
    name: "John Doe",
    email: "test@test.com",
    password: "123456",
  };

  return <Component user={user} />;
};
