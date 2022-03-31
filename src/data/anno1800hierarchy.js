/* eslint-disable indent */
/*
    This is the hierarchy needed for Production Chains
    There is a function in anno1800hierarchy.js which fetches all necessary Data for the following GUIDS
    This function is called getEndProductsAsTree()

    The data gets processed to:
    {
        regions: [
            guid:
            name:
            icon:
            populationLevels: [
                {
                    guid:
                    name:
                    icon:
                    factories: []
                    factoryData: [
                        {
                            guid:
                            name:
                            icon:
                        }
                    ]
                }
            ]
        ]
    }

    Information can be hardcoded here to override result data (e.g. names or icons).
    These hardcoded values will be ignored
*/
export default {
    regions: [
        {
            guid: 5000000, // Old World / Trelawney
            populationLevels: [{
                guid: 15000000, // Farmers
                factories: [100451, 1010278, 1010294, 1010315]
            },
            {
                guid: 15000001, // Workers
                factories: [1010283, 1010316, 1010288, 1010291, 1010281, 1010296, 1010299, 1010292]
            },
            {
                guid: 15000002, // Artisans
                factories: [1010285, 1010295, 1010284, 1010325]
            },
            {
                guid: 15000003, // Engineers
                factories: [1010280, 101250, 1010301, 1010323, 1010302, 1010324, 1010286]
            },
            {
                guid: 15000004, // Investors
                factories: [100659, 1010328, 1010326, 1010303]
            },

            {
                guid: 118745, // Scholars
                factories: [118733, 118734, 118735, 124738, 124737, 124739]
            }, {
                guid: 601379, // Tourists
                factories: [133496, 132786, 132777, 133533],
                name: 'Tourists (WIP)'
            }]
        },
        {
            guid: 5000001, // New World
            populationLevels: [{
                guid: 15000005, // Jornaleros
                factories: [101261, 101264, 101265, 1010340, 101266]
            },
            {
                guid: 15000006, // Obreros
                factories: [101268, 101271, 101251, 101273, 1010342, 1010341]
            }]
        },
        {
            guid: 160001, // The Arctic
            populationLevels: [{
                guid: 112642, // Explorer
                factories: [114704, 112668, 112675, 112679]
            },
            {
                guid: 112643, // Technicians
                factories: [112672, 112680]
            }]
        },
        {
            guid: 114327, // Enbesa
            populationLevels: [{
                guid: 114329, // Sheperds
                factories: [114456, 114466, 114444, 114468]
            },
            {
                guid: 114330, // Elders
                factories: [114467, 118725, 114469, 114471, 114472, 114470, 114464]
            }]
        }

    ]
}
