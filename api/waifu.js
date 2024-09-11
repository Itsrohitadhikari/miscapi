// api/waifu.js

const axios = require('axios');

const apis = [
  { url: 'https://api.waifu.im/search?included_tags=waifu', provider: 'waifu.im', imageKey: 'images[0].url' },
  { url: 'https://api.waifu.pics/sfw/waifu', provider: 'waifu.pics', imageKey: 'url' },
  { url: 'https://nekos.best/api/v2/waifu', provider: 'nekos.best', imageKey: 'results[0].url' },
];

async function checkApi(api) {
  try {
    const response = await axios.get(api.url);
    return response.status === 200 ? api : null;
  } catch (error) {
    return null;
  }
}

async function getRandomImage(availableApis) {
  const randomApi = availableApis[Math.floor(Math.random() * availableApis.length)];
  const response = await axios.get(randomApi.url);

  let imageUrl;
  if (randomApi.imageKey.includes('[')) {
    const keys = randomApi.imageKey.split(/[[\]]/).filter(Boolean);
    imageUrl = response.data;
    for (const key of keys) {
      imageUrl = imageUrl[key];
    }
  } else {
    imageUrl = response.data[randomApi.imageKey];
  }

  return { image_url: imageUrl, provider: randomApi.provider };
}

module.exports = async (req, res) => {
  try {
    const availableApis = (await Promise.all(apis.map(checkApi))).filter(Boolean);

    if (availableApis.length === 0) {
      return res.status(500).json({ error: 'All APIs are currently unavailable' });
    }

    const imageResponse = await getRandomImage(availableApis);

    res.status(200).json(imageResponse);
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};
