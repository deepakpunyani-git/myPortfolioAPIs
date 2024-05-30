const About = require('../models/about');
const Links = require('../models/links');
const Education = require('../models/education');
const Experience = require('../models/experience');
const Skills = require('../models/skills');
const Projects = require('../models/projects');
const Awards = require('../models/awards');

const mainController = {
  viewAll: async (req, res) => {
    try {
      const aboutData = await About.findOne();
      const linksData = await Links.find().sort({ position: -1 }).select({ _id: 0 });
      const educationData = await Education.find().sort({ position: -1 }).select({ _id: 0 });
      const experienceData = await Experience.find().sort({ position: -1 }).select({ _id: 0 });
      const skillsData = await Skills.find().sort({ position: 1 }).select({ _id: 0 });
      const projectsData = await Projects.find().sort({ position: 1 }).select({ _id: 0 });
      const awardsData = await Awards.find().sort({ position: 1 }).select({ _id: 0 });

      res.json({
        about: aboutData,
        links: linksData,
        education: educationData,
        experience: experienceData,
        skills: skillsData,
        projects: projectsData,
        awards: awardsData,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = mainController;
