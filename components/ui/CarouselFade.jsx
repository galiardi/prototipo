import Link from 'next/link';
import Image from 'next/legacy/image';
import Carousel from 'react-bootstrap/Carousel';

const elements = [
  {
    id: '1',
    title: 'Ahorro',
    imgUrl: '/ahorro.jpeg',
    url: '/ahorro',
  },
  {
    id: '2',
    title: 'Inversión',
    imgUrl: '/inversion2.webp',
    url: '/inversion',
  },
  {
    id: '3',
    title: 'Vivienda',
    imgUrl: '/vivienda.jpg',
    url: '/vivienda',
  },
  {
    id: '4',
    title: 'Previsión',
    imgUrl: '/prevision.avif',
    url: 'prevision',
  },
];

export const CarouselFade = () => {
  return (
    <Carousel fade>
      {elements.map((element, i) => {
        return (
          <Carousel.Item key={element.id}>
            <Link href={element.url}>
              <Image
                className="d-block w-100"
                src={element.imgUrl}
                alt={element.title}
                width={557}
                height={418}
                priority={i === 0}
              />
              <Carousel.Caption>
                <p style={{ fontWeight: 'bold' }}>{element.title}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
