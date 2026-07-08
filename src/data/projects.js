import P1 from '../assets/images/project1.jpg';
import P2 from '../assets/images/project8.png';
import P3 from '../assets/images/project2.jpg';
import P4 from '../assets/images/project6.jpg';
import P5 from '../assets/images/project9.jpg';
import P6 from '../assets/images/project5.jpg';
import P7 from '../assets/images/project4.jpg';
import P8 from '../assets/images/project3.jpg';
import P10 from '../assets/images/project10.png';
import P11 from '../assets/images/project11.png';
import P12 from '../assets/images/project12.png';
import P13 from '../assets/images/project13.png';
import WhisperAI from '../assets/images/WhisperAI.png';
import PHP from '../assets/images/lang1.png';
import JS from '../assets/images/lang2.png';
import Electron from '../assets/images/lang7.png';
import TS from '../assets/images/lang9.png';
import React from '../assets/images/lang10.png';
import PostgreSQL from '../assets/images/lang12.png';
import Tailwind from '../assets/images/lang13.svg';
import Node from '../assets/images/lang14.png';
import MySQL from '../assets/images/lang15.png';
import CSS from '../assets/images/lang3.png';
import Python from '../assets/images/lang4.png';
import Flask from '../assets/images/lang27.png';
import PyTorch from '../assets/images/lang21.svg';
import MongoDB from '../assets/images/lang16.png';
import Laravel from '../assets/images/lang24.png';
export const projects = [
  {
    id: 1,
    title: 'Miam-O-Pedia',
    image: P1,
    github: 'https://gitlab.sorbonne-paris-nord.fr/12201410/innovactionsae',
    note: "Miam-O-Pedia est une application web qu’on a développée pour faciliter la recherche et la gestion d’articles alimentaires. L’idée est simple : permettre aux utilisateurs de parcourir des recettes ou des plats, de sauvegarder leurs favoris et même de recevoir des recommandations personnalisées en fonction de leurs goûts.",
    stack: [Python, Flask, MongoDB, CSS, JS],
  },
  {
    id: 2,
    title: 'Consulat',
    image: P2,
    github: 'https://github.com/chemsbhd/conuslat',
    note: 'Site web fictif pour un consulat marocain permettant la gestion des services consulaires, la prise de rendez-vous et l\'accès aux informations pour les citoyens.',
    stack: [Laravel, PHP, MySQL, CSS, JS],
  },
  {
    id: 3,
    title: 'Quartz',
    image: P3,
    note: "Le site Quartz est conçu pour faciliter la gestion des comptes-rendus d'activité (CRA) des collaborateurs. Il permet aux administrateurs de suivre les missions, gérer les collaborateurs et les clients, et exporter les données en formats PDF ou Excel.",
    stack: [Laravel, PHP, MySQL, CSS, JS],
  },
  {
    id: 4,
    title: 'TetrisPHP',
    image: P4,
    github: 'https://github.com/chemsbhd/TetrisPHP',
    note: 'Ce projet est une implémentation complète du jeu classique Tetris, réalisée entièrement en PHP côté serveur, sans aucune utilisation de JavaScript. L\'objectif principal est de démontrer la faisabilité d\'un jeu interactif en web uniquement avec PHP, et d\'explorer les contraintes que cela implique ainsi que les solutions apportées pour les contourner.',
    stack: [CSS, JS],
  },
  {
    id: 5,
    title: 'Speech2Text',
    image: WhisperAI,
    github: 'https://github.com/chemsbhd/Speech2Text',
    note: "Speech2Text est une application de transcription de conversations en français avec séparation des locuteurs. Elle permet d'importer un fichier audio, de choisir le nombre de speakers ou de laisser la détection automatique, puis de récupérer une transcription structurée au format texte ou JSON.",
    stack: [Python, PyTorch, CSS, JS],
  },
];
