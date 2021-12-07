import { FC } from 'react';
import { Redirect } from 'react-router';

const IndexPage: FC = () => {
  return <Redirect to="/user/login" />;
};
export default IndexPage;
