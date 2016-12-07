/**
 * Created by dirago on 01/12/2016.
 */
class GestionnaireJSON {

    constructor(){
    }
    /**
     *
     * @param url
     */
    getJSONfromURL(url){
        this.loadJSON(url).then(function(){

        })
    }
    /**
     * function qui charge le JSON puis le parse
     * @param url
     * @returns {Promise} => Ajax
     */
    loadJSON(url){
        return new Promise(function(resolve, reject) {
            let req = new XMLHttpRequest();
            // req.onreadystatechange = function () {
            //     if (req.readyState === 4 && req.status == 200) {
            //         // alert('on y est')
            //         return self.data = JSON.parse(this.responseText);
            //
            //     }
            // }
            req.onload = (e) => console.log(this);
            req.onerror = function () {
                onError(new Error('XMLHttpRequest Error : ' + this.status.text));
            }
            req.open(url);
            req.send();
        })
    }
}