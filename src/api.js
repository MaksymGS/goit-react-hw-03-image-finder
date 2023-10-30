import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (searchQuery, page) => {
    const params = new URLSearchParams({
        key: '39251476-ee5588a1bda73807a34505b10',
        q: `${searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${page}`,
        per_page: 12,
      });
    const resp = await axios.get(`?${params}`);
    return resp.data;
  };
