// api.js
const items = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description for Item 1',
      // Other details...
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description for Item 2',
      // Other details...
    },
    // Add more items as needed...
  ];
  
  export const getItemDetails = (itemId) => {
    return new Promise((resolve, reject) => {
      // Simulate an API call with a delay
      setTimeout(() => {
        const item = items.find((item) => item.id === itemId);
        if (item) {
          resolve(item);
        } else {
          reject(new Error('Item not found'));
        }
      }, 1000); // Simulated delay of 1 second
    });
  };
  