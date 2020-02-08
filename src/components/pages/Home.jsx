import React from "react"
import Article from '../templates/Article.jsx'

export default () => {
  return (
    <div>
      <Article
        headerContent='J’accuse…!'
        sections={[
          {
            headerContent: "Lettre à M. Félix Faure, Président de la République",
            paragraphs: [
              { content: "Monsieur le Président", },
              { content: "Me permettez-vous, dans ma gratitude pour le bienveillant accueil que vous m’avez fait un jour, d’avoir le souci de votre juste gloire et de vous dire que votre étoile, si heureuse jusqu’ici, est menacée de la plus honteuse, de la plus ineffaçable des taches?" },
              { content: "Vous êtes sorti sain et sauf des basses calomnies, vous avez conquis les cœurs. Vous apparaissez rayonnant dans l’apothéose de cette fête patriotique que l’alliance russe a été pour la France, et vous vous préparez à présider au solennel triomphe de notre Exposition Universelle, qui couronnera notre grand siècle de travail, de vérité et de liberté. Mais quelle tache de boue sur votre nom — j’allais dire sur votre règne — que cette abominable affaire Dreyfus ! Un conseil de guerre vient, par ordre, d’oser acquitter un Esterhazy, soufflet suprême à toute vérité, à toute justice. Et c’est fini, la France a sur la joue cette souillure, l’histoire écrira que c’est sous votre présidence qu’un tel crime social a pu être commis." },
              { content: "Puisqu’ils ont osé, j’oserai aussi, moi. La vérité, je la dirai, car j’ai promis de la dire, si la justice, régulièrement saisie, ne la faisait pas, pleine et entière. Mon devoir est de parler, je ne veux pas être complice. Mes nuits seraient hantées par le spectre de l’innocent qui expie là-bas, dans la plus affreuse des tortures, un crime qu’il n’a pas commis." },
              { content: "Et c’est à vous, monsieur le Président, que je la crierai, cette vérité, de toute la force de ma révolte d’honnête homme. Pour votre honneur, je suis convaincu que vous l’ignorez. Et à qui donc dénoncerai-je la tourbe malfaisante des vrais coupables, si ce n’est à vous, le premier magistrat du pays?"},
              {
                image: {
                  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png',
                  width: 100,
                  height: 100
                },
                content: 'Image with text.'
              }
            ]
          }
        ]}
        footerContent={
          { author: 'Émile Zola' }
        }
      />
    </div>
  )
}
