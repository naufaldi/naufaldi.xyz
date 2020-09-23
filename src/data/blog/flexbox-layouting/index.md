---
category: 'blog'
cover: './flexbox.jpg'
title: 'Mengenal Flexbox untuk Layouting'
description: 'Studi Kasus Flexbox untuk membuat Komponen beberapa contoh'
date: '2020-06-27'
tags: ['css', 'studi kasus']
published: true
---



## Studi Kasus Flexbox untuk membuat Komponen

![Flexbox](./flexbox.jpg)

Saya mencoba untuk menuliskan kembali apa yang telah saya pelajari setelah menonton video dari FrontendMaster, kursusnya bisa dicek disini [CSS Grids & Flexbox](https://frontendmasters.com/courses/css-grids-flexbox/). Benar kalau kursusnya dibagi menjadi dua bagian, yaitu mengenai Flexbox dan CSS Grid. Namun, saya mencoba merangkumnya berdasarkan materi pertama yaitu mengenai Flexbox. 

### Pengenalan Flexbox
Flexbox digunakan untuk layouting sebuah komponen, walaupun dalam video pembahasannya dikatakan tidak untuk seluruh pages. penggunaan flexbox memang direkomendasikan untuk komponen-komponen misalnya seperti navigation, sidebar, atau komponen lainnya.

Untuk bisa membuat Flexbox bekerja, memerlukan sebuah container Flexbox dengan menuliskan kode
```
.container-flexbox {
  display: flex;
}
``` 
### Latihan Flexbox
Untuk menguji seberapa dalam pemahaman kita mengenai Flexbox, ada rekomendasi situs untuk mencoba mempelajarinya. Misalnya :
- FlexboxFroggy: http://flexboxfroggy.com/
- Flexbox Defense: http://www.flexboxdefense.com/

### Flexbox Property
Flexbox Property menurut saya dibedakan menjadi 2, yaitu Flexbox Property untuk parent dan child. Rekomendasi Cheatseat mengenai Flexbox bisa dilihat pada CSS Trick berikut : [CSS Trick Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Flexbox Parent 
Syntax Flexbox Parent atau bsia disebut Flex Container diaplikasikan kepada div / tag yang dijadikan sebagai parent misalnya saja :

- **Flex Direction** :   flex-direction: row | row-reverse | column | column-reverse;
-  *flex-wrap* : nowrap | wrap | wrap-reverse;
- *flex-flow* : column wrap;
- *justify-content* : flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
- *align-items* : stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
- *align-content* : flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;

