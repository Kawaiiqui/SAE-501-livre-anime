import { Slide } from '../models/slide.model';
// Permet de créer des slides facilement et se rajoute automatiquement sur le site
export const SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Couverture',
    imageUrl: 'assets/pictures/Cover.png',
    backgroundColor: '#ffffffff',
    textElements: [
    ]
  },
  {
    id: 2,
    title: 'Le Début',
    imageUrl: 'assets/pictures/slide1.png',
    backgroundColor: '#faf5e5',
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
    imageUrl: 'assets/pictures/slide2.png',
    backgroundColor: '#faf5e5',
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
    imageUrl: 'assets/pictures/slide3.png',
    backgroundColor: '#faf5e5',
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
    imageUrl: 'assets/pictures/slide4.png',
    backgroundColor: '#faf5e5',
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
  },
    {
    id: 6,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide5.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 7,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide6.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 8,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide7.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 9,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide8.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 10,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide9.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 11,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide10.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 12,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide11.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 13,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide12.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 14,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide13.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 15,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide14.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 16,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide15.png',
    backgroundColor: '#faf5e5',
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
  },
   {
    id: 17,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide16.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 18,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide17.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 19,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide18.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 20,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide19.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 21,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide20.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 22,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide21.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 23,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide22.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 24,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide23.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 25,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide24.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 26,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide25.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 27,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide26.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 28,
    title: 'Le Retour',
    imageUrl: 'assets/pictures/slide27.png',
    backgroundColor: '#faf5e5',
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
  },
  {
    id: 29,
    title: 'Fin',
    imageUrl: 'assets/pictures/Arriere.png',
    backgroundColor: '#f7f6d7ff',
    textElements: [
    ]
  },
];