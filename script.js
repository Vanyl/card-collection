const switchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
<path fill="currentColor" d="M10.04 20.4H7.12c-.93 0-1.82-.4-2.48-1.04C4 18.7 3.6 17.81 3.6 16.88V7.12c0-.93.4-1.82 1.04-2.48C5.3 4 6.19 3.62 7.12 3.62h2.92zM7.12 2A5.12 5.12 0 0 0 2 7.12v9.76C2 19.71 4.29 22 7.12 22h4.53V2zM5.11 8c0 1.04.84 1.88 1.89 1.88c1.03 0 1.87-.84 1.87-1.88S8.03 6.12 7 6.12c-1.05 0-1.89.84-1.89 1.88m12.5 3c1.11 0 2.01.89 2.01 2c0 1.12-.9 2-2.01 2c-1.11 0-2.03-.88-2.03-2c0-1.11.92-2 2.03-2m-.73 11A5.12 5.12 0 0 0 22 16.88V7.12C22 4.29 19.71 2 16.88 2h-3.23v20z"/>
</svg>`
const steamIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.005 2c-5.25 0-9.556 4.05-9.964 9.198l5.36 2.214a2.823 2.823 0 0 1 1.593-.491c.053 0 .105.003.157.005l2.384-3.452v-.049c0-2.08 1.69-3.77 3.77-3.77a3.776 3.776 0 0 1 3.77 3.773c0 2.08-1.691 3.77-3.77 3.77h-.087l-3.397 2.426c0 .043.003.088.003.133A2.826 2.826 0 0 1 9 18.587a2.844 2.844 0 0 1-2.775-2.273l-3.838-1.589C3.574 18.923 7.428 22 12.006 22c5.522 0 9.998-4.477 9.998-10c0-5.522-4.477-10-9.999-10M7.08 16.667c.218.452.595.832 1.095 1.041a2.126 2.126 0 0 0 2.78-2.77a2.123 2.123 0 0 0-2.712-1.178l1.269.526a1.565 1.565 0 0 1-1.204 2.889zm10.74-7.245a2.516 2.516 0 0 0-2.513-2.512a2.513 2.513 0 1 0 2.513 2.512M15.312 7.53A1.89 1.89 0 0 1 17.2 9.418a1.89 1.89 0 0 1-1.888 1.888a1.887 1.887 0 1 1 0-3.776"/></svg>`
const psIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.585 17.011c-.43.543-1.483.93-1.483.93l-7.832 2.817V18.68l5.764-2.057c.654-.234.754-.566.223-.74c-.531-.175-1.492-.125-2.147.111l-3.84 1.354v-2.155l.221-.076s1.11-.393 2.67-.566c1.561-.172 3.472.024 4.972.593c1.69.535 1.88 1.323 1.452 1.866m-8.57-3.537V8.162c0-.624-.115-1.198-.7-1.36c-.447-.144-.725.272-.725.895V21l-3.583-1.139V4c1.523.283 3.743.953 4.936 1.355c3.035 1.043 4.064 2.342 4.064 5.267c0 2.851-1.758 3.932-3.992 2.852m-11.583 4.99c-1.736-.49-2.025-1.51-1.234-2.097c.731-.542 1.975-.95 1.975-.95l5.138-1.83v2.086l-3.698 1.325c-.653.234-.753.566-.223.74c.532.175 1.493.125 2.147-.11l1.774-.644v1.865l-.354.06c-1.774.29-3.663.169-5.525-.445"/></svg>`
const xboxIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 9.235c2.907 2.946 4.956 6.4 6.668 10.217A9.963 9.963 0 0 1 12 22a9.963 9.963 0 0 1-6.668-2.548C7.044 15.635 9.092 12.181 12 9.235M5.509 4.393a27.892 27.892 0 0 1 5.033 3.472c-2.886 2.934-4.96 6.314-6.667 9.966A9.954 9.954 0 0 1 2 12a9.978 9.978 0 0 1 3.509-7.607m12.982 0A9.978 9.978 0 0 1 22 12c0 2.176-.695 4.19-1.875 5.83c-1.707-3.651-3.781-7.03-6.667-9.965a27.895 27.895 0 0 1 5.033-3.472M12 2c1.675 0 3.254.412 4.641 1.14A29.47 29.47 0 0 0 12 6.483A29.472 29.472 0 0 0 7.359 3.14A9.957 9.957 0 0 1 12 2"/></g></svg>`


const games = [
    {
      name: 'Unicorn Overlord',
      editor: 'SEGA',
      developer: 'Vanillaware',
      pictureKey: 'unicorn.png',
      genre: ['Tactical-RPG'],
      platforms : [
        {
          icon: switchIcon, 
          url: 'https://www.nintendo.com/us/store/products/unicorn-overlord-switch'},
        {
          icon: psIcon, 
          url: 'https://store.playstation.com/en-us/concept/10002780'
        },
        {
          icon: xboxIcon,
          url: 'https://www.xbox.com/en-us/games/store/unicorn-overlord/9pl8s8wjz1lf'
        }
      ],
    },
    {
        name: '13 Sentinels: Aegis Rim',
        editor: 'SEGA',
        developer: 'Vanillaware',
        pictureKey: '13sentinels.jpg',
        genre: ['Aventure Simulation'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/13-sentinels-aegis-rim-switch/'},
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP0177-CUSA19610_00-BSTUBCUSA1961000'
          }
        ],
      },
      {
        name: 'Little Goody Two Shoes',
        editor: 'Square Enix',
        developer: 'AstralShift',
        pictureKey: 'little-goody-two-shoes.jpg',
        genre: ['RPG', 'Aventure', 'Visual Novel'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/little-goody-two-shoes-switch'},
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/1812370/Little_Goody_Two_Shoes/'
          },
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP0082-PPSA13878_00-0344569418657428'
          },
          {
            icon: xboxIcon,
            url: 'https://www.xbox.com/en-us/games/store/little-goody-two-shoes/9nhsqlc84g6b'
          }
        ],
      },
      {
        name: 'Persona 5 Royal',
        editor: 'SEGA',
        developer: 'SEGA Atlus P-Studio',
        pictureKey: 'persona-5-royal.jpg',
        genre: ['RPG'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/persona-5-royal-switch'},
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/1687950/Persona_5_Royal/'
          },
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP0177-PPSA05109_00-P5RGAME000000000'
          },
          {
            icon: xboxIcon,
            url: 'https://www.xbox.com/en-US/games/store/persona-5-royal/9NZDHXL9SJJ8'
          }
        ],
      },
      {
        name: 'A Short Hike',
        editor: 'Whippoorwill',
        developer: 'Adam Robinson-Yu',
        pictureKey: 'shorthike.jpg',
        genre: ['Aventure'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/a-short-hike-switch/'},
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/1055540/A_Short_Hike/'
          },
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP7124-CUSA29611_00-5721900664542776'
          },
          {
            icon: xboxIcon,
            url: 'https://www.xbox.com/en-us/games/store/a-short-hike/9NK78DF207SD'
          }
        ],
      },
      {
        name: 'Final Fantasy XII : The Zodiac Age',
        editor: 'Square Enix',
        developer: 'Square Enix',
        pictureKey: 'ffxii.jpg',
        genre: ['RPG'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/final-fantasy-xii-the-zodiac-age-switch/'},
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/595520/FINAL_FANTASY_XII_THE_ZODIAC_AGE/'
          },
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP0082-CUSA05532_00-FFXIIGAMEPS400NA'
          },
          {
            icon: xboxIcon,
            url: 'https://www.xbox.com/en-us/games/store/final-fantasy-xii-the-zodiac-age/bxdh919m16g9'
          }
        ],
      },
      {
        name: 'Sea of Thieves',
        editor: 'Xbox Game Studios',
        developer: 'Rare',
        pictureKey: 'sea.png',
        genre: ['Aventure', 'Online'],
        platforms : [
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/1172620/Sea_of_Thieves_2023_Edition/'
          },
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP6312-PPSA17669_00-MINERVA000000000'
          },
          {
            icon: xboxIcon,
            url: 'https://www.xbox.com/en-US/play/games/sea-of-thieves-2024-edition/9P2N57MC619K'
          }
        ],
      },
      {
        name: 'Paranormasight',
        editor: 'Square Enix',
        developer: 'xeen Inc. Square Enix',
        pictureKey: 'paranorma.jpg',
        genre: ['Aventure', 'Visual Novel'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/paranormasight-the-seven-mysteries-of-honjo-switch/'},
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/2106840/PARANORMASIGHT_The_Seven_Mysteries_of_Honjo/'
          }
        ],
      },
      {
        name: 'Phoenix Wright: Ace Attorney Trilogy',
        editor: 'Capcom',
        developer: 'Capcom',
        pictureKey: 'phoenix.jpg',
        genre: ['Aventure', 'Visual Novel'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/phoenix-wright-ace-attorney-trilogy-switch/'},
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/787480/Phoenix_Wright_Ace_Attorney_Trilogy/'
          },
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP0102-CUSA11513_00-AAT123FULLGAME00'
          },
          {
            icon: xboxIcon,
            url: 'https://www.xbox.com/en-US/play/games/phoenix-wright-ace-attorney-trilogy/C4R4RB3SB1NN'
          }
        ],
      },
      {
        name: 'The Legend of Zelda : Tears of the Kingdom',
        editor: 'Nintendo',
        developer: 'Nintendo',
        pictureKey: 'zelda.png',
        genre: ['Aventure', 'Action'],
        platforms : [
          {
            icon: switchIcon, 
            url: 'https://www.nintendo.com/us/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/'
          }
        ],
      },
      {
        name: `Baldur's Gate 3`,
        editor: 'Larian Studios',
        developer: 'Larian Studios',
        pictureKey: 'baldurs-gate.jpg',
        genre: ['Aventure', 'RPG'],
        platforms : [
          {
            icon: steamIcon,
            url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'
          },
          {
            icon: psIcon, 
            url: 'https://store.playstation.com/en-us/product/UP3526-PPSA14001_00-0507384846053057'
          },
          {
            icon: xboxIcon,
            url: 'https://www.xbox.com/fr-FR/games/store/baldurs-gate-3/9nd58lqtg09t'
          }
        ],
      }
]
let main = document.querySelector("main");

games.forEach(game => {
    const card = document.createElement("div");
    card.className = 'card';
    main.appendChild(card);

    const img = document.createElement('img');
    img.src = 'imgs/' + game.pictureKey;
    img.className = 'image'; //img.classList.add('image) more easy to manipulate
    card.appendChild(img);

    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'tags';
    card.appendChild(tagsContainer);

    const tagsColor = ['#cdb4db', '#ffafcc', '#a2d2ff']
    const genre = game.genre;

    genre.forEach((tag, i) => {
        const genreTag = document.createElement('h3');
        genreTag.className = 'tagsVisual';
        genreTag.innerText = tag;
        genreTag.style.backgroundColor = tagsColor[i]
        tagsContainer.appendChild(genreTag);
    })

    const title = document.createElement('h1');
    title.textContent = game.name;
    card.appendChild(title);

    const editor = document.createElement('p');
    editor.textContent = game.editor;
    card.appendChild(editor);

    const developer = document.createElement('p');
    developer.textContent = game.developer;
    card.appendChild(developer);

    const hr = document.createElement('hr');
    card.appendChild(hr);

    const platformIcon = document.createElement('div');
    platformIcon.className = 'platform-icon';
    
    game.platforms.forEach(platform => {
        const icon = document.createElement('a');
        icon.innerHTML = platform.icon;
        icon.target= "_blank";
        icon.style.color = 'grey';
        icon.href = platform.url;
        platformIcon.appendChild(icon);
    });
    
    card.appendChild(platformIcon);
});