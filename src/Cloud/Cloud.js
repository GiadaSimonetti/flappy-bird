import React from "react";
// import cloud1 from "./cloud1.svg";
// import cloud2 from "./cloud2.svg";
import cloud3 from "./cloud3.svg";
import cloud4 from "./cloud4.svg";
// import cloud5 from "./cloud5.svg";
// import cloud6 from "./cloud6.svg";
// import cloud7 from "./cloud7.svg";
// import cloud8 from "./cloud8.svg";
import { CloudContainer, Cloud3, Cloud4 } from "./styles";
import { motion } from "framer-motion";

function Cloud() {
  return (
    <CloudContainer>
      {/* <Cloud1 src={cloud1} className="cloud" alt="cloud1" />
      <Cloud2 src={cloud2} className="cloud" alt="cloud2" /> */}

      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
        <Cloud3 src={cloud3} className="cloud" alt="cloud3" />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
      >
        <Cloud4 src={cloud4} className="cloud" alt="cloud4" />
      </motion.div>
      {/* <Cloud5 src={cloud5} className="cloud" alt="cloud5" />
      <Cloud6 src={cloud6} className="cloud" alt="cloud6" />
      <Cloud7 src={cloud7} className="cloud" alt="cloud7" />
      <Cloud8 src={cloud8} className="cloud" alt="cloud8" /> */}
    </CloudContainer>
  );
}

export default Cloud;
