import React from 'react';
import GarnettImg from "../images/garnett.jpg";

const Bio = () => {
  return (
    <div className="bio">
      <div className="photo" style={{ backgroundImage: `url(${GarnettImg})` }}></div>
      <h2>Eleanor GARNETT Mellen</h2>
      <p className="blurb">Garnett is an ACE Personal Trainer and teaches Yoga, Pilates, Qigong and American Waltz. People who strive for vigor, strength and robust health find her training sessions both enlivening, while they quiet the nervous system. For those who have elevated blood sugar and who want to avoid developing Type II Diabetes, she draws upon her CDC Lifestyle Coach certification to safely guide weight loss. In her sessions Garnett emphasizes posture and balance drawing upon her extensive trainings in the Alexander Technique. Prior to moving into the fitness field, Garnett worked as a landscape designer/environmental planner. She has a Bachelors Degree from the University of Virginia and a Masters in Landscape Architecture from Virginia Tech. She can help you plan and cultivate your health.</p>
    </div>
  );
};

export default Bio;

