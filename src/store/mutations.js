export default {
    changeCity (state,city) {
        state.city = city;
        try {
            localStorage.city = city; //将城市存起来
        } catch (e) {

        }

    }
}
