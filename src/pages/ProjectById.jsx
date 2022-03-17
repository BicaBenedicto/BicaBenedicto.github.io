import React from 'react';
import '../sass/ProjectById.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router';

export default function ProjectById() {
  const { name } = useParams();

  return (
    <>
      <Header isRoot={ true } />
      <div className="project-individual">
        <iframe src={ `https://gabrielbenedicto.com/${name}` } title={ name }></iframe>
      </div>
      <Footer />
    </>
  );
}
