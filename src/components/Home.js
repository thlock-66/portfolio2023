import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './Home.css';
import bg1 from "./assets/bg1.svg";
import bg2 from "./assets/bg2.svg";
import bg3 from "./assets/bg3.svg";
import bg4 from "./assets/bg4.svg";
import frame1 from "./assets/frame1.svg";
import frame2 from "./assets/frame2.svg";
import frame3 from "./assets/frame3.svg";
import frame4 from "./assets/frame4.svg";



const tags = [
  { text: "ui/ux designer", background: bg4 },
  { text: "cat mom", background: bg3 },
  { text: "rock lover", background: bg1 },
  { text: "fish observer", background: bg2 }
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [showFrame, setShowFrame] = useState(false);
  const [showFrame2, setShowFrame2] = useState(false);
  const [showFrame3, setShowFrame3] = useState(false);
  const [showFrame4, setShowFrame4] = useState(false);
  const indexRef = useRef(index); // Reference to track index without causing rerender
  const [displayedTag, setDisplayedTag] = useState("");

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const changeBackground = () => {
      setIndex((prevIndex) => (prevIndex + 1) % tags.length);
    };
    
    const interval = setInterval(changeBackground, 7000); // Time of each background screen
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayedTag(""); // Reset tag when the background changes
    const tagText = tags[index].text;
    let charIndex = -1;

    // Function to simulate typing effect
    const typingEffect = setInterval(() => {
      setDisplayedTag((prev) => prev + tagText.charAt(charIndex));
      charIndex += 1;
      if (charIndex === tagText.length) {
        clearInterval(typingEffect); // Stop when the full text is typed
      }
    }, 100); // 100ms delay between each character

    return () => clearInterval(typingEffect); // Cleanup typing effect when component unmounts
  }, [index]);

  useEffect(() => {
    if (index === 0) {
      setShowFrame(false);
      setTimeout(() => {
        setShowFrame4(true);
      }, 1000);
    } else {
      setShowFrame4(false);
    }

    if (index === 2) {
      setShowFrame(false);
      setTimeout(() => {
        setShowFrame(true);
      }, 1000);
    } else {
      setShowFrame(false);
    }

    if (index === 1) {
      setShowFrame2(false);
      setTimeout(() => {
        setShowFrame2(true);
      }, 1000); 
    } else {
      setShowFrame2(false);
    }

    if (index === 3) {
      setShowFrame3(false);
      setTimeout(() => {
        setShowFrame3(true);
      }, 1000);
    } else {
      setShowFrame3(false);
    }
  }, [index]);

  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "flex-start", 
      justifyContent: "start", 
      height: "100vh", 
      paddingLeft: "5vw",
      backgroundColor: "#FFFCF9",
      backgroundImage: `url(${tags[index].background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 1,
      transition: "background-image 1s ease, opacity 1s ease",
    }}>

      {/* Animated Climber */}
      {showFrame && (
        <motion.img
          src={frame1}
          alt="Frame"
          style={{
            position: "absolute",
            top: "-200px", 
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw", 
            maxWidth: "500px"
          }}
          initial={{ y: "-50vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{
            duration: 3, 
            ease: "easeOut",
            delay: 1,
          }}
        />
      )}
      {/* Animated Cat Paw */}
      {showFrame2 && (
        <motion.img
          src={frame2}
          alt="Frame2"
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            maxWidth: "600px"
        }}
        initial={{ y: "-60vh", opacity: 0 }}
        animate={{
          y: "0",
          x: [0, "40px", "160px"],
          opacity: 1,
          rotate: [-18, 24, -30],
        }}
        transition={{
          duration: 3, // Duration for the drop
          ease: "easeOut",
          delay: 1, // Delay before rotation starts
        }}
      />
      )}

      {/* Fish Observer */}
      {showFrame3 && (
        <motion.img
          src={frame3}
          alt="Frame3"
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "20%",
            transform: "translateX(-50%)",
            width: "80vw",
            maxWidth: "600px",
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            y: ["0", "-30vh"],
            x: ["0", "30vw"],
            opacity: 1,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            delay: 1,
          }}
        />
      )}

      {/* uiux animation */}
      {showFrame4 && (
        <motion.img
          src={frame4}
          alt="Frame4"
          style={{
            position: "absolute",
            bottom: "70vh",
            left: "80%",
            transform: "translateX(-50%)",
            width: "10vw",
            maxWidth: "300px",
          }}
          initial={{
            opacity: 1,
          }}
          animate={{
            y: ["90vh", "10vh"], 
            x: ["0", "-30vw", "0"],
            opacity: 1,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1], // Define the times for keyframes (start, pause, end)
          }}
        />
      )}

      <div style={{
        marginTop: "160px",
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        marginBottom: "56px",
        alignSSelf: "stretch"}}>
            <h1 className="tag-text" style={{
                color: "#1d1d1d",
                fontSize: "56px",
                fontWeight: 400,
                lineHeight: "normal",
            }}>
                Hey there!
            </h1>
            <h1 className="tag-text" style={{
                color: "#1d1d1d",
                fontSize: "56px",
                fontWeight: 400,
                lineHeight: "normal",
            }}>
                I am Lock Yin :-)
            </h1>
        </div>

      {/* Display the typed out tag */}
      <h2 className="tag-text" style={{
        color: "#FFF",
        fontFamily: "Archivo Black, sans-serif",
        fontSize: "56px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        borderRadius: "100px",
        background: "#EF476F",
        display: "flex",
        padding: "8px 32px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px"
      }}>
        {displayedTag}
      </h2>
    </div>
  );
};

export default App;
