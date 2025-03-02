/* Node Modules */
import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';

/* Components */
import PageTitle from '../components/PageTitle';

const Conversation = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      {/* Meta Title */}
      <PageTitle title={`Conversation title | Neuril`} />
    </>
  );
};

export default Conversation;
