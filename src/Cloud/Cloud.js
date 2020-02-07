import React from "react";
import cloud1 from "./cloud1.svg";
import cloud2 from "./cloud2.svg";
import cloud3 from "./cloud3.svg";
import { CloudContainer, Cloud1, Cloud2, Cloud3, Cloud3bis } from "./styles";
import { motion } from "framer-motion";

function Cloud() {
  return (
    <CloudContainer>
      <motion.div
        animate={{ x: -1000 }}
        transition={{ loop: Infinity, ease: "linear", duration: 14 }}
      >
        <Cloud1 src={cloud1} className="cloud" alt="cloud1" />
      </motion.div>

      <motion.div
        animate={{ x: -5000 }}
        transition={{ loop: Infinity, ease: "linear", times: 2, duration: 17 }}
      >
        <Cloud2 src={cloud2} className="cloud" alt="cloud2" />
      </motion.div>

      <motion.div
        animate={{ x: -2000 }}
        transition={{ loop: Infinity, ease: "linear", duration: 15 }}
      >
        <Cloud3 src={cloud3} className="cloud" alt="cloud3" />
      </motion.div>

      <motion.div
        animate={{ x: -2500 }}
        transition={{ loop: Infinity, ease: "linear", duration: 16 }}
      >
        <Cloud3bis src={cloud3} className="cloud" alt="cloud3bis" />
      </motion.div>
    </CloudContainer>
  );
}

export default Cloud;
