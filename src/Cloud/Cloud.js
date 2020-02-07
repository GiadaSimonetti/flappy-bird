import React from "react";
import cloud1 from "./cloud1.svg";
// import cloud2 from "./cloud2.svg";
import cloud3 from "./cloud3.svg";
import cloud4 from "./cloud4.svg";
// import cloud6 from "./cloud6.svg";
// import cloud7 from "./cloud7.svg";
// import cloud8 from "./cloud8.svg";
import { CloudContainer, Cloud3, Cloud4, Cloud1 } from "./styles";
import { motion } from "framer-motion";

function Cloud() {
  return (
    <CloudContainer>
      {/* <Cloud1 src={cloud1} className="cloud" alt="cloud1" />
      <Cloud2 src={cloud2} className="cloud" alt="cloud2" /> */}

      <motion.div
        animate={{ x: -5000 }}
        transition={{ loop: Infinity, ease: "linear", times: 2, duration: 17 }}
      >
        <Cloud3 src={cloud3} className="cloud" alt="cloud3" />
      </motion.div>
      <motion.div
        animate={{ x: -2000 }}
        transition={{ loop: Infinity, ease: "linear", duration: 15 }}
      >
        <Cloud4 src={cloud4} className="cloud" alt="cloud4" />
      </motion.div>

      <motion.div
        animate={{ x: -1000 }}
        transition={{ loop: Infinity, ease: "linear", duration: 15 }}
      >
        <Cloud1 src={cloud1} className="cloud" alt="cloud1" />
      </motion.div>
      {/* <Cloud6 src={cloud6} className="cloud" alt="cloud6" />
      <Cloud7 src={cloud7} className="cloud" alt="cloud7" />
      <Cloud8 src={cloud8} className="cloud" alt="cloud8" />  */}
    </CloudContainer>
  );
}

export default Cloud;
