let defaultCity = '上海';
try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e) {

}

export default {
    city: defaultCity  //localStorage.city || '上海'//先从localStorage中取，如果没有再用“上海”
}
