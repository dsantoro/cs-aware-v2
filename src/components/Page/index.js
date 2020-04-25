import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled(motion.div)`
  padding: 13vw 5vw 0;
`;

const Page = (props) => {
  return (
    <Container
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div key={props.id}>
        <AnimatePresence>{props.children}</AnimatePresence>
      </div>
    </Container>
  );
};

export default Page;
