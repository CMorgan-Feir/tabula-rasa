'use strict'

const db = require('../server/db')
const {User, Artworks} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cy@art.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)

  //products
  const artworks = await Promise.all([
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Untitled IV (Green Paintings)',
      price: 50,
      year: 1986,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/cy-twombly-white-bg.png'
    }),
    Artworks.create({
      artist: 'Helen Frankenthaler',
      title: 'Painted on 21st Street',
      price: 60,
      year: 1950,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/helen-f-2.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Untitled',
      price: 70,
      year: 1954,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-untitled-white.png'
    }),
    Artworks.create({
      artist: 'Helen Frankenthaler',
      title: 'Mountains and Sea',
      price: 30,
      year: 1952,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/helen-frank.png'
    }),
    Artworks.create({
      artist: 'Sally Mann',
      title: 'Remembered Light, Untitled (Flamingo and Blinds',
      price: 30,
      year: 2012,
      genre: 'photograph',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/sally-mann.png'
    }),
    Artworks.create({
      artist: 'Taryn Simon',
      title: 'Folder: Express Highways',
      price: 40,
      year: 2012,
      genre: 'photograph',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/taryn-simon.png'
    }),
    Artworks.create({
      artist: 'Jonas Wood',
      title: 'Black and Grey Clipping',
      price: 30,
      year: 2017,
      genre: 'botanical',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/jonas-wood.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Untitled (The Song of the Border-Guard)',
      price: 50,
      year: 1952,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-scribble.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Natural History, Part I: Mushrooms, no. X',
      price: 50,
      year: 1974,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-collage.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: '1986',
      price: 60,
      year: 1986,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-red.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Roman Notes III',
      price: 55,
      year: 1970,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-blue-scribble.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Untitled, from On the Bowery',
      price: 50,
      year: 1969,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-grey-loops.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Untitled',
      price: 75,
      year: 1971,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-postcards.png'
    }),
    Artworks.create({
      artist: 'Cy Twombly',
      title: 'Untitled',
      price: 50,
      year: 2004,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/cy-twombly-drips.png'
    }),
    Artworks.create({
      artist: 'Ysabel Lemay',
      title: 'Wish',
      price: 45,
      year: 2018,
      genre: 'botanical',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/lemay-wish.png'
    }),
    Artworks.create({
      artist: 'Burt Glinn',
      title: 'Duke of Rutland Drinks Champagne at Belvoir Castle, England',
      price: 35,
      year: 1959,
      genre: 'photograph',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/glinn-photo.png'
    }),
    Artworks.create({
      artist: 'Alexander Liberman',
      title: 'The Artist in His Studio and Alberto Giacometti',
      price: 40,
      year: 1960,
      genre: 'photograph',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/liberman-artist.png'
    }),
    Artworks.create({
      artist: 'Edward Steichen',
      title: 'Wheelbarrow with Flower Pots, France',
      price: 50,
      year: 1920,
      genre: 'photograph',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/stiechen-pots.png'
    }),
    Artworks.create({
      artist: 'Mario Giacomelli',
      title: 'Ho la testa piena mamma',
      price: 55,
      year: 1985,
      genre: 'photograph',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/giacomelli.png'
    }),
    Artworks.create({
      artist: 'Peter Schmersal',
      title: 'Kirschzweige',
      price: 45,
      year: 2018,
      genre: 'botanical',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/schmersal-flower.png'
    }),
    Artworks.create({
      artist: 'Andy Warhol',
      title: 'Flowers (Blue)',
      price: 50,
      year: 1970,
      genre: 'botanical',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/warhol-flower.png'
    }),
    Artworks.create({
      artist: 'Henri Matisse',
      title: 'Nu Bleu II (Blue Nude II)',
      price: 60,
      year: 2007,
      genre: 'abstract',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/matisse-blue-nude.png'
    }),
    Artworks.create({
      artist: "Georgia O'Keeffe",
      title: 'Two Calla Lilies on Pink',
      price: 95,
      year: 1928,
      genre: 'botanical',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/okeefe-flower.png'
    }),
    Artworks.create({
      artist: 'Gustav Klimt',
      title: 'Flower Garden',
      price: 50,
      year: 1905,
      genre: 'botanical',
      image:
        'https://morganfeir.s3.us-east-2.amazonaws.com/images/db-paintings/klimt-flower.png'
    })
  ])
  console.log(`seeded ${artworks.length} artworks`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
