import React, { useRef } from 'react';
import ReactBeforeSliderComponent from 'react-node-before-after-slider-component';
import 'react-node-before-after-slider-component/dist/build.css';
import './styles.css'

import frame1Before from '../../images/frame1_before.webp';
import frame1After from '../../images/frame1_after.webp';
import frame2Before from '../../images/frame2_before.webp';
import frame2After from '../../images/frame2_after.webp';
import frame3Before from '../../images/frame3_before.webp';
import frame3After from '../../images/frame3_after.webp';
import frame4Before from '../../images/slider_before.jpg';
import frame4After from '../../images/slider_before.jpg';


import projectImage1 from '../../images/project1.webp';
import projectImage2 from '../../images/project2.webp';


import avatar from '../../images/avatar.webp';
import brazil from '../../images/brazil.png';
import usa from '../../images/usa.png';

import { Projects } from '../projects';
import { AboutMe } from '../about-me';

const MainContent: React.FC = () => {
  const mainElementRef = useRef<any>(null);

  return (
    <main ref={mainElementRef} className='min-h-screen'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='overflow-hidden'>
          <ReactBeforeSliderComponent
            className='slider_content'
            firstImage={{ imageUrl: frame1Before }}
            secondImage={{ imageUrl: frame1After }}
          />
        </div>
        <div className='overflow-hidden'>
          <ReactBeforeSliderComponent
            className='slider_content'
            firstImage={{ imageUrl: frame2Before }}
            secondImage={{ imageUrl: frame2After }}
          />
        </div>
        <div className='overflow-hidden'>
          <ReactBeforeSliderComponent
            className='slider_content'
            firstImage={{ imageUrl: frame3Before }}
            secondImage={{ imageUrl: frame3After }}
          />
        </div>
        <div className='overflow-hidden'>
          <ReactBeforeSliderComponent
            className='slider_content'
            firstImage={{ imageUrl: frame4Before }}
            secondImage={{ imageUrl: frame4After }}
          />
        </div>
      </section>
      <Projects
        projects={[
          {
            image: {
              src: projectImage1,
              fit: 'contain'
            },
            title: 'Antarctica - At the intersection of technology and climate action',
            year: '2022',
            link: 'https://youtu.be/5-yae5axl00',
          },
          {
            image: {
              src: projectImage2,
              fit: 'none'
            },
            title: 'Reserva ad',
            year: '2021',
            link: 'https://www.instagram.com/reel/CRPc-qVJkDw/',
          }
        ]}
      />
      <AboutMe
        avatar={avatar}
        defaultLanguage='en_US'
        description={[
          {
            language: 'pt_BR',
            languageIcon: brazil,
            text: <div>
              <p>Sou um <b>Nuke Compositor e um Motion Designer</b> apaixonado por dar vida à fantasia. Acabei de começar a fazer composição com o Nuke e estou animado para mostrar minhas habilidades com meu primeiro Demo Reel de composição. Com experiência em Motion Design, passei mais de 2 anos criando anúncios de mídia social. Aprendi a <b>superar obstáculos</b> e trabalhar com muita atenção aos detalhes.</p>

              <p>Meu processo criativo é dar vida às minhas ideias. Inspiro-me em tudo o que me rodeia, seja o mais recente sucesso de bilheteira ou a vista da minha janela. Como Nuke Compositor, estou pronto para <b>conquistar o mundo</b> e fazer meu nome na indústria.</p>

              <p>Quando criança, descobri minha paixão por efeitos visuais brincando com o Adobe After Effects (obrigado Andrew Kramer) e criando vídeos para projetos escolares ou apenas para me divertir com os amigos. Agora, como Nuke Compositor, <b>estou ansioso para trazer essa mesma paixão para o meu trabalho.</b></p>

              <p>Quando não estou trabalhando em efeitos visuais e projetos de Motion Design, gosto de fazer algumas outras coisas legais. Sou apaixonado por música e gosto de tocar jazz, principalmente ao piano. Gosto de acompanhar os últimos desenvolvimentos tecnológicos. Também sou cristão e apoio minha igreja local. Valorizo a importância da comunidade e do crescimento pessoal em todos os aspectos da minha vida.</p>

              <p>Estou ansioso pelos novos desafios e experiências que temos pela frente e tenho grandes expectativas sobre o que <b>podemos realizar</b> no futuro.</p>
            </div>
          },
          {
            language: 'en_US',
            languageIcon: usa,
            text: <div>
              <p>I am a <b>Nuke Compositor and Motion Designer</b> with a passion for bringing fantasy to life. I just started Nuke Compositing and I am excited to showcase my skills with my first Nuke demo reel. With a background in motion design, I spent over 2 years creating social media ads. I have learned to <b>overcome obstacles</b> and work with great attention to detail.</p>

              <p>My creative process is all about bringing my ideas to life. I draw inspiration from everything that surrounds me, whether it's the latest blockbuster or the view out my window. As a Nuke Compositor, I am ready to <b>take on the world</b> and make a name for myself in the industry.</p>

              <p>As a kid, I discovered my passion for visual effects by playing around with Adobe After Effects (thanks Andrew Kramer) and creating videos for school projects or just for fun with friends. Now, as a Nuke Compositor, I <b>am looking forward to bringing that same passion into my work.</b></p>

              <p>When I am not working on visual effects and motion design projects, I like to do some cool personal stuff. I have a passion for music and enjoy playing jazz, especially on the piano. I like to keep up with the latest technological developments. I am also a Christian and support my local church. I value the importance of community and personal growth in all aspects of my life.</p>

              <p>I am looking forward to the new challenges and experiences ahead, and I have high expectations for what <b>we can accomplish</b> in the future.</p>
            </div >
          }
        ]}
      />

    </main >
  );
}

export { MainContent };

