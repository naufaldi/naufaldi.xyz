import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';
export const Project = styled.section`
  ${tw` border-b border-indigo-100 py-8 sm:py-16`};
`;

export const Grid = styled.div`
${tw`flex -mx-6 mt-4  flex-wrap w-full mx-auto flex-col md:flex-row`}
`;
export const Box = styled.div`
${tw`flex w-1/2 h-auto px-6 my-8 w-full md:w-6/12`}
`;
export const Porto = styled.div`
${tw`flex flex-col w-full bg-gray-300 text-center p-6 overflow-hidden`}
`;
export const Head = styled.h1`
${tw`font-semibold text-xl  `}
`;
export const Link = styled.a`
${tw` cursor-pointer outline-none mb-2  text-pink-500 `}
`;
export const SubHead = styled.p`
${tw` text-base mb-4 `}
`;
export const Img = styled.div`
${tw` h-40 w-auto mt-8 `}
`;
export const More = styled.div`
${tw`w-full justify-end flex px-6`}
`;

export const Readmore = motion.custom(styled(Link)`
  ${tw`relative text-indigo-900 border-b border-transparent hover:text-indigo-900 ml-0 sm:ml-8 mt-3 sm:mt-0`};
  width: max-content;

  &.active {
    ${tw`border-pink-500`};
  }

  &:before {
    ${tw`absolute w-full bg-pink-500 h-px left-0 invisible`};
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover:before {
    ${tw`visible`};
    transform: scaleX(1);
  }
`);