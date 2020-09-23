import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-900 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
  .format-html > h2 {
  ${tw`text-3xl font-black mt-16 mb-8`};
  }

.format-html > h3 {
  ${tw`text-2xl font-black mt-16 mb-8`} ;
}

.format-html > h4 {
  ${tw`font-black uppercase mt-16 mb-8`}  ;
}

.format-html > h5 {
  ${tw`text-sm font-black mt-16 mb-8`}  ;
}

.format-html > h6 {
  ${tw`text-xs font-black mt-16 mb-8`}  ;
}

.format-html a {
  ${tw`text-blue-600`}  ;
}


.format-html > p {
  ${tw`my-6`}  ;
}
.format-html > hr {
  ${tw`w-1/3 ml-auto mr-auto mb-4 mt-8`}  ;
}

.format-html > blockquote {
  ${tw`-ml-8 mb-8`}  ;
}

.format-html ul {
  ${tw`list-disc ml-4`}  ;
}

.format-html ol {
  ${tw`list-decimal mb-8 pl-8`} ;
}


`;
