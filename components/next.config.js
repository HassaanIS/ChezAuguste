module.exports = {
    reactStrictMode: true,  //runs in development mode only
    images: {
        domains: ['img.artistes-sf.org'],
      },
  }
  const rootImg = "https://img.artistes-sf.org/guesthouse";
<Image
     src={rootImg + "image1.svg"}
     alt="ton text"
     width={200}
     height={150}
                  // layout="responsive"
                  // layout="fill"
    object-fit="contain"
/>