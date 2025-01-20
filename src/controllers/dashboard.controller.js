import auth from "../utils/auth.js";
import Data from '../data/data.js';

export const GetGames = async (req, res) => {

    try {
        const result = await auth(req);
        if (result) {

            const groups = Data.groups.map((data) => data.games)
            const flattenedArray = groups.flat();
            const uniqueValues = new Set(flattenedArray);
            const combinedArray = Array.from(uniqueValues);
            const filteredGames = Data.games.filter((data) => combinedArray.includes(data.id)).sort((a, b) => a.id - b.id);

            return res.status(200).json({
                status: 'success',
                data: filteredGames,
            });
        }
        return res.status(400).json({
            status: 'fail',
            data: 'Error',
        });


    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}

export const GetProvider = async (req, res) => {

    try {
        const result = await auth(req);
        if (result) {
            return res.status(200).json({
                status: 'success',
                data: Data.providers,
            });
        }
        return res.status(400).json({
            status: 'fail',
            data: 'Error',
        });

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}

export const GetGroups = async (req, res) => {

    try {
        const result = await auth(req);
        if (result) {
            return res.status(200).json({
                status: 'success',
                data: Data.groups,
            });
        }
        return res.status(400).json({
            status: 'fail',
            data: 'Error',
        });

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}