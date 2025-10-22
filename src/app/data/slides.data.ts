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
    title: 'Rougerose et Blancheneige',
    imageUrl: 'assets/pictures/slide1.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Une pauvre veuve vivait dans une chaumière isolée ; dans le jardin qui était devant la porte, il y avait deux rosiers, dont l'un portait des roses blanches et l'autre des roses rouges. La veuve avait deux filles qui ressemblaient aux deux rosiers ; l'une se nommait Blancheneige et l'autre Rougerose.",
        position: { bottom: '50%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '45%'
        }
      },
      {
        content: " C'étaient les deux enfants les plus pieux, les plus obéissants et les plus laborieux que le monde eût jamais vus ; mais Blancheneige était d'un caractère plus tranquille et plus doux. ",
        position: { top: '75%', left: '78%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '60%'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'La cueillette',
    imageUrl: 'assets/pictures/slide2.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Rougerose courait plus volontiers dans les prés et dans les champs, à la recherche des fleurs et des papillons. Blancheneige restait à la maison avec sa mère, l'aidait aux travaux du ménage, et lui faisait la lecture quand l'ouvrage était fini.",
        position: { bottom: '50%', left: '18%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Les deux sœurs s'aimaient tant, qu'elles se tenaient par la main toutes les fois qu'elles sortaient ensemble ; et quand Blancheneige disait : « Nous ne nous quitterons jamais.» Rougerose répondait : « Tant que nous vivrons ; » et la mère ajoutait : « Tout devra être commun entre vous deux.»",
        position: { top: '75%', left: '78%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '60%'
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Le lièvre',
    imageUrl: 'assets/pictures/slide3.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Elles allaient souvent seules au bois pour cueillir des fruits sauvages; les animaux les respectaient et s'approchaient d'elles sans crainte.",
        position: { bottom: '58%', left: '18%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Le lièvre mangeait dans leur main, le chevreuil paissait à leurs côtés , le cerf folâtrait devant elles, et les oiseaux perchés sur les branches voisines chantaient leurs plus jolies chansons.",
        position: { top: '75%', left: '78%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '60%'
        }
      }
    ]
  },
  {
    id: 5,
    title: 'La sieste',
    imageUrl: 'assets/pictures/slide4.png',
    backgroundColor: '#faf5e5',
       textElements: [
      {
        content: "Jamais il ne leur arrivait rien de fâcheux : si la nuit les surprenait dans le bois, elles se couchaient sur la mousse l'une près de l'autre et dormaient jusqu'au lendemain, sans que leur mère eût aucune inquiétude.",
        position: { bottom: '40%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
    ]
  },
    {
    id: 6,
    title: "L'ange gardien",
    imageUrl: 'assets/pictures/slide5.png',
    backgroundColor: '#faf5e5',
        textElements: [
      {
        content: "Une fois qu'elles avaient passé la nuit dans le bois, quand l'aurore les réveilla, elles virent près d'elles un bel enfant vêtu d'une robe d'un blanc éclatant ; il attachait sur elles un regard amical, mais il disparut dans le bois sans dire un mot.",
        position: { bottom: '53%', left: '18%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Elles s'aperçurent alors qu'elles s'étaient couchées tout près d'un précipice, et qu'elles seraient tombées si elles avaient fait seulement deux pas de plus dans les ténèbres: leur mère leur dit que cet enfant était sans doute l'ange gardien des bonnes petites filles. ",
        position: { top: '65%', left: '78%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'Le bouquet',
    imageUrl: 'assets/pictures/slide6.png',
    backgroundColor: '#faf5e5',
     textElements: [
      {
        content: "Blancheneige et Rougerose tenaient la cabane de leur mère si propre qu'on aurait pu se mirer dedans.",
        position: { bottom: '60%', left: '18%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "En été, Rougerose avait soin du ménage, et chaque matin sa mère trouvait à son réveil un bouquet dans lequel il y avait une fleur de chacun des deux rosiers. ",
        position: { top: '65%', left: '78%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "L'histoire du soir",
    imageUrl: 'assets/pictures/slide7.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "En hiver, Blancheneige allumait le feu et accrochait la marmite à la crémaillère, et la marmite était en cuivre jaune qui brillait comme de l'or, tant elle était bien écurée. Le soir, quand la neige tombait, la mère disait : « Blancheneige, va mettre le verrou ; » ensuite elles s'asseyaient au coin du feu ;",
        position: { bottom: '40%', left: '18%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "la mère mettait ses lunettes et faisait la lecture dans un grand livre ; et les deux petites écoutaient tout en filant leur quenouille ; auprès d'elles était couché un petit agneau, et derrière, une tourterelle dormait sur son perchoir, la tète sous l'aile. ",
        position: { top: '75%', left: '78%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "La rencontre avec l'ours",
    imageUrl: 'assets/pictures/slide8.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Un soir qu'elles étaient réunies tranquillement, on frappa à la porte. « Rougerose, dit la mère, va vite ouvrir ; c'est sans doute quelque voyageur égaré qui cherche un abri pour la nuit. » Rougerose alla tirer le verrou, et elle s'attendait à voir entrer un pauvre homme, quand un ours passa sa grosse tête noire par la porte entr’ouverte.",
        position: { bottom: '38%', left: '18%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Rougerose s'enfuit en poussant des cris; l'agneau se mit à bêler, la colombe à voler par toute la chambre , et Blancheneige courut se cacher derrière le lit de sa mère.",
        position: { top: '75%', left: '78%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "L'ours réchauffé",
    imageUrl: 'assets/pictures/slide9.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Mais l'ours leur dit : « Ne craignez rien ; je ne vous ferai pas de mal ; je vous demande seulement la permission de me chauffer un peu, car je suis à moitié gelé. — Approche-toi du feu, pauvre ours, répondit la mère ; prend garde seulement de brûler ta fourrure.» Puis elle appela : « Blancheneige, Rougerose,. revenez ; l'ours ne vous fera pas de mal, il n'a que de bonnes intentions. »",
        position: { bottom: '35%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Elles revinrent toutes-deux, et peu à peu l'agneau et la tourterelle s'approchèrent aussi et oublièrent leur frayeur. L'ours dit : « Enfants, secouez un peu la neige qui est sur mon dos ! » Elles prirent le balai et lui nettoyèrent toute la peau; puis il s'étendit devant le feu en faisant des grognements d'aise et de satisfaction.",
        position: { top: '70%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "Tout le monde joue",
    imageUrl: 'assets/pictures/slide10.png',
    backgroundColor: '#faf5e5',
     textElements: [
      {
        content: "Elles ne tardèrent pas à se rassurer tout à fait et même à jouer avec cet hôte inattendu. Elles lui tiraient le poil ; elles lui montaient sur le dos, le roulaient dans la chambre, lui donnaient de petits coups de baguette, et, quand il grognait, elles éclataient de rire.",
        position: { bottom: '47%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "L'ours se laissait faire ; seulement, quand le jeu allait trop loin, il leur disait : « Laissez-moi vivre ; ne tuez pas votre prétendu. » Quand on alla se coucher, la mère lui dit: «Reste là, passe la nuit devant le feu ; au moins tu seras à l'abri du froid et du mauvais temps.» ",
        position: { top: '70%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "Sortie de l'ours",
    imageUrl: 'assets/pictures/slide11.png',
    backgroundColor: '#faf5e5',
       textElements: [
      {
        content: "Dès l'aurore , les petites filles lui ouvrirent la porte, et il s'en alla dans le bois en trottant sur la neige.",
        position: { bottom: '47%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "A partir de ce jour, il revint chaque soir à la même heure ; il s'étendait devant le feu et les enfants jouaient avec lui tant qu'elles voulaient. On était tellement accoutumé à sa présence qu'on ne mettait pas le verrou à la porte avant qu'il fût arrivé.",
        position: { top: '70%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "L'ours parle !",
    imageUrl: 'assets/pictures/slide12.png',
    backgroundColor: '#faf5e5',
        textElements: [
      {
        content: "Quand le printemps fut de retour et que tout fut vert au dehors, l'ours dit un matin à Blancheneige : « Je m'en vais et je ne reviendrai pas de l'été. — Où vas-tu donc, cher ours? demanda Blancheneige.",
        position: { bottom: '47%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "— Je vais dans le bois ; il faut que je garde mes trésors contre les méchants nains. L'hiver, quand la terre est gelée, ils sont forcés de rester dans leurs trous sans pouvoir se frayer un passage ; mais, à présent que le soleil a réchauffé la terre, ils vont sortir pour aller à la maraude. Ce qu'ils ont pris et caché dans leurs trous ne revient pas aisément à la lumière ! » ",
        position: { top: '70%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "Début du printemps",
    imageUrl: 'assets/pictures/slide13.png',
    backgroundColor: '#faf5e5',
           textElements: [
      {
        content: "Blancheneige était toute triste du départ de l'ours; quand elle lui ouvrit là porte, il s'écorcha un peu en passant contre le loquet ; elle crut avoir vu briller de l'or sous sa peau , mais elle n'en était pas bien sûre. L'ours partit au plus vite, et disparut bientôt derrière les arbres.",
        position: { bottom: '30%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
    ]
  },
   {
    id: 15,
    title: 'Le tronc abattu',
    imageUrl: 'assets/pictures/slide14.png',
    backgroundColor: '#faf5e5',
            textElements: [
      {
        content: "Quelque temps après, la mère ayant envoyé ses filles ramasser du bois mort dans la forêt, elles virent un grand arbre abattu, et quelque chose qui s'agitait ça et là dans l'herbe près du tronc, sans qu'on pût bien distinguer ce que c'était.",
        position: { bottom: '47%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "En approchant, elles reconnurent que c'était un petit nain au visage vieux et ridé, avec une barbe blanche longue d'une aune. La barbe était prise dans une fente de l'arbre et le nain sautillait comme un jeune chien après une ficelle, sans pouvoir la dégager.",
        position: { top: '70%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'La rencontre du nain',
    imageUrl: 'assets/pictures/slide15.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Il fixa des yeux ardents sur les deux petites et leur cria : «Que faites-vous là plantées, plutôt que de venir à mon secours ? — Pauvre petit homme, demanda Rougerose, comment t'es-tu ainsi pris au piège ? — Sotte curieuse, répliqua le nain, je voulais fendre cet arbre, afin d'avoir du petit bois en éclats pour ma cuisine ; car nos plats sont mignons et les grosses bûches les brûleraient ; nous ne nous crevons pas de mangeaille comme votre engeance grossière et goulue. ",
        position: { bottom: '20%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "J'avais donc déjà introduit mon coin dans le bois, mais ce maudit coin était trop glissant ; il a sauté au moment où je m'y attendais le moins, et le tronc s'est refermé si vite que je n'ai pas eu le temps de retirer ma belle barbe blanche ; maintenant elle est prise et je ne peux plus la ravoir. Les voilà qui se mettent à rire, les niaises figures de crème ! Fi, que vous êtes laides !»",
        position: { top: '70%', left: '75%' },
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
    title: 'A bat la barbe!',
    imageUrl: 'assets/pictures/slide16.png',
    backgroundColor: '#faf5e5',
     textElements: [
      {
        content: "Les enfants eurent beau se donner du mal, elles ne purent dégager la barbe, qui tenait comme dans un étau. « Je cours, chercher du monde, dit Rougerose. — Appeler du monde ! s'écria le nain de sa voix rauque ; vous êtes déjà trop de vous deux, imbéciles bourriques! ",
        position: { bottom: '47%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "— Un peu de patience, dit Blancheneige, nous allons vous tirer d'affaire. » Et sortant de sa poche ses petits ciseaux , elle coupa le bout de la barbe. ",
        position: { top: '70%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'Le sac du nain',
    imageUrl: 'assets/pictures/slide17.png',
    backgroundColor: '#faf5e5',
         textElements: [
      {
        content: "Dès que le nain fut libre, il alla prendre un sac plein d'or qui était caché dans les racines de l'arbre, en murmurant : Grossières créatures que ces enfants ! couper un bout de ma barbe magnifique ! Que le diable vous récompense. »",
        position: { bottom: '47%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Puis il mit le sac sur son dos, et s'en alla sans seulement les regarder.",
        position: { top: '70%', left: '75%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "L'emmêlage",
    imageUrl: 'assets/pictures/slide18.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "A quelques mois de là, les deux sœurs allèrent un jour pêcher un plat de poisson. En approchant de la rivière, elles aperçurent une espèce de grosse sauterelle, qui sautait au bord de l'eau comme si elle avait voulu s'y jeter. Elles accoururent et reconnurent le nain. «Qu'as-tu donc ? dit Rougerose; est-ce que tu veux te jeter à l'eau? ",
        position: { bottom: '35%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "— Pas si bête, s'écria le nain ; ne voyez-vous pas que c'est ce maudit poisson qui veut m'entraîner? » Il avait jeté sa ligne ; mais malheureusement le vent avait mêlé sa barbe avec le fil; et quelques instants après, quand un gros poisson vint mordre à l'appât, les forces de la faible créature ne suffirent pas à le tirer de l'eau; le poisson avait le dessus et attirait à lui le nain. Il avait beau se retenir aux joncs et aux herbes de la rive, le poisson l'entraînait et il était en danger de tomber à l'eau. ",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'le sauvetage',
    imageUrl: 'assets/pictures/slide19.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Les petites arrivèrent à temps pour le retenir, et elles essayèrent de dégager sa barbe, mais ce fut en vain, tant elle était mêlée avec le fil. Il fallut encore avoir recours aux ciseaux et en couper un tout petit bout. Dès que le nain s'en aperçut, il s'écria avec colère : « Est-ce votre habitude, sottes brutes, de défigurer ainsi les gens ? Ce n'est pas assez de m'avoir écourté la barbe une première fois, il faut aujourd'hui que vous m'en coupiez la moitié : je n'oserai plus me montrer à mes frères.",
        position: { bottom: '20%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: " Puissiez-vous courir sans souliers et vous écorelier : les pieds! » Et prenant un sac de perles qui était caché dans les roseaux, il le traîna après lui, sans ajouter un seul mot, et disparut aussitôt derrière une pierre.",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "L'enlèvement",
    imageUrl: 'assets/pictures/slide20.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Peu de temps après, la mère envoya ses filles à la ville pour acheter du fil, des aiguilles et des rubans. Il leur fallait passer par une lande parsemée de gros rochers.",
        position: { bottom: '60%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Elles aperçurent un grand oiseau qui planait en l'air, et qui, après avoir longtemps tourné au-dessus de leurs têtes tout en descendant peu à peu, finit par fondre brusquement sur le sol. En même temps on entendait des cris perçants et lamentables. Elles accoururent et virent avec effroi un aigle qui tenait dans ses serres leur vieille connaissance le nain, et qui cherchait à l'enlever.",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'Le rattrapage du nain',
    imageUrl: 'assets/pictures/slide21.png',
    backgroundColor: '#faf5e5',
        textElements: [
      {
        content: "Les petites filles, dans la bonté de leur cœur, retinrent le nain de toutes leurs forces et se débattirent si bien contre l'aigle qu'il finit par lâcher sa proie.",
        position: { bottom: '60%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Mais quand le nain fut un peu remis de sa frayeur il leur cria de sa voix glapissante : « Ne pouviez vous pas vous y prendre un peu moins rudement? Vous avez si bien tiré sur ma pauvre robe qu'elle est maintenant en lambeaux, petites rustres maladroites que vous êtes ! » Puis il prit son sac plein de pierres précieuses et se glissa dans son trou au milieu des rochers.",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'Fin de journée',
    imageUrl: 'assets/pictures/slide22.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Les petites étaient accoutumées à son ingratitude : elles se remirent en chemin et allèrent faire leurs emplettes à la ville. En repassant par la lande à leur retour, elles surprirent le nain qui avait vidé devant lui son sac de pierres précieuses, ne songeant pas que personne dût passer par là si tard.",
        position: { bottom: '40%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Le soleil couchant éclairait les pierreries, qui lançaient des feux si merveilleux que les petites s'arrêtèrent immobiles à les considérer.",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: "Rencontre avec l'ours et le nain",
    imageUrl: 'assets/pictures/slide23.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "« Pourquoi restez-vous là à bayer aux corneilles ? » leur dit-il ; et son visage ordinairement gris était rouge de colère. Il allait continuer ses injures, quand on entendit un grognement terrible, et un ours noir sortit du bois.",
        position: { bottom: '50%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Le nain plein d'effroi voulait fuir, mais il n'eut pas le temps de regagner sa cachette : l'ours lui barra le chemin.",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'A genoux !',
    imageUrl: 'assets/pictures/slide24.png',
    backgroundColor: '#faf5e5',
        textElements: [
      {
        content: "« Alors il le supplia avec un accent désespéré : « Cher seigneur ours, épargnez-moi et je vous donnerai tous mes trésors, tous ces joyaux que vous voyez devant vous.",
        position: { bottom: '50%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Accordez-moi la vie : que gagneriez-vous à tuer un misérable nain comme moi? Vous ne me sentiriez pas sous vos dents. Prenez plutôt ces deux maudites petites filles; ce sont deux bons morceaux, gras comme des cailles; croquez-les, au nom de Dieu. »",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'La fin du nain',
    imageUrl: 'assets/pictures/slide25.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Mais l'ours, sans l'écouter, donna à cette méchante créature un seul coup de patte qui retendit roide mort.",
        position: { bottom: '60%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "Les petites s'étaient sauvées; mais l'ours leur cria: « Blancheneige, Rougerose, n'ayez pas peur; attendez-moi. »",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'La fin de la malédiction',
    imageUrl: 'assets/pictures/slide26.png',
    backgroundColor: '#faf5e5',
    textElements: [
      {
        content: "Elles reconnurent sa voix et s'arrêtèrent, et, quand il fut près d'elles, sa peau d'ours tomba tout à coup et elles virent un beau jeune homme, tout revêtu d'habits dorés.",
        position: { bottom: '60%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: " «Je suis prince, leur dit-il; cet infâme nain m'avait changé en ours, après m'avoir volé mes trésors; il m'avait condamné à courir les bois sous cette forme, et je ne pouvais être délivré que par sa mort. Maintenant il a reçu le prix de sa méchanceté.»",
        position: { top: '70%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'Le rosier royal',
    imageUrl: 'assets/pictures/slide27.png',
    backgroundColor: '#faf5e5',
        textElements: [
      {
        content: "Blancheneige épousa le prince et Rougerose épousa son frère ; ils partagèrent entre eux les grands trésors que le nain avait amassés dans son trou.",
        position: { bottom: '60%', left: '25%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '30%'
        }
      },
      {
        content: "La vieille mère vécut encore de longues années, tranquille et heureuse près de ses enfants. Elle prit les deux rosiers et les plaça sur sa fenêtre : ils portaient chaque été les plus belles roses, blanches et rouges. »",
        position: { top: '80%', left: '72%' },
        style: {
          fontSize: '1.3rem',
          color: '#ffffff',
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
    title: 'Fin du récit',
    imageUrl: 'assets/pictures/Arriere.png',
    backgroundColor: '#f7f6d7ff',
    textElements: [
    ]
  },
];