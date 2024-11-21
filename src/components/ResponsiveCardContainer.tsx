import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CARD_WIDTH = 320; // Width of each card in pixels

interface Props {
  cards: React.ReactNode[];
}

export default function ResponsiveCardsContainer({ cards }: Props) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCardsWidth = cards.length * CARD_WIDTH;
  const shouldUseCarousel = totalCardsWidth > windowWidth;

  const cardWrapperClass =
    'animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards';

  if (shouldUseCarousel) {
    return (
      <Carousel className="w-full max-w-[295px] sm:max-w-xs">
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index} className={cardWrapperClass}>
              <div className="p-1">{card}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  return (
    <div className="flex flex-row gap-4 justify-center">
      {cards.map((card, index) => (
        <div key={index} className={`p-1 ${cardWrapperClass}`}>
          {card}
        </div>
      ))}
    </div>
  );
}
