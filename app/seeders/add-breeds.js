'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        //Add altering commands here.
        //Return a promise to correctly handle asynchronicity.

        AddBreed: return queryInterface.bulkInsert('Breeds', [{
            "name": "Aberdeen Angus Cross",
            "key": "AAX",
            "createdAt": Sequelize.fn('NOW'),
            "updatedAt": Sequelize.fn('NOW')
        },
            {"name": "Abondance", "key": "AB", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Aberdeen Angus", "key": "AA", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Abondance Cross",
                "key": "ABX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Australian Lowline",
                "key": "ALL",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Australian Lowline Cross",
                "key": "ALLX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Angler Rotvieh", "key": "AR", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Angler Rotvieh Cross",
                "key": "ARX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Ankole", "key": "AN", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Armoricaine", "key": "AM", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Armoricaine Cross",
                "key": "AMX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Aubrac Cross", "key": "AUX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Aubrac", "key": "AU", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Ayrshire", "key": "AY", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Ayrshire Cross",
                "key": "AYX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Baltata Romaneasca",
                "key": "BRO",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Bazadaise", "key": "BAZ", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Bazadaise Cross",
                "key": "BAZX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Beefalo", "key": "BEL", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Beef Shorthorn",
                "key": "BSH",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Beef Shorthorn Cross",
                "key": "BSHX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Belted Dutch", "key": "BD", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Belted Dutch Cross",
                "key": "BDX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Belted Galloway",
                "key": "BG",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Belted Galloway Cross",
                "key": "BGX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Belted Welsh Black",
                "key": "BWB",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Belted Welsh Black Cross",
                "key": "BWBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Bison", "key": "BI", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Blonde D’Aquitaine",
                "key": "BA",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Blonde D’Aquitaine Cross",
                "key": "BAX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Blue Albion", "key": "BAL", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Blue Albion Cross",
                "key": "BALX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Blue Grey", "key": "BLG", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Blue Grey Cross",
                "key": "BLGX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Brahman", "key": "BR", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Brahman Cross", "key": "BRX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Bretonne Pie-Noire",
                "key": "BP",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Bretonne Pie-Noire Cross",
                "key": "BPX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "British Blue", "key": "BRB", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "British Blue Cross",
                "key": "BRBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "British Friesian",
                "key": "BF",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "British Friesian Cross",
                "key": "BFX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "British White", "key": "BW", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "British White Cross",
                "key": "BWX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Brown Swiss Cross",
                "key": "BSX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Brown Swiss", "key": "BS", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Charolais", "key": "CH", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Charolais Cross",
                "key": "CHX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Chianina", "key": "CHI", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Chianina Cross",
                "key": "CHIX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Chillingham", "key": "CHL", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Chillingham Cross",
                "key": "CHLX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Cross Breed Beef",
                "key": "CB",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Cross Breed Dairy",
                "key": "CD",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Coloured Welsh", "key": "CW", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Danish Red", "key": "DR", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Coloured Welsh Cross",
                "key": "CWX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Danish Red Cross",
                "key": "DRX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Dairy Shorthorn",
                "key": "DS",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Dairy Shorthorn Cross",
                "key": "DSX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Devon", "key": "DEV", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Devon Cross", "key": "DEVX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Dexter", "key": "DEX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Dwarf Zebu", "key": "DZE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Dexter Cross", "key": "DEXX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "East Finnish Brown",
                "key": "EFB",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "East Finnish Brown Cross",
                "key": "EFBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "English Park", "key": "EP", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Estonian Red", "key": "ER", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "English Park Cross",
                "key": "EPX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Estonian Red Cross",
                "key": "ERX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Flekvieh", "key": "FKV", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Flekvieh Cross",
                "key": "FKVX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Frisona Espagnola",
                "key": "FE",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Frisona Espagnola Cross",
                "key": "FEX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Gasconne", "key": "GAS", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Gasconne Cross",
                "key": "GASX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Galloway", "key": "GA", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Galloway Cross",
                "key": "GAX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Gelbvieh", "key": "GE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Gelbvieh Cross",
                "key": "GEX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Gloucester", "key": "GL", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Gloucester Cross",
                "key": "GLX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Groninger Blaarkop",
                "key": "GB",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Groninger Blaarkop Cross",
                "key": "GBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Guernsey", "key": "GU", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Guernsey Cross",
                "key": "GUX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Heck", "key": "HK", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Heck Cross", "key": "HKX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Hereford", "key": "HE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Hereford Cross",
                "key": "HEX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Highland", "key": "HI", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Highland Cross",
                "key": "HIX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Holstein", "key": "HO", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Holstein Cross",
                "key": "HOX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Holstein Friesian",
                "key": "HF",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Holstein Friesian Cross",
                "key": "HFX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Hungarian Steppe",
                "key": "HS",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Hungarian Steppe Cross",
                "key": "HSX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Irish Moiled", "key": "IM", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Irish Moiled Cross",
                "key": "IMX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Jersey", "key": "JE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Jersey Cross", "key": "JEX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Kerry", "key": "KE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Kerry Cross", "key": "KEX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Kiwi", "key": "KIWI", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Kiwi Cross", "key": "KIWIX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Lakenvelder", "key": "LV", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Lakenvelder Cross",
                "key": "LVX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Limousin Cross",
                "key": "LIMX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Limousin", "key": "LIM", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Lincoln Red", "key": "LR", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Lincoln Red Cross",
                "key": "LRX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Longhorn", "key": "LH", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Longhorn Cross",
                "key": "LHX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Luing", "key": "LU", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Luing Cross", "key": "LUX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Maine Anjou", "key": "MA", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Marchigiana", "key": "MAR", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Maine Anjou Cross",
                "key": "MAX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Marchigiana Cross",
                "key": "MARX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Meuse Rhine Issel",
                "key": "MRI",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Meuse Rhine Issel Cross",
                "key": "MRIX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Montbeliarde", "key": "MO", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Montbeliarde Cross",
                "key": "MOX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Murray Grey", "key": "MG", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Murray Grey Cross",
                "key": "MGX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Normande", "key": "NO", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Normande Cross",
                "key": "NOX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Northern Dairy Shorthorn",
                "key": "NDS",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Norwegian Red", "key": "NR", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Norwegian Red Cross",
                "key": "NRX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Old English", "key": "OE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Old English Cross",
                "key": "OEX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Other Dairy", "key": "OD", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Parthenais", "key": "PA", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Parthenais Cross",
                "key": "PAX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Piemontese", "key": "PI", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Piemontese Cross",
                "key": "PIX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Pinzgauer", "key": "PIN", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Pinzgauer Cross",
                "key": "PINX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Red Poll", "key": "RP", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Red Poll Cross",
                "key": "RPX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Reggiana", "key": "RE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Reggiana Cross",
                "key": "REX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Riggit Galloway",
                "key": "RG",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Romagnola", "key": "RO", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Riggit Galloway Cross",
                "key": "RGX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Romagnola Cross",
                "key": "ROX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Rotebunde", "key": "ROT", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Rotebunde Cross",
                "key": "ROTX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Salers", "key": "SA", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Salers Cross", "key": "SAX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Shetland", "key": "SH", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Shetland Cross",
                "key": "SHX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Shorthorn", "key": "SHO", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Shorthorn Cross",
                "key": "SHOX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Simmental", "key": "SM", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Simmental Cross",
                "key": "SMX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "South Devon", "key": "SD", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "South Devon Cross",
                "key": "SDX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Speckle Park", "key": "SP", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Speckle Park Cross",
                "key": "SPX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Stabiliser", "key": "ST", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Stabiliser Cross",
                "key": "STX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Swedish Red", "key": "SR", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Swedish Red Cross",
                "key": "SRX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Swedish Red Polled",
                "key": "SRP",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Swedish Red and White",
                "key": "SRW",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Swedish Red and White Cross",
                "key": "SRWX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Swiss Braunvieh",
                "key": "SB",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Swiss Braunvieh Cross",
                "key": "SBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Swiss Orig Braunvieh",
                "key": "SOB",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Swiss Orig Braunvieh Cross",
                "key": "SOBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Swiss Grey", "key": "SG", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Swiss Grey Cross",
                "key": "SGX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Sussex", "key": "SU", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Sussex Cross", "key": "SUX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Tyrone Black", "key": "TB", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Tyrone Black Cross",
                "key": "TBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Vaynol", "key": "VA", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Vaynol Cross", "key": "VAX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Wagyu", "key": "WA", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Wagyu Cross", "key": "WAX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Water Buffalo", "key": "BU", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Welsh Black", "key": "WB", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Welsh Black Cross",
                "key": "WBX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Welsh White", "key": "WW", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "Welsh White Cross",
                "key": "WWX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "White Galloway", "key": "WG", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "White Galloway Cross",
                "key": "WGX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Whitebred Shorthorn",
                "key": "WS",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {
                "name": "Whitebred Shorthorn Cross",
                "key": "WSX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "White Park", "key": "WP", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {
                "name": "White Park Cross",
                "key": "WPX",
                "createdAt": Sequelize.fn('NOW'),
                "updatedAt": Sequelize.fn('NOW')
            },
            {"name": "Yak", "key": "YK", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Yak Cross", "key": "YKX", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')},
            {"name": "Zebu", "key": "ZE", "createdAt": Sequelize.fn('NOW'), "updatedAt": Sequelize.fn('NOW')}], {});

    },

    down: function (queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */

        return queryInterface.bulkDelete('Breeds', null, {});
    }
};
