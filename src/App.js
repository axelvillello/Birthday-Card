
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function App() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (open && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked by browser:", err);
      });
    }
  }, [open]);

  return (
    <div className="container">
      {open && <Confetti />}

      {/* 🎶 Hidden audio */}
      <audio ref={audioRef} src="/Eagles - Peaceful Easy Feeling.mp3" preload="auto" loop/>

      <div className="relative z-10 w-[350px] p-6 flex flex-col items-center text-center shadow-xl rounded-2xl bg-white/80 backdrop-blur-md">
        {!open ? (
          <>
            <motion.h1
              className="card-heading"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              🎁 Open Your Birthday Card! 🎁
            </motion.h1>
            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full rounded-2xl bg-pink-500 hover:bg-pink-600 text-white p-2"
            >
              Open
            </button>
            <p className="card-text">🔊 Ensure volume isn't too loud :3</p>
          </>
        ) : (
          <motion.div
            className="card-body"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-extrabold text-purple-700">
              🎉 <b>Happy Birthday Andrew!</b> 🎉
            </h1>
            <p className="card-text">
              <u>Hey, you survived another year!</u> <br/> <br/>
              We've only started getting to know one another <br/>
              over the past four months, and somehow you<br/>
              have already become an important part of my life. <br/> <br/>
              In such little amount of time <br/>
              I have witnessed you grow as an individual <br/>
              and thrive in ways new to yourself.<br/> <br/>
              You are on a trajectory towards true brilliance. <br /> <br/>
              While you may sometimes feel your mind as a chaotic rift, <br/>
              I see swirling motes of untapped potential <br/>
              awaiting for you to grow into them. <br/> <br/>
              While my mortal enemy is my turbulent sense of confidence, <br/>
              I can clearly see within the recesses of my own chaos, <br/>
              that I am confident in your ability to become <br/>
              the best you that you can possibly be. <br/> <br/>
              I make one selfish request on this day of Andrew, <br/>
              and that is to never forget to care for yourself <br/>
              the same amount, if not more than the amount <br/><br/>
              <i>I care for you.</i> <br/><br/>
              Best of wishes, <br/>
              to days of smiles, <br/>
              to days of successes, <br/>
              and days of peace. <br/> <br/>
              <i>-Axel</i> <br/> <br/>
              
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}