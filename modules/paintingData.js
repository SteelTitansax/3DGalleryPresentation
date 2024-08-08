var frontWallTitles=['SBR Simulator', 'Beer Industrial Process Simulator', 'Bubble Column Simulator', 'Nafta Cracking Simulator'];
var frontWallAuthor=['Manuel Portero', 'Manuel Portero', 'Manuel Portero', 'Manuel Portero'];
var frontWallDescription=['SBR Reactor Simulator used for water industrial treatment. Coded with Azure Functions (Python) and Power Platform.', 'Beer Industry Process Simulator, mass and energy balances. Coded with Azure Functions (Python) and Power Platform. ', 'Bubble Column Simulator used for calcium carbonate production.Coded with Azure Functions (Python) and Power Platform. ', 'Nafta Cracking Reactor Simulator.Coded with Azure Functions (Python) and Power Platform.'];
var frontWallYear=['2023', '2023', '2023', '2022'];
var frontWallLink=['https://www.youtube.com/watch?v=o-NajRdfabA','https://www.youtube.com/watch?v=8uKz33knwm8','https://github.com/SteelTitansax/PCC_BFB_Simulator_Solution','https://www.youtube.com/watch?v=LR8g98nH8HI'];

export const paintingData = [
  // Front Wall  
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i}.jpg`, // `i` is the painting number. 
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: frontWallTitles[i],
      artist: frontWallAuthor[i],
      description: frontWallDescription[i],
      year: frontWallYear[i],
      link: frontWallLink[i]
    },
  })) /*,
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Van Gogh ${i + 5}`,
      artist: 'Vincent van Gogh',
      description: `Artwork ${
        i + 5
      } by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year ${i + 5}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 9}`,
      artist: 'Vincent van Gogh',
      description: `With its striking use of color and brushwork, Artwork ${
        i + 9
      } is a testament to Van Gogh's artistic genius.`,
      year: `Year ${i + 9}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 13}`,
      artist: 'Vincent van Gogh',
      description: `Artwork ${
        i + 13
      } is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
      year: `Year ${i + 13}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),*/
];
