import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Project = styled.section`
  ${tw` border-b border-indigo-100 py-8 sm:py-16`};
`;

export const Grid = styled.div`
${tw`flex -mx-6 mt-4 mb-8 flex-wrap w-full mx-auto flex-col md:flex-row`}
`;
export const Box = styled.div`
${tw`flex w-1/2 h-auto px-6 my-8 w-full md:w-auto`}
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