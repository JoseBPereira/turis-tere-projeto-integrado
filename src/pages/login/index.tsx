import AppLayout from "../../components/AppLayout";
import { NextPageWithLayout } from "../_app";

const Login: NextPageWithLayout = () => {
  return (
    <h1>Login</h1>
  );
};

Login.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default Login;
