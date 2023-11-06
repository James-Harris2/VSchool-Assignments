import { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const cards = [
    'src/assets/homeImg.png',
    'src/assets/CouplesExoticVaca.avif',
    'src/assets/NiteTimeOverViewofCity.avif',
  ];

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < cards.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <Box position="relative" height="1000px" width="100vw" overflow="hidden">
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        // transform="translate(0%, -50%)"
        zIndex={2}
        onClick={goToPrevSlide}
      >
        {/* Icon for previous slide */}
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={goToNextSlide}
      >
        {/* Icon for next slide */}
      </IconButton>
      <Box
        height="6xl"
        position="relative"
        background={`url(${cards[currentSlide]}) no-repeat center center/cover`}
      />
    </Box>
  );
}

export default Carousel;
