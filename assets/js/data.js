let data = (() => {
    try {
        const url = "/animales.json";
        const getData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            const { animales } = json;
            return animales;
        }
        console.log('Conexión exitosa a la API.')
        return { getData };
    } catch (error) {
        console.log(error);
    }
})();

export default data;