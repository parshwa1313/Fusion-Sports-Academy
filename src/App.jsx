import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./atoms/Navbar"
import Home from "./atoms/Home"
import Academy from "./atoms/Academy"
import Sports from "./atoms/Sports"
import NewsSection from './atoms/Newtips';
import ContactUs from './atoms/Contact';
import EventPage from './atoms/Events';
import Tennistournament from "./atoms/Tennistournament";
import BadmintonChampionship from "./atoms/BadmintonChampionship";
import Footballcontest from './atoms/Footballcontest';
import CricketLeague from './atoms/Cricketleague';
import Gallery from "./atoms/Gallery";
import BadmintonSection from './atoms/Badmintion';
import TennisSection from './atoms/Tennnis ';
import CricketSection from './atoms/Cricket';
import FootballSection from './atoms/Football';
import Details from './atoms/Details';
import Foundation from './atoms/Foundation';
import Perfomance from './atoms/Perfomance';
import Footer from './atoms/Footer';
import Anxiety from './atoms/Anxiety';
import Winner from './atoms/Winner';
import Coaches from './atoms/Coaches';
import Trials from './atoms/Trials';
import Junior from './atoms/Junior';
import Strength from './atoms/Strength';
import Headlines from './atoms/Headlines';
import Interview from './atoms/Interview';
import Camp from './atoms/Camp';
import Privacy from './atoms/privacy';
import Terms from './atoms/Terms';
import CommunityGrid from './atoms/Community';
import Academies from './atoms/Academies';
import MixedGroundGrid from './atoms/Grounds';
import EventOrganiserGrid from './atoms/Organisers';
import CommentatorGrid from './atoms/Commentators';
import RefereeGrid from './atoms/Referees';
import TrainerGrid from './atoms/Trainers';
import Testimonials from './atoms/Testimonials';

function AppWrapper() {
  const location = useLocation();
  const hideFooterRoutes = ['/details']; // Add more paths here if needed
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/tennis-tournament" element={<Tennistournament />} />
        <Route path='/badminton-championship' element={<BadmintonChampionship />} />
        <Route path='/football-contest' element={<Footballcontest />} />
        <Route path='/cricket-league' element={<CricketLeague />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/badminton' element={<BadmintonSection />} />
        <Route path='/tennis' element={<TennisSection />} />
        <Route path='/cricket' element={<CricketSection />} />
        <Route path='/football' element={<FootballSection />} />
        <Route path='/details' element={<Details />} />
        <Route path='/foundation' element={<Foundation />} />
        <Route path='/performance' element={<Perfomance />} />
        <Route path='/anxiety' element={<Anxiety />} />
        <Route path='/winner' element={<Winner />} />
        <Route path='/coach' element={<Coaches />} />
        <Route path='/trials' element={<Trials />} />
        <Route path='/junior' element={<Junior />} />
        <Route path='/strength' element={<Strength />} />
        <Route path='/headlines' element={<Headlines />} />
        <Route path='/interview' element={<Interview />} />
        <Route path='/camp' element={<Camp />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/community' element={<CommunityGrid />} />
        <Route path='/academies' element={<Academies />} />
        <Route path='/grounds' element={<MixedGroundGrid />} />
        <Route path='/organisers' element={<EventOrganiserGrid />} />
        <Route path='/commentators' element={<CommentatorGrid />} />
        <Route path='/referees' element={<RefereeGrid />} />
        <Route path='/trainers' element={<TrainerGrid />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
