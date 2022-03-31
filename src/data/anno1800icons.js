/**
 * Map the Anno icons to our Anno-1800-Calculator assets.
 * GUID: "icon/path.png"
 */
export default {
  /*
   * Populations
   */
  populationLevels: {
    paramsKeys: ['populationLevels'],
    data: [
      { guid: 15000000, iconPath: '/population/farmers.webp' }, // Farmers
      { guid: 15000001, iconPath: '/population/workers.webp' }, // Workers
      { guid: 15000002, iconPath: '/population/artisans.webp' }, // Artisans
      { guid: 15000003, iconPath: '/population/engineers.webp' }, // Engineers
      { guid: 15000004, iconPath: '/population/investors.webp' }, // Investors
      { guid: 15000005, iconPath: '/population/jornaleros.webp' }, // Jornaleros
      { guid: 15000006, iconPath: '/population/obreros.webp' }, // Obreros
      { guid: 601379, iconPath: '/population/tourists.webp' }, // Tourists
      { guid: 112642, iconPath: '/population/explorers.webp' }, // Explorers
      { guid: 112643, iconPath: '/population/technicians.webp' }, // Technicians
      { guid: 114329, iconPath: '/population/shepherd.webp' }, // Shepherds
      { guid: 114330, iconPath: '/population/elders.webp' }, // Elders
      { guid: 118745, iconPath: '/population/scholars.webp' } // Scholars
    ]
  },
  /*
   * Regions
   */
  regions: {
    paramsKeys: ['regions'],
    data: [

      { guid: 5000000, iconPath: '/regions/the-old-world.webp' },
      { guid: 5000001, iconPath: '/regions/the-new-world.webp' },
      { guid: 160001, iconPath: '/regions/the-arctic.webp' },
      { guid: 114327, iconPath: '/regions/enbesa.webp' }
    ]
  },

  factories: {
    paramsKeys: ['factories', 'products'],
    data: [

      { guid: 1010278, product: 1010200, iconPath: '/buildings/farmers/fish.webp' },
      { guid: 1010294, product: 1010216, iconPath: '/buildings/farmers/schnapps.webp' },
      { guid: 1010315, product: 1010237, iconPath: '/buildings/farmers/work-clothes.webp' },
      { guid: 1010283, product: 1010205, iconPath: '/buildings/workers/bricks.webp' },
      { guid: 1010316, product: 1010238, iconPath: '/buildings/workers/sausages.webp' },
      { guid: 1010288, product: 1010210, iconPath: '/buildings/workers/sails.webp' },
      { guid: 1010291, product: 1010213, iconPath: '/buildings/workers/bread.webp' },
      { guid: 1010281, product: 1010203, iconPath: '/buildings/workers/soap.webp' },
      { guid: 1010296, product: 1010218, iconPath: '/buildings/workers/steel.webp' },
      { guid: 1010299, product: 1010221, iconPath: '/buildings/workers/weapons.webp' },
      { guid: 1010292, product: 1010214, iconPath: '/buildings/workers/beer.webp' },
      { guid: 1010285, product: 1010207, iconPath: '/buildings/artisans/windows.webp' },
      { guid: 1010295, product: 1010217, iconPath: '/buildings/artisans/goulash.webp' },
      { guid: 1010284, product: 1010206, iconPath: '/buildings/artisans/sewing-machines.webp' },
      { guid: 1010325, product: 1010247, iconPath: '/buildings/artisans/fur-coats.webp' },
      { guid: 1010280, product: 1010202, iconPath: '/buildings/engineers/reinforced-concrete.webp' },
      { guid: 1010301, product: 1010223, iconPath: '/buildings/engineers/advanced-weapons.webp' },
      { guid: 1010323, product: 1010245, iconPath: '/buildings/engineers/high-wheeler.webp' },
      { guid: 1010302, product: 1010224, iconPath: '/buildings/engineers/steam-motors.webp' },
      { guid: 1010324, product: 1010246, iconPath: '/buildings/engineers/pocket-watch.webp' },
      { guid: 1010286, product: 1010208, iconPath: '/buildings/engineers/light-bulb.webp' },
      { guid: 1010328, product: 1010250, iconPath: '/buildings/investors/jewelry.webp' },
      { guid: 1010326, product: 1010248, iconPath: '/buildings/investors/gramophone.webp' },
      { guid: 1010303, product: 1010225, iconPath: '/buildings/investors/steam-carriages.webp' },
      { guid: 1010342, product: 1010259, iconPath: '/buildings/obreros/cigars.webp' },
      { guid: 1010341, product: 1010258, iconPath: '/buildings/obreros/chocolate.webp' },
      { guid: 1010340, product: 1010257, iconPath: '/buildings/jornaleros/rum.webp' },
      { guid: 100451, product: 1010196, iconPath: '/buildings/farmers/timber.webp' },
      { guid: 101250, product: 120030, iconPath: '/buildings/engineers/glasses.webp' },
      { guid: 100659, product: 120016, iconPath: '/buildings/investors/champagne.webp' },
      { guid: 133496, product: 133183, iconPath: 'question-mark.png' },
      { guid: 132786, product: 133181, iconPath: 'question-mark.png' },
      { guid: 132777, product: 133185, iconPath: 'question-mark.png' },
      { guid: 133533, product: 133532, iconPath: 'question-mark.png' },
      { guid: 118733, product: 114428, iconPath: '/buildings/scholars/leather-shoes.webp' },
      { guid: 118734, product: 114430, iconPath: '/buildings/scholars/suits.webp' },
      { guid: 118735, product: 114431, iconPath: '/buildings/scholars/telephones.webp' },
      { guid: 124738, product: 120032, iconPath: '/buildings/scholars/coffee.webp' },
      { guid: 124737, product: 1010257, iconPath: '/buildings/scholars/rum.webp' },
      { guid: 124739, product: 1010240, iconPath: '/buildings/scholars/cotton-fabric.webp' },
      { guid: 101261, product: 1010196, iconPath: '/buildings/jornaleros/timber.webp' },
      { guid: 101264, product: 120033, iconPath: '/buildings/jornaleros/fried-plantains.webp' },
      { guid: 101265, product: 1010210, iconPath: '/buildings/jornaleros/sails.webp' },
      { guid: 101266, product: 120043, iconPath: '/buildings/jornaleros/poncho.webp' },
      { guid: 101268, product: 1010205, iconPath: '/buildings/obreros/bricks.webp' },
      { guid: 101271, product: 120035, iconPath: '/buildings/obreros/tortilla.webp' },
      { guid: 101251, product: 120031, iconPath: '/buildings/obreros/coffee.webp' },
      { guid: 101273, product: 120037, iconPath: '/buildings/obreros/bowler-hats.webp' },
      { guid: 114704, product: 1010196, iconPath: '/buildings/explorers/timber.webp' },
      { guid: 112668, product: 112705, iconPath: '/buildings/explorers/pemmican-cookhouse.webp' },
      { guid: 112675, product: 112701, iconPath: '/buildings/explorers/sleeping-bag-factory.webp' },
      { guid: 112679, product: 112702, iconPath: '/buildings/explorers/oil-lamp-factory.webp' },
      { guid: 112672, product: 112700, iconPath: '/buildings/technicians/parka-factory.webp' },
      { guid: 112680, product: 112703, iconPath: '/buildings/technicians/husky-sled-factory.webp' },
      { guid: 114456, product: 114371, iconPath: '/buildings/shepherds/goat-milk.webp' },
      { guid: 114466, product: 114401, iconPath: '/buildings/shepherds/traditional-clothing.webp' },
      { guid: 114444, product: 114359, iconPath: '/buildings/shepherds/dried-meat.webp' },
      { guid: 114468, product: 114390, iconPath: '/buildings/shepherds/hibiscus-tea.webp' },
      { guid: 114467, product: 114402, iconPath: '/buildings/elders/mud-bricks.webp' },
      { guid: 118725, product: 118724, iconPath: '/buildings/elders/ceramics.webp' },
      { guid: 114469, product: 114404, iconPath: '/buildings/elders/tapestries.webp' },
      { guid: 114471, product: 114410, iconPath: '/buildings/elders/wat-stew.webp' },
      { guid: 114472, product: 114414, iconPath: '/buildings/elders/tobacco-pipes.webp' },
      { guid: 114470, product: 117698, iconPath: '/buildings/elders/scriptures.webp' },
      { guid: 114464, product: 117699, iconPath: '/buildings/elders/lanterns.webp' }
    ]
  },

  upkeep:
  {
    paramsKeys: ['products', 'workforce'],
    data: [
      { guid: 1010017, iconPath: '/icons/balance.webp' },
      { guid: 1010052, iconPath: '/icons/workforce-farmers.webp' },
      { guid: 1010115, iconPath: '/icons/workforce-workers.webp' },
      { guid: 1010116, iconPath: '/icons/workforce-artisans.webp' },
      { guid: 1010117, iconPath: '/icons/workforce-engineers.webp' },
      { guid: 124478, iconPath: '/icons/workforce-scholars.webp' },
      { guid: 1010128, iconPath: 'question-mark.png' }, // Investors
      { guid: 132723, iconPath: 'question-mark.png' }, // Tourists
      { guid: 1010366, iconPath: '/icons/workforce-jornaleros.webp' },
      { guid: 1010367, iconPath: '/icons/workforce-obreros.webp' },
      { guid: 112653, iconPath: '/icons/workforce-explorers.webp' },
      { guid: 114340, iconPath: '/icons/workforce-shepherds.webp' },
      { guid: 114341, iconPath: '/icons/workforce-elders.webp' }
    ]
  },

  misc: {
    paramsKeys: ['products'],
    data: [
      { guid: 1010017, iconPath: '/icons/icons-credit.webp' }, // Money
      { guid: 1010190, iconPath: '/buildings/workers/influence.webp' }
    ]
  },

  placeholder: {
    paramsKeys: [''],
    data: []
  },

  products: {
    paramsKeys: ['products'],
    data: [
      {
        guid: 120021,
        iconPath: '/buildings/artisans/coal.webp',
        alternativeIconPath: '/buildings/workers/charcoal-kiln.webp',
        productFilter: 0,
        name: 'Coal'
      },
      {
        guid: 120020,
        iconPath: '/buildings/farmers/marketplace.webp',
        productFilter: 0,
        name: 'Market'
      },
      {
        guid: 1010349,
        iconPath: '/buildings/farmers/pub.webp',
        productFilter: 0,
        name: 'Pub'
      },
      {
        guid: 1010350,
        iconPath: '/buildings/workers/church.webp',
        productFilter: 0,
        name: 'Church'
      },
      {
        guid: 1010351,
        iconPath: '/buildings/workers/school.webp',
        productFilter: 0,
        name: 'School'
      },
      {
        guid: 1010352,
        iconPath: '/buildings/artisans/variety-theatre.webp',
        productFilter: 0,
        name: 'Variety Theatre'
      },
      {
        guid: 1010353,
        iconPath: '/buildings/artisans/university.webp',
        productFilter: 0,
        name: 'University'
      },
      {
        guid: 1010354,
        iconPath: 'buildings/engineers/oil-power-plant.webp',
        productFilter: 0,
        name: 'Electricity'
      },
      {
        guid: 1010355,
        iconPath: '/buildings/investors/members-club.webp',
        productFilter: 0,
        name: 'Members Club'
      },
      {
        guid: 1010356,
        iconPath: '/buildings/engineers/bank.webp',
        productFilter: 0,
        name: 'Bank'
      },
      {
        guid: 120050,
        iconPath: '/buildings/jornaleros/church.webp',
        productFilter: 0,
        name: 'Chapel'
      },
      {
        guid: 1010348,
        iconPath: '/buildings/obreros/boxing-arena.webp',
        productFilter: 0,
        name: 'Boxing Arena'
      },
      {
        guid: 112708,
        iconPath: '/buildings/explorers/heater.webp',
        productFilter: 0,
        name: 'Heat'
      },
      {
        guid: 112693,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Post Office'
      },
      {
        guid: 114890,
        iconPath: '/buildings/explorers/canteen.webp',
        productFilter: 0,
        name: 'Canteen'
      },
      {
        guid: 269751,
        iconPath: '/buildings/engineers/fuel.webp',
        productFilter: 0,
        name: 'Fuel'
      },
      {
        guid: 270042,
        iconPath: '/buildings/engineers/fuel.webp',
        productFilter: 502046,
        name: 'Fuel'
      },
      {
        guid: 133891,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Tourist Mooring'
      },
      {
        guid: 132751,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Restaurant'
      },
      {
        guid: 132754,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Bar'
      },
      {
        guid: 132755,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Café'
      },
      {
        guid: 133573,
        iconPath: '/buildings/artisans/variety-theatre.webp',
        productFilter: 0,
        name: 'Variety Theatre'
      },
      {
        guid: 601485,
        iconPath: '/buildings/obreros/zoo.webp',
        productFilter: 0,
        name: 'Zoo'
      },
      {
        guid: 133535,
        iconPath: '/buildings/obreros/museum.webp',
        productFilter: 0,
        name: 'Museum'
      },
      {
        guid: 355,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Botanical Garden'
      },
      {
        guid: 134257,
        iconPath: '/buildings/investors/palace.webp',
        productFilter: 0,
        name: 'Palace'
      },
      {
        guid: 132761,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'The Iron Tower'
      },
      {
        guid: 133536,
        iconPath: 'not_found',
        productFilter: 0,
        name: "World's Fair"
      },
      {
        guid: 134781,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Docklands'
      },
      {
        guid: 137757,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Skyline Tower'
      },
      {
        guid: 135108,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Department Store'
      },
      {
        guid: 135107,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Furniture Store'
      },
      {
        guid: 135109,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Drug Store'
      },
      {
        guid: 1010192,
        iconPath: '/buildings/workers/grain.webp',
        productFilter: 502040,
        name: 'Grain'
      },
      {
        guid: 1010193,
        iconPath: '/buildings/obreros/beef.webp',
        productFilter: 502040,
        name: 'Beef'
      },
      {
        guid: 1010194,
        iconPath: '/buildings/workers/hops.webp',
        productFilter: 502040,
        name: 'Hops'
      },
      {
        guid: 1010195,
        iconPath: 'not_found',
        productFilter: 502040,
        name: 'Potatoes'
      },
      {
        guid: 120008,
        iconPath: '/buildings/farmers/wood.webp',
        productFilter: 502052,
        name: 'Wood'
      },
      {
        guid: 1010197,
        iconPath: '/buildings/farmers/wool.webp',
        productFilter: 502040,
        name: 'Wool'
      },
      {
        guid: 1010199,
        iconPath: '/buildings/workers/pigs.webp',
        productFilter: 502040,
        name: 'Pigs'
      },
      {
        guid: 1010209,
        iconPath: '/buildings/artisans/furs.webp',
        productFilter: 502040,
        name: 'Furs'
      },
      {
        guid: 120014,
        iconPath: '/buildings/investors/grapes.webp',
        productFilter: 502040,
        name: 'Grapes'
      },
      {
        guid: 1010198,
        iconPath: '/buildings/artisans/red-peppers.webp',
        productFilter: 502040,
        name: 'Red Peppers'
      },
      {
        guid: 1010200,
        iconPath: '/buildings/farmers/fish.webp',
        productFilter: 502031,
        name: 'Fish'
      },
      {
        guid: 1010232,
        iconPath: '/buildings/engineers/saltpeter.webp',
        productFilter: 502052,
        name: 'Saltpeter'
      },
      {
        guid: 1010228,
        iconPath: '/buildings/artisans/quartz-sand.webp',
        productFilter: 502052,
        name: 'Quartz Sand'
      },
      {
        guid: 1010202,
        iconPath: '/buildings/obreros/reinforced-concrete.webp',
        productFilter: 501957,
        name: 'Reinforced Concrete'
      },
      {
        guid: 1010203,
        iconPath: '/buildings/workers/soap.webp',
        productFilter: 502031,
        name: 'Soap'
      },
      {
        guid: 1010196,
        iconPath: '/buildings/farmers/timber.webp',
        productFilter: 501957,
        name: 'Timber'
      },
      {
        guid: 1010205,
        iconPath: '/buildings/obreros/bricks.webp',
        productFilter: 501957,
        name: 'Bricks'
      },
      {
        guid: 1010247,
        iconPath: '/buildings/artisans/fur-coats.webp',
        productFilter: 502031,
        name: 'Fur Coats'
      },
      {
        guid: 1010207,
        iconPath: '/buildings/artisans/windows.webp',
        productFilter: 501957,
        name: 'Windows'
      },
      {
        guid: 1010208,
        iconPath: '/buildings/engineers/light-bulb.webp',
        productFilter: 502031,
        name: 'Light Bulbs'
      },
      {
        guid: 1010210,
        iconPath: '/buildings/workers/sails.webp',
        productFilter: 501957,
        name: 'Sails'
      },
      {
        guid: 1010211,
        iconPath: '/buildings/investors/chassis.webp',
        productFilter: 502046,
        name: 'Chassis'
      },
      {
        guid: 1010201,
        iconPath: '/buildings/elders/clay.webp',
        productFilter: 502052,
        name: 'Clay'
      },
      {
        guid: 1010206,
        iconPath: '/buildings/artisans/sewing-machines.webp',
        productFilter: 502031,
        name: 'Sewing Machines'
      },
      {
        guid: 1010213,
        iconPath: '/buildings/workers/bread.webp',
        productFilter: 502031,
        name: 'Bread'
      },
      {
        guid: 1010214,
        iconPath: '/buildings/workers/beer.webp',
        productFilter: 502031,
        name: 'Beer'
      },
      {
        guid: 1010215,
        iconPath: '/buildings/artisans/goulash.webp',
        productFilter: 502046,
        name: 'Goulash'
      },
      {
        guid: 1010217,
        iconPath: '/buildings/artisans/canned-food.webp',
        productFilter: 502031,
        name: 'Canned Food'
      },
      {
        guid: 1010216,
        iconPath: '/buildings/farmers/schnapps.webp',
        productFilter: 502031,
        name: 'Schnapps'
      },
      {
        guid: 1010238,
        iconPath: '/buildings/workers/sausages.webp',
        productFilter: 502031,
        name: 'Sausages'
      },
      {
        guid: 120016,
        iconPath: '/buildings/investors/champagne.webp',
        productFilter: 502031,
        name: 'Champagne'
      },
      {
        guid: 1010218,
        iconPath: '/buildings/workers/steel-beams.webp',
        productFilter: 501957,
        name: 'Steel Beams'
      },
      {
        guid: 1010219,
        iconPath: '/buildings/workers/steel.webp',
        productFilter: 502046,
        name: 'Steel'
      },
      {
        guid: 1010221,
        iconPath: '/buildings/workers/weapons.webp',
        productFilter: 501957,
        name: 'Weapons'
      },
      {
        guid: 1010222,
        iconPath: '/buildings/engineers/dynamite.webp',
        productFilter: 502046,
        name: 'Dynamite'
      },
      {
        guid: 1010223,
        iconPath: '/buildings/engineers/advanced-weapons.webp',
        productFilter: 501957,
        name: 'Advanced Weapons'
      },
      {
        guid: 1010224,
        iconPath: '/buildings/engineers/steam-motors.webp',
        productFilter: 502046,
        name: 'Steam Motors'
      },
      {
        guid: 1010225,
        iconPath: '/buildings/investors/steam-carriages.webp',
        productFilter: 502031,
        name: 'Steam Carriages'
      },
      {
        guid: 1010204,
        iconPath: '/buildings/engineers/brass.webp',
        productFilter: 502046,
        name: 'Brass'
      },
      {
        guid: 1010226,
        iconPath: '/buildings/artisans/coal.webp',
        alternativeIconPath: '/buildings/explorers/charcoal-kiln.webp',
        productFilter: 502052,
        name: 'Coal'
      },
      {
        guid: 1010227,
        iconPath: '/buildings/workers/iron.webp',
        productFilter: 502052,
        name: 'Iron'
      },
      {
        guid: 1010229,
        iconPath: '/buildings/engineers/zinc.webp',
        productFilter: 502052,
        name: 'Zinc'
      },
      {
        guid: 1010230,
        iconPath: '/buildings/engineers/copper.webp',
        productFilter: 502052,
        name: 'Copper'
      },
      {
        guid: 1010231,
        iconPath: '/buildings/engineers/cement.webp',
        productFilter: 502052,
        name: 'Cement'
      },
      {
        guid: 1010233,
        iconPath: '/buildings/obreros/gold-ore.webp',
        productFilter: 502052,
        name: 'Gold Ore'
      },
      {
        guid: 1010234,
        iconPath: '/buildings/workers/tallow.webp',
        productFilter: 502046,
        name: 'Tallow'
      },
      {
        guid: 1010235,
        iconPath: '/buildings/workers/flour.webp',
        productFilter: 502046,
        name: 'Flour'
      },
      {
        guid: 1010236,
        iconPath: '/buildings/workers/malt.webp',
        productFilter: 502046,
        name: 'Malt'
      },
      {
        guid: 1010237,
        iconPath: '/buildings/farmers/work-clothes.webp',
        productFilter: 502031,
        name: 'Work Clothes'
      },
      {
        guid: 1010241,
        iconPath: '/buildings/artisans/glass.webp',
        productFilter: 502046,
        name: 'Glass'
      },
      {
        guid: 1010242,
        iconPath: '/buildings/obreros/wood-veneers.webp',
        productFilter: 502046,
        name: 'Wood Veneers'
      },
      {
        guid: 1010243,
        iconPath: '/buildings/engineers/carbon-filament.webp',
        productFilter: 502046,
        name: 'Filaments'
      },
      {
        guid: 1010245,
        iconPath: '/buildings/engineers/high-wheeler.webp',
        productFilter: 502031,
        name: 'Penny Farthings'
      },
      {
        guid: 1010246,
        iconPath: '/buildings/engineers/pocket-watch.webp',
        productFilter: 502031,
        name: 'Pocket Watches'
      },
      {
        guid: 120030,
        iconPath: '/buildings/engineers/glasses.webp',
        productFilter: 502031,
        name: 'Spectacles'
      },
      {
        guid: 1010248,
        iconPath: '/buildings/investors/gramophone.webp',
        productFilter: 502031,
        name: 'Gramophones'
      },
      {
        guid: 1010249,
        iconPath: '/buildings/engineers/gold.webp',
        productFilter: 502046,
        name: 'Gold'
      },
      {
        guid: 1010250,
        iconPath: '/buildings/investors/jewelry.webp',
        productFilter: 502031,
        name: 'Jewelry'
      },
      {
        guid: 1010251,
        iconPath: 'not_found',
        productFilter: 502040,
        name: 'Sugar Cane'
      },
      {
        guid: 1010252,
        iconPath: '/buildings/obreros/tobacco.webp',
        productFilter: 502040,
        name: 'Tobacco'
      },
      {
        guid: 1010253,
        iconPath: '/buildings/artisans/cotton.webp',
        productFilter: 502040,
        name: 'Cotton'
      },
      {
        guid: 1010254,
        iconPath: '/buildings/obreros/cocoa.webp',
        productFilter: 502040,
        name: 'Cocoa'
      },
      {
        guid: 1010255,
        iconPath: '/buildings/engineers/caoutchouc.webp',
        productFilter: 502040,
        name: 'Caoutchouc'
      },
      {
        guid: 120031,
        iconPath: '/buildings/obreros/coffee-beans.webp',
        productFilter: 502040,
        name: 'Coffee Beans'
      },
      {
        guid: 120034,
        iconPath: '/buildings/obreros/corn.webp',
        productFilter: 502040,
        name: 'Corn'
      },
      {
        guid: 120036,
        iconPath: '/buildings/jornaleros/alpaca-wool.webp',
        productFilter: 502040,
        name: 'Alpaca Wool'
      },
      {
        guid: 120041,
        iconPath: '/buildings/jornaleros/plantains.webp',
        productFilter: 502040,
        name: 'Plantains'
      },
      {
        guid: 1010256,
        iconPath: '/buildings/jornaleros/pearls.webp',
        productFilter: 502052,
        name: 'Pearls'
      },
      {
        guid: 120042,
        iconPath: '/buildings/jornaleros/fish-oil.webp',
        productFilter: 502040,
        name: 'Fish Oil'
      },
      {
        guid: 120043,
        iconPath: '/buildings/jornaleros/poncho.webp',
        productFilter: 502031,
        name: 'Ponchos'
      },
      {
        guid: 120044,
        iconPath: '/buildings/obreros/felt.webp',
        productFilter: 502046,
        name: 'Felt'
      },
      {
        guid: 120037,
        iconPath: '/buildings/obreros/bowler-hats.webp',
        productFilter: 502031,
        name: 'Bombins'
      },
      {
        guid: 1010257,
        iconPath: '/buildings/artisans/rum.webp',
        productFilter: 502031,
        name: 'Rum'
      },
      {
        guid: 1010258,
        iconPath: '/buildings/obreros/chocolate.webp',
        productFilter: 502031,
        name: 'Chocolate'
      },
      {
        guid: 120032,
        iconPath: '/buildings/obreros/coffee.webp',
        productFilter: 502031,
        name: 'Coffee'
      },
      {
        guid: 120033,
        iconPath: '/buildings/jornaleros/fried-plantains.webp',
        productFilter: 502031,
        name: 'Fried Plantains'
      },
      {
        guid: 120035,
        iconPath: '/buildings/obreros/tortilla.webp',
        productFilter: 502031,
        name: 'Tortillas'
      },
      {
        guid: 1010239,
        iconPath: '/buildings/obreros/sugar.webp',
        productFilter: 502046,
        name: 'Sugar'
      },
      {
        guid: 1010240,
        iconPath: '/buildings/jornaleros/cotton-fabric.webp',
        productFilter: 502046,
        name: 'Cotton Fabric'
      },
      {
        guid: 1010259,
        iconPath: '/buildings/obreros/cigars.webp',
        productFilter: 502031,
        name: 'Cigars'
      },
      {
        guid: 112694,
        iconPath: '/buildings/explorers/caribou-hunting-cabin.webp',
        productFilter: 502040,
        name: 'Caribou Meat'
      },
      {
        guid: 112697,
        iconPath: '/buildings/explorers/goose-farm.webp',
        productFilter: 502040,
        name: 'Goose Feathers'
      },
      {
        guid: 112695,
        iconPath: '/buildings/technicians/bear-hunting-cabin.webp',
        productFilter: 502040,
        name: 'Bear Fur'
      },
      {
        guid: 112698,
        iconPath: '/buildings/technicians/husky-farm.webp',
        productFilter: 502040,
        name: 'Huskies'
      },
      {
        guid: 112699,
        iconPath: '/buildings/explorers/whaling-station.webp',
        productFilter: 502040,
        name: 'Whale Oil'
      },
      {
        guid: 112696,
        iconPath: '/buildings/explorers/seal-hunting-docks.webp',
        productFilter: 502040,
        name: 'Seal Skin'
      },
      {
        guid: 112705,
        iconPath: '/buildings/explorers/pemmican-cookhouse.webp',
        productFilter: 502031,
        name: 'Pemmican'
      },
      {
        guid: 112702,
        iconPath: '/buildings/explorers/oil-lamp-factory.webp',
        productFilter: 502031,
        name: 'Oil Lamps'
      },
      {
        guid: 112701,
        iconPath: '/buildings/explorers/sleeping-bag-factory.webp',
        productFilter: 502031,
        name: 'Sleeping Bags'
      },
      {
        guid: 112700,
        iconPath: '/buildings/technicians/parka-factory.webp',
        productFilter: 502031,
        name: 'Parkas'
      },
      {
        guid: 112704,
        iconPath: 'buildings/technicians/sled-frame-factory.webp',
        productFilter: 502046,
        name: 'Sleds'
      },
      {
        guid: 112703,
        iconPath: 'buildings/technicians/husky-sled-factory.webp',
        productFilter: 502031,
        name: 'Husky Sleds'
      },
      {
        guid: 112706,
        iconPath: '/buildings/technicians/gas-mine.webp',
        productFilter: 502052,
        name: 'Gas'
      },
      {
        guid: 115980,
        iconPath: 'not_found',
        productFilter: 501957,
        name: 'Lost Expedition Scrap'
      },
      {
        guid: 114355,
        iconPath: '/buildings/farmers/marketplace.webp',
        productFilter: 0,
        name: 'Marketplace'
      },
      {
        guid: 114361,
        iconPath: '/buildings/shepherds/music-plaza.webp',
        productFilter: 0,
        name: "Musicians' Court"
      },
      {
        guid: 114362,
        iconPath: '/buildings/elders/monastery.webp',
        productFilter: 0,
        name: 'Monastery'
      },
      {
        guid: 114425,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Radio Tower'
      },
      {
        guid: 114356,
        iconPath: '/buildings/shepherds/wanza-wood.webp',
        productFilter: 501957,
        name: 'Wanza Timber'
      },
      {
        guid: 114364,
        iconPath: '/buildings/shepherds/hibiscus-farm.webp',
        productFilter: 502040,
        name: 'Hibiscus Petals'
      },
      {
        guid: 114365,
        iconPath: '/buildings/shepherds/linen-farm.webp',
        productFilter: 502040,
        name: 'Linseed'
      },
      {
        guid: 114367,
        iconPath: '/buildings/elders/teff-grass.webp',
        productFilter: 502040,
        name: 'Teff'
      },
      {
        guid: 114368,
        iconPath: '/buildings/elders/indigo.webp',
        productFilter: 502040,
        name: 'Indigo Dye'
      },
      {
        guid: 114369,
        iconPath: '/buildings/elders/spices.webp',
        productFilter: 502040,
        name: 'Spices'
      },
      {
        guid: 114370,
        iconPath: '/buildings/elders/beeswax.webp',
        productFilter: 502040,
        name: 'Beeswax'
      },
      {
        guid: 114357,
        iconPath: '/buildings/shepherds/watusi.webp',
        productFilter: 502040,
        name: 'Sanga Cow'
      },
      {
        guid: 114371,
        iconPath: '/buildings/shepherds/goat-milk.webp',
        productFilter: 502031,
        name: 'Goat Milk'
      },
      {
        guid: 114358,
        iconPath: '/buildings/shepherds/salt.webp',
        productFilter: 502040,
        name: 'Salt'
      },
      {
        guid: 117702,
        iconPath: '/buildings/elders/paper.webp',
        productFilter: 502046,
        name: 'Paper'
      },
      {
        guid: 118728,
        iconPath: 'not_found',
        productFilter: 502040,
        name: 'Lobster'
      },
      {
        guid: 114391,
        iconPath: '/buildings/shepherds/linen-farm.webp',
        productFilter: 502046,
        name: 'Linen'
      },
      {
        guid: 114408,
        iconPath: '/buildings/elders/teff-flour.webp',
        productFilter: 502046,
        name: 'Spiced Flour'
      },
      {
        guid: 117701,
        iconPath: '/buildings/elders/candles.webp',
        productFilter: 502046,
        name: 'Ornate Candles'
      },
      {
        guid: 114429,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Ammunition'
      },
      {
        guid: 114433,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Essential Oil'
      },
      {
        guid: 114427,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Decorative Cloth'
      },
      {
        guid: 114359,
        iconPath: '/buildings/shepherds/dried-meat.webp',
        productFilter: 502031,
        name: 'Dried Meat'
      },
      {
        guid: 114401,
        iconPath: '/buildings/shepherds/traditional-clothing.webp',
        productFilter: 502031,
        name: 'Finery'
      },
      {
        guid: 114390,
        iconPath: '/buildings/shepherds/hibiscus-tea.webp',
        productFilter: 502031,
        name: 'Hibiscus Tea'
      },
      {
        guid: 114402,
        iconPath: '/buildings/elders/mud-bricks.webp',
        productFilter: 501957,
        name: 'Mud Bricks'
      },
      {
        guid: 118724,
        iconPath: '/buildings/elders/ceramics.webp',
        productFilter: 502031,
        name: 'Ceramics'
      },
      {
        guid: 114404,
        iconPath: '/buildings/elders/tapestries.webp',
        productFilter: 502031,
        name: 'Tapestries'
      },
      {
        guid: 114410,
        iconPath: '/buildings/elders/wat-stew.webp',
        productFilter: 502031,
        name: 'Seafood Stew'
      },
      {
        guid: 114414,
        iconPath: '/buildings/elders/clay.webp',
        productFilter: 502031,
        name: 'Clay Pipe'
      },
      {
        guid: 117698,
        iconPath: '/buildings/elders/scriptures.webp',
        productFilter: 502031,
        name: 'Illuminated Script'
      },
      {
        guid: 117699,
        iconPath: '/buildings/elders/lanterns.webp',
        productFilter: 502031,
        name: 'Lanterns'
      },
      {
        guid: 114428,
        iconPath: '/buildings/scholars/leather-shoes.webp',
        productFilter: 502031,
        name: 'Leather Boots'
      },
      {
        guid: 114430,
        iconPath: '/buildings/scholars/suits.webp',
        productFilter: 502031,
        name: 'Tailored Suits'
      },
      {
        guid: 114431,
        iconPath: '/buildings/scholars/telephones.webp',
        productFilter: 502031,
        name: 'Telephones'
      },
      {
        guid: 133183,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Jam'
      },
      {
        guid: 133181,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Shampoo'
      },
      {
        guid: 133185,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Lemonade'
      },
      {
        guid: 133532,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Souvenirs'
      },
      {
        guid: 133093,
        iconPath: 'not_found',
        productFilter: 502040,
        name: 'Cinnamon'
      },
      {
        guid: 133095,
        iconPath: 'not_found',
        productFilter: 502040,
        name: 'Coconut Oil'
      },
      {
        guid: 133097,
        iconPath: 'not_found',
        productFilter: 502040,
        name: 'Citrus'
      },
      {
        guid: 134616,
        iconPath: 'not_found',
        productFilter: 502040,
        name: 'Camphor Wax'
      },
      {
        guid: 134623,
        iconPath: 'not_found',
        productFilter: 501957,
        name: 'Elevators'
      },
      {
        guid: 135229,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Biscuits'
      },
      {
        guid: 135230,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Typewriters'
      },
      {
        guid: 135086,
        iconPath: 'not_found',
        productFilter: 502052,
        name: 'Resin'
      },
      {
        guid: 135087,
        iconPath: 'not_found',
        productFilter: 502052,
        name: 'Cherry Wood'
      },
      {
        guid: 135129,
        iconPath: 'not_found',
        productFilter: 502046,
        name: 'Lacquer'
      },
      {
        guid: 135234,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Cognac'
      },
      {
        guid: 135233,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Violins'
      },
      {
        guid: 135232,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Billiard Tables'
      },
      {
        guid: 135231,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Toys'
      },
      {
        guid: 135186,
        iconPath: 'not_found',
        productFilter: 502031,
        name: 'Chewing Gum'
      },
      {
        guid: 135130,
        iconPath: 'not_found',
        productFilter: 502046,
        name: 'Ethanol'
      },
      {
        guid: 135150,
        iconPath: 'not_found',
        productFilter: 502046,
        name: 'Celluloid'
      },
      {
        guid: 135816,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Toaster Supply'
      },
      {
        guid: 135876,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Crockery Supply'
      },
      {
        guid: 135877,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Vaccum Cleaner Supply'
      },
      {
        guid: 135878,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Refrigerator Supply'
      },
      {
        guid: 135879,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Briefcase Supply'
      },
      {
        guid: 135880,
        iconPath: 'not_found',
        productFilter: 0,
        name: "Banker's Lamp Supply"
      },
      {
        guid: 135881,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Vanity Screen Supply'
      },
      {
        guid: 135882,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Writing Desk Supply'
      },
      {
        guid: 135883,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Four-Poster Bed Supply'
      },
      {
        guid: 135884,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Lounge Seating Supply'
      },
      {
        guid: 135885,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Toothpaste Supply'
      },
      {
        guid: 135886,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Detergent Supply'
      },
      {
        guid: 135887,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Lipstick Supply'
      },
      {
        guid: 135888,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Face Cream Supply'
      },
      {
        guid: 135889,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Pomade Supply'
      },
      {
        guid: 132747,
        iconPath: 'not_found',
        productFilter: 0,
        name: "Restaurant: Archduke's Schnitzel"
      },
      {
        guid: 132750,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Restaurant: Stroggof Goulash'
      },
      {
        guid: 133339,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Restaurant: Fish and Frites'
      },
      {
        guid: 133340,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Restaurant: Venison en Croûte'
      },
      {
        guid: 133341,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Restaurant: Lobster Cheminée'
      },
      {
        guid: 132753,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Cafe: Donut Fourré'
      },
      {
        guid: 133347,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Cafe: Eclair'
      },
      {
        guid: 133348,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Cafe: Palmier Biscuit'
      },
      {
        guid: 133349,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Cafe: Venison Tartare'
      },
      {
        guid: 133350,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Cafe: Banana Surprise'
      },
      {
        guid: 132752,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Bar: Daiquiri Tropic'
      },
      {
        guid: 133342,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Bar: Black Muscovy'
      },
      {
        guid: 133343,
        iconPath: 'not_found',
        productFilter: 0,
        name: "Bar: Montmartre '75'"
      },
      {
        guid: 133345,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Bar: Arctic Glogg'
      },
      {
        guid: 133346,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Bar: Enbesa Sunrise'
      },
      {
        guid: 135103,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Department Store: Toasters'
      },
      {
        guid: 135188,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Department Store: Vacuum Cleaners'
      },
      {
        guid: 135187,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Department Store: Crockery'
      },
      {
        guid: 135189,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Department Store: Refrigerators'
      },
      {
        guid: 135190,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Department Store: Briefcases'
      },
      {
        guid: 135105,
        iconPath: 'not_found',
        productFilter: 0,
        name: "Furniture Store: Banker's Lamps"
      },
      {
        guid: 135121,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Furniture Store: Vanity Screens'
      },
      {
        guid: 135120,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Furniture Store: Writing Desks'
      },
      {
        guid: 135122,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Furniture Store: Four-Poster Beds'
      },
      {
        guid: 135123,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Furniture Store: Lounge Seating'
      },
      {
        guid: 134631,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Drug Store: Toothpaste'
      },
      {
        guid: 135191,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Drug Store: Detergent'
      },
      {
        guid: 135192,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Drug Store: Lipstick'
      },
      {
        guid: 135193,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Drug Store: Face Cream'
      },
      {
        guid: 135194,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Drug Store: Pomade'
      },
      {
        guid: 133928,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'The Iron Tower: Brioche Royale '
      },
      {
        guid: 133930,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'The Iron Tower: Trifle Tower'
      },
      {
        guid: 133931,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'The Iron Tower: Lady Marmelade'
      },
      {
        guid: 133932,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'The Iron Tower: Age of Exploration'
      },
      {
        guid: 133933,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'The Iron Tower: Homard sur Lit de Terroir'
      },
      {
        guid: 132780,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Restaurant'
      },
      {
        guid: 132782,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Cafe'
      },
      {
        guid: 132781,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Bar'
      },
      {
        guid: 135100,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Department Store'
      },
      {
        guid: 135099,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Furniture Store'
      },
      {
        guid: 134629,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Drug Store'
      },
      {
        guid: 132770,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'The Iron Tower'
      },
      {
        guid: 601445,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Hotel'
      },
      {
        guid: 1010343,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Farmer Residence'
      },
      {
        guid: 1010344,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Worker Residence'
      },
      {
        guid: 1010345,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Artisan Residence'
      },
      {
        guid: 1010346,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Engineer Residence'
      },
      {
        guid: 1010347,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Investor Residence'
      },
      {
        guid: 101254,
        iconPath: '/buildings/jornaleros/residence.webp',
        productFilter: 0,
        name: 'Jornalero Residence'
      },
      {
        guid: 101255,
        iconPath: '/buildings/jornaleros/residence.webp',
        productFilter: 0,
        name: 'Obrero Residence'
      },
      {
        guid: 112091,
        iconPath: '/buildings/explorers/residence.webp',
        productFilter: 0,
        name: 'Explorer Shelter'
      },
      {
        guid: 112652,
        iconPath: '/buildings/explorers/residence.webp',
        productFilter: 0,
        name: 'Technician Shelter'
      },
      {
        guid: 406,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Skyline Tower'
      },
      {
        guid: 114436,
        iconPath: '/buildings/shepherds/residence.webp',
        productFilter: 0,
        name: 'Shepherd Residence'
      },
      {
        guid: 114437,
        iconPath: '/buildings/shepherds/residence.webp',
        productFilter: 0,
        name: 'Elder Residence'
      },
      {
        guid: 114445,
        iconPath: '/buildings/scholars/residence-scholars.webp',
        productFilter: 0,
        name: 'Scholar Residence'
      },
      {
        guid: 601888,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Engineer Skyscraper: Level 1'
      },
      {
        guid: 601889,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Engineer Skyscraper: Level 2'
      },
      {
        guid: 601890,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Engineer Skyscraper: Level 3'
      },
      {
        guid: 601882,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Investor Skyscraper: Level 1'
      },
      {
        guid: 601883,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Investor Skyscraper: Level 2'
      },
      {
        guid: 601884,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Investor Skyscraper: Level 3'
      },
      {
        guid: 601886,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Investor Skyscraper: Level 4'
      },
      {
        guid: 601891,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Investor Skyscraper: Level 5'
      },
      {
        guid: 601470,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Docklands Main Wharf'
      },
      {
        guid: 1010517,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Small Trading Post'
      },
      {
        guid: 100510,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Medium Trading Post'
      },
      {
        guid: 100511,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Large Trading Post'
      },
      {
        guid: 269867,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Grand Trading Post'
      },
      {
        guid: 1010540,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Small Trading Post'
      },
      {
        guid: 100514,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Medium Trading Post'
      },
      {
        guid: 100515,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Large Trading Post'
      },
      {
        guid: 269879,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Grand Trading Post'
      },
      {
        guid: 100519,
        iconPath: '/buildings/artisans/pier.webp',
        productFilter: 0,
        name: 'Pier'
      },
      {
        guid: 601460,
        iconPath: '/buildings/artisans/pier.webp',
        productFilter: 0,
        name: 'Pier'
      },
      {
        guid: 125028,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Advanced Pier'
      },
      {
        guid: 45,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Sir Archibald Blake'
      },
      {
        guid: 73,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Anne Harlow'
      },
      {
        guid: 76,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Jean La Fortune'
      },
      {
        guid: 29,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Isabel Sarmento'
      },
      {
        guid: 77,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Old Nate'
      },
      {
        guid: 46,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Eli Bleakworth'
      },
      {
        guid: 78,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Madame Kahina'
      },
      {
        guid: 237,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Qumaq'
      },
      {
        guid: 119051,
        iconPath: 'not_found',
        productFilter: 0,
        name: 'Emperor Ketema'
      }
    ]
  }
}
