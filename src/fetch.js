export default function get(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (!data) {
            
              return reject(data);
            }
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
}