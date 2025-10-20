import { Slide } from '../models/slide.model';
// Permet de créer des slides facilement et se rajoute automatiquement sur le site
export const SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Couverture',
    imageUrl: './assets/images/',
    backgroundColor: '#1a1a2e',
    textElements: [
      {
        content: 'Le Voyage Magique',
        position: { top: '40%', left: '50%' },
        style: {
          fontSize: '4rem',
          color: '#ffffff',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px 40px',
          borderRadius: '10px',
          maxWidth: '80%'
        }
      },
      {
        content: 'Un conte numérique interactif',
        position: { top: '55%', left: '50%' },
        style: {
          fontSize: '1.5rem',
          color: '#f0f0f0',
          textAlign: 'center'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Le Début',
    imageUrl: './assets/images/',
    backgroundColor: '#2d4a3e',
    textElements: [
      {
        content: 'Il était une fois...',
        position: { top: '20%', left: '20%' },
        style: {
          fontSize: '4rem',
          color: '#ffffff',
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '15px 30px',
          borderRadius: '8px'
        }
      },
      {
        content: 'Dans une forêt enchantée, vivait une petite créature curieuse qui rêvait de découvrir le monde au-delà des arbres.',
        position: { bottom: '20%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '45%'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'L\'Aventure',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    backgroundColor: '#16537e',
    textElements: [
      {
        content: 'Le Grand Voyage',
        position: { top: '15%', right: '10%' },
        style: {
          fontSize: '2.8rem',
          color: '#ffffff',
          fontWeight: 'bold',
          textAlign: 'right',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '15px 30px',
          borderRadius: '8px'
        }
      },
      {
        content: 'Un jour, elle décida de partir à l\'aventure. Les montagnes l\'appelaient et le ciel infini lui promettait mille merveilles.',
        position: { bottom: '20%', right: '10%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          textAlign: 'right',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '40%'
        }
      }
    ]
  },
  {
    id: 4,
    title: 'La Rencontre',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    backgroundColor: '#8e5572',
    textElements: [
      {
        content: 'Une Rencontre Inattendue',
        position: { top: '25%', left: '50%' },
        style: {
          fontSize: '2.5rem',
          color: '#ffffff',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '15px 30px',
          borderRadius: '8px'
        }
      },
      {
        content: 'Sur son chemin, elle rencontra un sage hibou qui lui révéla le secret des étoiles et la magie cachée dans chaque coucher de soleil.',
        position: { bottom: '10%', left: '10%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '50%'
        }
      }
    ]
  },
  {
    id: 5,
    title: 'Le Retour',
    imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1',
    backgroundColor: '#6a4c93',
    textElements: [
      {
        content: 'Et ils vécurent heureux...',
        position: { top: '35%', left: '50%' },
        style: {
          fontSize: '3rem',
          color: '#ffffff',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px 40px',
          borderRadius: '10px'
        }
      },
      {
        content: 'De retour chez elle, la petite créature partagea ses histoires et ses découvertes, inspirant toute la forêt à rêver plus grand.',
        position: { bottom: '15%', left: '50%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '60%'
        }
      }
    ]
  }
];